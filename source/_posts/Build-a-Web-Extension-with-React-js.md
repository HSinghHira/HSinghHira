---
title: Build a Web Extension with React.js
author: Harman Singh Hira
date: 2025-07-27 18:53:54
tags:
---
Ready to craft a web extension that’ll dazzle Chrome and Firefox users? 🌐 Let’s dive into this step-by-step adventure with Vite, Tailwind CSS, and a sprinkle of zippy magic! 🚀 Buckle up and let’s make your browser shine! ✨


### 🌍 Install Chrome & Firefox — Your Testing Turf 🦊🔵

First, make sure you've got **Chrome** and **Firefox** installed. These are your playgrounds for testing your epic extension. No browsers, no glory! 😎

### 📦 Kick Things Off with Vite's Web Extension Plugin 🛠️

Let’s get the party started by scaffolding your extension with a single command. Run this and watch the magic unfold! 🎉

```bash
npm create vite-plugin-web-extension
```

### 🛤️ Fix That Pesky Directory Switch 🚧

If the command gods aren't cooperating, you might need to manually hop into your project folder. Try this, or click your way to victory! 🖱️

```bash
cd "app"
```

*Pro tip*: If it’s acting stubborn, navigate to the folder manually like a true explorer. 🧭

### 📥 Load Up the Node Goodies 📦

Feed your project the dependencies it craves. This command is like tossing a Happy Meal to your code! 🍔

```bash
npm install
```

### 🎨 Sprinkle in Some Tailwind CSS Magic ✨

Time to make your extension look slick with Tailwind CSS. Install these beauts and get ready to style! 💅

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 🖌️ Add Tailwind to Your Popup’s Style Sheet 🎨

Open `pages/Popup.css` and drop in these Tailwind directives to give your popup some serious flair! 🔥

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 🧩 Wire Up Tailwind in `pages/Popup.jsx` 🛠️

Let’s make your popup pop! Update `pages/Popup.jsx` with this code to import Tailwind and say “Hello World” with style. 😎

```jsx
import { useEffect } from "react";
import "./Popup.css";

export default function () {
  useEffect(() => {
    console.log("Hello from the popup! 👋");
  }, []);

  return <h1 className="font-bold text-3xl underline">Hello world! Test 🚀</h1>;
}
```

### ⚙️ Tweak `tailwind.config.js` for Maximum Style 💪

Configure Tailwind to play nice with your files. Update `tailwind.config.js` like so to ensure your styles are applied everywhere they should be! 🌟

```javascript
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}', // Point to your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 🏃‍♂️ Run Your Extension in Dev Mode 🏁

Time to see your creation in action! Fire up the dev server and watch your extension come to life. 🎬

```bash
npm run dev
```

### 📦 Zip It Up for the Big Leagues! 🗳️

Ready to package your extension for the world? Let’s create a shiny `extension.zip` file. First, install the zipping tool:

```bash
npm i zip-a-folder
```

Then, create a `zipScript.js` file to bundle your `dist` folder into a neat little zip package. 📬

```javascript
import { zip } from "zip-a-folder";
await zip("dist", "extension.zip");
```

### 🛠️ Update `package.json` for Easy Building 🛠️

Add these scripts to your `package.json` to streamline building and zipping. It's like giving your project a turbo button! 🚀

```json
{
  "scripts": {
    "build": "vite build && node zipScript.js",
    "zip": "node zipScript.js"
  }
}
```

### 🎉 Kaboom! You're an Extension Extraordinaire! 🌟

Congrats, you've built a web extension that's ready to rock Chrome and Firefox! 🎊 Load it up, test it out, and maybe add some extra pizzazz to make it *yours*. Now go conquer the browser world, you coding superhero! 🦸‍♀️💾

