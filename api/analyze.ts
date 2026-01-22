import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// 系统指令（从 constants.ts 复制，因为 Serverless Function 无法直接导入）
const SYSTEM_INSTRUCTION = `
Role: You are a Senior UX Researcher specialized in Robotic Vacuums (brand: Dreame, Roborock, Ecovacs, Eufy, etc).
Task: Analyze the provided YouTube video transcript based on the following template.

MANDATORY OUTPUT FORMAT:
You must strictly follow the Markdown structure defined below. Do not change the headers or the bullet point format.

## 产品优势 (Product Strengths)
**功能/组件名称**
- [具体分析摘要 (中文)]
  [Timestamp] "[Original Quote (Translated to English)]"

## 问题与痛点 (Issues & Pain Points)
**功能/组件名称**
- [具体分析摘要 (中文)]
  [Timestamp] "[Original Quote (Translated to English)]"

Detailed Rules for Filling the Template:
1. **Structure**: 
   - Start with a bullet point "-" for the summary.
   - **CRITICAL**: The [Timestamp] and Quote must be on the **NEXT LINE** immediately below the summary, NOT in a new bullet point.
   - Do NOT add a blank line between the summary and the timestamp.
2. **Language Rules (STRICT)**: 
   - **Headers**: Use the provided bilingual headers.
   - **Feature Name**: Write strictly in **Simplified Chinese (简体中文)** (e.g., "边角清洁", "避障功能").
   - **Summary**: Write strictly in **Simplified Chinese (简体中文)**. Explain the feedback clearly.
   - **Quote**: Write strictly in **English**. 
     - If the transcript is in English, use the original quote.
     - If the transcript is in another language (e.g., Italian, Chinese, German), you **MUST TRANSLATE** the quote to English.
3. **Content**:
   - **Feature Name**: Be specific.
   - **Summary**: Describe the feedback, context (e.g., "on carpets"), and the specific pro/con.
   - **Evidence**: Provide the closest timestamp (e.g., 04:20) and the exact sentence (in English).
4. **Tone**: Professional, critical, rigorous, structured, and evidence-driven.
5. **No Emojis**: Do not use emojis in the generated text.

If the transcript is messy, extract the semantic meaning regarding product performance.
`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { transcript } = req.body;

    // 验证输入
    if (!transcript || typeof transcript !== 'string' || !transcript.trim()) {
      return res.status(400).json({ error: 'Transcript is required' });
    }

    // 验证是否包含时间戳
    const hasTimestamp = /\d+:\d{2}/.test(transcript);
    if (!hasTimestamp) {
      return res.status(400).json({ 
        error: 'Invalid transcript format. Transcript must include timestamps (e.g., "0:15 ...").' 
      });
    }

    // 从环境变量获取 API Key（Vercel 会自动注入）
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error('API_KEY is missing from environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error: API Key is missing. Please configure API_KEY in Vercel environment variables.' 
      });
    }

    // 初始化 Google Generative AI 客户端
    const ai = new GoogleGenAI({ apiKey });

    // 调用 Gemini API
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [{ text: `Here is the YouTube transcript to analyze:\n\n${transcript}` }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    // 提取生成的文本内容
    const text = response.text;
    if (!text) {
      throw new Error('No response generated from the model.');
    }

    // 返回分析结果
    return res.status(200).json({ result: text });
  } catch (error: any) {
    console.error('Gemini Analysis Error:', error);
    
    // 返回友好的错误信息
    const errorMessage = error?.message || 'Failed to analyze transcript';
    return res.status(500).json({ 
      error: errorMessage.includes('API_KEY') 
        ? 'Server configuration error: Please check API_KEY in Vercel environment variables.'
        : `Analysis failed: ${errorMessage}` 
    });
  }
}
