# OpenClaw Plan

一个可直接上传到 GitHub 并部署到 Vercel 的 `React + Vite + Tailwind CSS` 演示项目，页面内容、UI 和交互按给定源码整理。

## 项目结构

```text
openclaw-plan/
├── .gitignore
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── src/
│   ├── Presentation.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 本地启动

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
```

## 部署到 Vercel

1. 将 [openclaw-plan](/Users/kevin/Documents/code/openclaw-plan) 推送到 GitHub。
2. 在 Vercel 中导入该仓库。
3. Framework Preset 选择 `Vite`。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `dist`。

项目已包含 [vercel.json](/Users/kevin/Documents/code/openclaw-plan/vercel.json)，可直接部署。
