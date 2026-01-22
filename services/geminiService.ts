/**
 * 分析 YouTube 视频字幕
 * Analyze YouTube video transcript
 * 
 * 通过 Vercel Serverless Function API 路由调用，保护 API Key 安全
 * Calls through Vercel Serverless Function API route to protect API Key security
 * 
 * @param transcript - The full text of the video transcript
 * @returns The analyzed text in Markdown format
 */
export const analyzeTranscript = async (transcript: string): Promise<string> => {
  try {
    // API 路由 URL（Vercel 会自动处理路由）
    // API route URL (Vercel handles routing automatically)
    const apiUrl = '/api/analyze';

    // 调用 Vercel Serverless Function
    // Call Vercel Serverless Function
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transcript }),
    });

    // 检查响应状态
    // Check response status
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    // 解析响应数据
    // Parse response data
    const data = await response.json();
    
    if (!data.result) {
      throw new Error('No result returned from API');
    }

    return data.result;
  } catch (error: any) {
    console.error("Analysis Error:", error);
    // 提供更友好的错误信息
    // Provide more user-friendly error messages
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('无法连接到服务器。请检查网络连接或稍后重试。\n\nUnable to connect to server. Please check your network connection or try again later.');
    }
    throw error;
  }
};