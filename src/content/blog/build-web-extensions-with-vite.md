---
title: Build Web Extensions with Vite
slug: build-web-extensions-with-vite
author: Harman Singh Hira
description: >-
  Learn to build cross-browser extensions for Chrome and Firefox using Vite,
  React, and Tailwind CSS. Complete step-by-step guide with code examples.
pubDatetime: 2025-12-07T07:05:00.000Z
modDatetime: 2025-12-09T07:05:00.000Z
tags:
  - Vite
  - Tailwind CSS
  - React JS
  - Vue JS
draft: false

published: 2025-12-08T04:48:58.000Z
---

no cap fr fr, we're about to build the most bussin' browser extension using Vite, Tailwind CSS, and some zip magic ✨ this gonna hit different i promise 💯

## Table of contents

## 🌐 Download Chrome & Firefox (duh) 🦊💙

bestie you literally NEED Chrome and Firefox installed for testing. like... how else are you gonna test it??? 😭 no browsers = no vibes = L 📉

## 📦 Let's Get This Bread with Vite 🍞

okay so run this command and watch the magic happen fr fr ✨

```bash
bun create vite-plugin-web-extension
```

(btw bun is goated, npm is giving 2022 energy but do you i guess 💀)

## Pick Your Main Character Energy ⚡

when it asks, enter your project name (be creative bestie). then choose your template:

- Vanilla JavaScript
- Vanilla TypeScript
- Vue JavaScript
- Vue TypeScript
- React JavaScript 👈 (this is IT chief)
- React TypeScript
- Svelte JavaScript
- Svelte TypeScript

pick your package manager (i'm team bun but that's just me being based 😎)

## 🛤️ CD Into That Folder Real Quick 📁

if it doesn't auto-cd for you (ugh so annoying), just do it yourself king/queen 👑

```bash
cd "Project-Name"
```

literally just navigate there manually if you have to, it's not that deep 🙄

## 📦 Install the Rest of the Squad 🤝

```bash
bun add tailwindcss @tailwindcss/vite cross-env zip-a-folder -d npm-run-all
```

## 🎨 Make It GORGEOUS with Tailwind CSS 💅✨

time to make this extension absolutely SLAY with some styling periodt 💅

update your `vite.config.js` (copy-paste this bestie, you're welcome):

```javascript
import { defineConfig } from "vite";
// [!code highlight:1]
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    // [!code highlight:1]
    tailwindcss(),
  ],
});
```

## 🖌️ Add Tailwind to Your Popup's CSS 💖

open `pages/Popup.css` and yeet this in there:

```css
@import "tailwindcss";
```

that's it. that's the tweet. 🐦

## 🧩 Update Your Popup Component 🎯

let's make this popup absolutely iconic fr fr. update `pages/Popup.jsx`:

```jsx
import { useEffect } from "react";
import "./Popup.css";

export default function () {
  useEffect(() => {
    console.log("Hello from the popup! 👋");
  }, []);

  return <h1 className="text-3xl font-bold underline">Hello world! Test 🚀</h1>;
}
```

## 🦊 Firefox Support Because We're Inclusive Like That 🫶

## create `src/manifest.chrome.json`:

```json
{
  "manifest_version": 3,
  "icons": {
    "16": "icon/16.png",
    "32": "icon/32.png",
    "48": "icon/48.png",
    "96": "icon/96.png",
    "128": "icon/128.png"
  },
  "action": {
    "default_popup": "src/popup.html"
  },
  "background": {
    "service_worker": "src/background.js"
  }
}
```

## create `src/manifest.firefox.json`:

```json
{
  "manifest_version": 2,
  "icons": {
    "16": "icon/16.png",
    "32": "icon/32.png",
    "48": "icon/48.png",
    "96": "icon/96.png",
    "128": "icon/128.png"
  },
  "browser_action": {
    "default_popup": "src/popup.html"
  },
  "background": {
    "scripts": ["src/background.js"]
  }
}
```

## update `vite.config.js` (this is where the sauce is at 🔥):

```javascript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";

const target = process.env.TARGET || "chrome";

function generateManifest() {
  const manifestFile =
    target === "firefox"
      ? "src/manifest.firefox.json"
      : "src/manifest.chrome.json";

  const manifest = readJsonFile(manifestFile);
  const pkg = readJsonFile("package.json");
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

export default defineConfig({
  build: {
    outDir: `dist-${target}`,
  },
  plugins: [
    tailwindcss(),
    react(),
    webExtension({
      manifest: generateManifest,
      browser: target,
    }),
  ],
});
```

## update `package.json` scripts:

```json
  "scripts": {
    "dev": "vite",
    "dev:chrome": "cross-env TARGET=chrome vite",
    "dev:firefox": "cross-env TARGET=firefox vite --port 5174",
    "dev:both": "npm-run-all --parallel dev:chrome dev:firefox",
  },
```

## 🏃‍♀️ Run This Baby in Dev Mode 💨

okay moment of truth bestie, let's see this thing pop off 🎬

```bash
bun dev:both
```

## 📦 Zip It Up for Distribution 🗜️

ready to share your creation with the world? let's package this up ✨

create a `zipScript.js` file:

```javascript
import { zip } from "zip-a-folder";
await zip("dist", "extension.zip");
```

## 🛠️ Update package.json One Last Time 💪

add these scripts so you can build and zip with one command (efficiency queen/king 👑):

```json
  "scripts": {
    "dev": "vite",
    "dev:chrome": "cross-env TARGET=chrome vite",
    "dev:firefox": "cross-env TARGET=firefox vite --port 5174",
    "dev:both": "npm-run-all --parallel dev:chrome dev:firefox",
    "build": "vite build && node zipScript.js",
    "zip": "node zipScript.js"
  },
```

## 🎉 YEET! You Did That! 💯🔥

```
bun build
```

you literally just built a whole browser extension that works on BOTH Chrome AND Firefox??? the serve is immaculate 💅✨

now go test it, add your own flavor, and make it absolutely iconic. you're literally a coding icon now no cap 🦸‍♀️💻
