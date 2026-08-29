# Auto Rogue: Neon Abyssal

一个可直接部署的网页 Roguelike 自动游戏。英雄会自动探索、补给、战斗、拾取、升级并尝试清空地牢后抵达出口。

## 本地运行

```bash
npm install
npm run dev
```

然后打开 http://127.0.0.1:4173/ 。

## GitHub Pages 免费静态部署（不跑 Node / 不跑 Actions）

本仓库已经把可发布的纯静态页面放在 `docs/` 目录。

要用 GitHub Pages 免费静态页面发布：

1. 进入 GitHub 仓库的 **Settings → Pages**。
2. 在 **Build and deployment → Source** 中选择 **Deploy from a branch**。
3. Branch 选择 `main`，目录选择 `/docs`。
4. 点击 **Save**。
5. 等 GitHub Pages 发布完成后，公开地址通常是：

```text
https://<你的用户名>.github.io/<仓库名>/
```

对于这个仓库，通常是：

```text
https://effrot.github.io/rouge/
```

`docs/` 里面是浏览器可直接打开的 HTML/CSS/JS 静态文件，不需要 Node.js 服务器，也不需要 GitHub Actions 计费分钟。

## 开发与验收

```bash
npm test
npm run build
```

`npm run build` 仍会生成 `dist/`，方便本地检查或部署到其他静态托管；GitHub Pages 免费静态发布使用 `docs/`。
