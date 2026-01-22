# 部署检查清单 / Deployment Checklist

## ✅ 部署前检查 / Pre-Deployment Checklist

### 1. 代码更改确认 / Code Changes Confirmation

- [x] ✅ API Key 已从客户端代码移除，改为通过 Serverless Function 保护
- [x] ✅ 创建了 `/api/analyze.ts` Serverless Function
- [x] ✅ 更新了 `services/geminiService.ts` 使用 API 路由
- [x] ✅ 创建了 `vercel.json` 配置文件
- [x] ✅ 更新了 `package.json` 添加 `@vercel/node` 依赖
- [x] ✅ `.gitignore` 已包含环境变量文件

### 2. 本地测试 / Local Testing

在推送到 GitHub 之前，建议先本地测试：

#### 选项 A: 使用 Vercel CLI（推荐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录运行（会启动本地开发服务器，包括 API 路由）
vercel dev
```

#### 选项 B: 仅测试前端（API 路由需要部署后才能测试）

```bash
npm run dev
```

> ⚠️ **注意**: 使用 `npm run dev` 时，API 路由不会工作，因为 Vite 不处理 Serverless Functions。你需要先部署到 Vercel 或使用 `vercel dev`。

### 3. GitHub 上传前检查 / Pre-GitHub Upload Checklist

- [ ] 确认 `.env.local` 文件没有被提交（已在 `.gitignore` 中）
- [ ] 确认没有硬编码的 API Key 在代码中
- [ ] 运行 `npm run build` 确保构建成功
- [ ] 检查 `package.json` 中的依赖版本

### 4. Vercel 部署后检查 / Post-Vercel Deployment Checklist

- [ ] 在 Vercel 项目设置中添加 `API_KEY` 环境变量
- [ ] 确认环境变量已应用到所有环境（Production, Preview, Development）
- [ ] 访问部署链接测试功能
- [ ] 打开浏览器开发者工具，检查 Network 标签：
  - [ ] 确认 `/api/analyze` 请求成功
  - [ ] 确认 API Key **不在**客户端代码中（检查 Sources 标签）
- [ ] 测试完整的分析流程

## 🔍 常见问题 / Common Issues

### 问题 1: 部署后 API 返回 500 错误

**原因**: API Key 未在 Vercel 环境变量中设置

**解决方案**:
1. 进入 Vercel 项目 → Settings → Environment Variables
2. 添加 `API_KEY` 变量
3. 重新部署

### 问题 2: 本地开发时 API 路由不工作

**原因**: Vite 开发服务器不处理 Serverless Functions

**解决方案**:
使用 `vercel dev` 而不是 `npm run dev`

### 问题 3: CORS 错误

**原因**: 如果遇到 CORS 错误，检查 `vercel.json` 配置

**解决方案**:
确保 `vercel.json` 中的 rewrites 配置正确

## 📝 部署步骤总结 / Deployment Steps Summary

1. **GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Vercel**:
   - 登录 Vercel
   - 导入 GitHub 仓库
   - 添加 `API_KEY` 环境变量
   - 部署

3. **验证**:
   - 访问部署链接
   - 测试功能
   - 检查 API Key 安全性

## 🔗 有用的链接 / Useful Links

- [Vercel 文档](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Google Gemini API](https://ai.google.dev/)
