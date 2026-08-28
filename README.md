# Auto Rogue: Neon Abyssal

一个可直接部署的网页 Roguelike 自动游戏。英雄会自动探索、补给、战斗、拾取、升级并尝试清空地牢后抵达出口。

## 本地运行

```bash
npm install
npm run dev
```

然后打开 http://127.0.0.1:4173/ 。

## GitHub Pages 部署

本仓库已经包含 GitHub Actions 自动部署配置：`.github/workflows/pages.yml`。

要发布到 GitHub Pages：

1. 把此分支推送到 GitHub 仓库的 `main` 分支。
2. 进入 GitHub 仓库的 **Settings → Pages**。
3. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
4. 进入 **Actions** 页面，手动运行 **Deploy Auto Rogue to GitHub Pages**，或向 `main` 分支 push 触发部署。
5. 部署完成后，GitHub 会在 workflow 的 `deploy` job 中显示公开 URL，通常类似：

```text
https://<你的用户名>.github.io/<仓库名>/
```

## 验收

```bash
npm test
npm run build
```
