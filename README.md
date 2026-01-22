<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# DREAME RVC Video Analysis

YouTube 视频字幕分析工具，使用 Google Gemini AI 提取产品优势和痛点。

YouTube video transcript analysis tool that uses Google Gemini AI to extract product strengths and pain points.

View your app in AI Studio: https://ai.studio/apps/drive/1l8DJYDUwiS-dCZaXx4SJ2SAaMbJbyJo2

## 🚀 快速开始 / Quick Start

### 本地运行 / Run Locally

**前置要求 / Prerequisites:** Node.js 18+ 

1. 安装依赖 / Install dependencies:
   ```bash
   npm install
   ```

2. 创建环境变量文件 / Create environment file:
   ```bash
   # 创建 .env.local 文件
   # Create .env.local file
   echo "API_KEY=your_gemini_api_key_here" > .env.local
   ```
   
   > ⚠️ **注意**: 本地开发时，API Key 仅用于测试。实际部署时，API Key 会通过 Vercel Serverless Function 保护。
   > 
   > ⚠️ **Note**: For local development, API Key is only for testing. In production, API Key is protected via Vercel Serverless Function.

3. 运行开发服务器 / Run development server:
   ```bash
   npm run dev
   ```

4. 打开浏览器访问 / Open browser:
   ```
   http://localhost:5173
   ```

## 📦 部署到 GitHub 和 Vercel / Deploy to GitHub & Vercel

### 步骤 1: 上传到 GitHub

1. **初始化 Git 仓库** (如果还没有):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **在 GitHub 创建新仓库**:
   - 访问 https://github.com/new
   - 创建新仓库（例如：`dreame-rvc-video-analysis`）
   - **不要**初始化 README、.gitignore 或 license（我们已经有了）

3. **推送代码到 GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/dreame-rvc-video-analysis.git
   git branch -M main
   git push -u origin main
   ```

### 步骤 2: 部署到 Vercel

1. **登录 Vercel**:
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**:
   - 点击 "Add New..." → "Project"
   - 选择你的 GitHub 仓库
   - Vercel 会自动检测 Vite 项目配置

3. **配置环境变量**:
   - 在项目设置页面，进入 "Settings" → "Environment Variables"
   - 添加环境变量：
     - **Name**: `API_KEY`
     - **Value**: 你的 Google Gemini API Key
     - **Environment**: 选择 "Production", "Preview", "Development"（全选）
   - 点击 "Save"

4. **部署**:
   - 点击 "Deploy" 按钮
   - Vercel 会自动构建和部署你的应用
   - 部署完成后，你会获得一个可分享的链接，例如：`https://your-project.vercel.app`

### 步骤 3: 验证部署

1. **访问部署链接**，测试应用功能
2. **检查 API 路由**:
   - 打开浏览器开发者工具 (F12)
   - 尝试分析一个视频字幕
   - 在 Network 标签中，应该看到对 `/api/analyze` 的请求
   - API Key **不应该**出现在客户端代码中

## 🔒 安全说明 / Security Notes

- ✅ **API Key 保护**: API Key 现在通过 Vercel Serverless Function (`/api/analyze`) 保护，不会暴露在客户端代码中
- ✅ **环境变量**: `.env.local` 文件已添加到 `.gitignore`，不会被提交到 GitHub
- ✅ **生产环境**: 在 Vercel 上，API Key 通过环境变量安全存储

## 📁 项目结构 / Project Structure

```
.
├── api/
│   └── analyze.ts          # Vercel Serverless Function (保护 API Key)
├── components/             # React 组件
├── services/
│   └── geminiService.ts    # 前端 API 调用服务
├── constants.ts            # 常量配置（系统指令等）
├── vercel.json             # Vercel 配置文件
└── package.json            # 项目依赖
```

## 🛠️ 技术栈 / Tech Stack

- **前端**: React + TypeScript + Vite
- **样式**: Tailwind CSS
- **AI**: Google Gemini API (gemini-3-flash-preview)
- **部署**: Vercel Serverless Functions
- **Markdown**: react-markdown

## 📝 使用说明 / Usage

1. 从 YouTube 视频获取字幕（点击 "..." → "显示字幕"）
2. 复制完整字幕文本
3. 粘贴到左侧输入框
4. 点击 ✨ 按钮进行分析
5. 查看右侧的分析结果（产品优势和痛点）

## 🐛 故障排除 / Troubleshooting

### 本地开发时 API 调用失败

如果使用 `npm run dev` 本地开发，需要配置 Vite 代理或使用 Vercel CLI：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录运行
vercel dev
```

### Vercel 部署后 API 返回 500 错误

1. 检查 Vercel 环境变量中 `API_KEY` 是否正确设置
2. 检查 Vercel 部署日志中的错误信息
3. 确保 API Key 有效且有足够的配额

## 📄 许可证 / License

MIT
