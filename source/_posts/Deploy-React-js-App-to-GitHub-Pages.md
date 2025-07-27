---
title: Deploy React.js App to GitHub Pages
author: Harman Singh Hira
tags:
  - Blog
categories:
  - Blog
date: 2025-07-27 17:38:21
---
Ready to blast your React app into the GitHub galaxy? 🌌 This guide’s got all the witty steps to deploy your masterpiece with Vite, GitHub Pages, and a dash of React Router flair. Let’s roll! 😎

### 🛠️ Set the Stage in `vite.config.js` 🎬

First, tell Vite where your app will live in the GitHub universe. Update `vite.config.js` with your repo name for that perfect URL path. 📍

```javascript
base: "/[REPO_NAME]/",
```

### 🛠️ Craft a GitHub Workflow Like a Pro 🛠️

Time to automate the deployment magic! Create a `.github/workflows/deploy.yml` file and paste this YAML goodness to build and deploy like a boss. 💪

```yaml
name: Deploy to Website

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20" # Adjust to your Node vibe

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v4
        with:
          name: production-files
          path: ./build

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4
        with:
          name: production-files
          path: ./build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          cname: www.terminaltales.com # Swap with your custom domain
```

### 🌍 Create a GitHub Repo & Push It Real Good 📤

Head to GitHub, create a new repo, and initialize your project like a code ninja. 🥷 Run these commands to get your files up in the cloud:

```bash
git init && git add . && git commit -m "add: initial files"
git branch -M main
git remote add origin https://github.com/[USER]/[REPO_NAME]
git push -u origin main
```

### ⚙️ Flip the GitHub Workflow Switch 🔧

Activate those GitHub Actions like you’re flipping on a spaceship’s hyperdrive! 🚀

- Go to **Repo > Settings > Actions > General > Workflow permissions** and grant **Read and Write permissions**.
- If a deploy fails, head to **Actions > Failed Deploy > Re-run Failed Jobs**.
- Set up Pages: **Settings > Pages > Source > gh-pages > Save**.

### 🛤️ Add React Router for Smooth Navigation 🗺️

Make your app a multi-page marvel with React Router. Install it with Bun and keep the party going! 🎉

```bash
bun add react-router-dom
```

### 🏠 Set Your Homepage in `package.json` 🏡

Let the world know where your app lives. Add this to your `package.json` for that polished URL touch. 🌐

```json
{
  "homepage": "[PROJECT_URL]"
}
```

### 🛑 Handle 404s Like a Champ with `public/404.html` 🚧

Create a `public/404.html` file to catch stray visitors and redirect them smoothly. This script’s got your back! 🦸‍♂️

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>React Router</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;

      var l = window.location;
      l.replace(
        l.protocol +
          "//" +
          l.hostname +
          (l.port ? ":" + l.port : "") +
          l.pathname
            .split("/")
            .slice(0, 1 + pathSegmentsToKeep)
            .join("/") +
          "/?/" +
          l.pathname.slice(1).split("/").slice(pathSegmentsToKeep).join("/").replace(/&/g, "~and~") +
          (l.search ? "&" + l.search.slice(1).replace(/&/g, "~and~") : "") +
          l.hash
      );
    </script>
  </head>
  <body></body>
</html>
```

### 🧠 Add a Smart Script to `index.html` 🧩

Pop this script into the `<head>` of your `index.html` to keep React Router’s URLs clean and tidy. It’s like a digital broom! 🧹

```html
<script type="text/javascript">
  (function (l) {
    if (l.search[1] === "/") {
      var decoded = l.search
        .slice(1)
        .split("&")
        .map(function (s) {
          return s.replace(/~and~/g, "&");
        })
        .join("?");
      window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
    }
  })(window.location);
</script>
```

### 📡 Beam It Up to GitHub! 🚀

One final push to send your changes into orbit. Run this to commit and deploy your masterpiece! 🌠

```bash
git add -A && git commit -m "Building" && git push
```

### 🎉 Houston, We Have Liftoff! 🪐

Congrats, your React app is live on GitHub Pages! 🎊 Take a victory lap, tweak some styles, and keep building epic stuff. You’re officially a deployment dynamo! 😎💾

