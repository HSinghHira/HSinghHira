---
title: Add Dark Mode to React.js App
author: Harman Singh Hira
tags:
  - Blog
  - React.js
categories:
  - Blog
date: 2025-07-27 15:03:18
---
Wanna give your React app that sleek, moody dark mode vibe? 🌑 Let’s make it happen with some quick moves and a sprinkle of Tailwind magic. Buckle up, it’s toggle time! 🚀

### 🛠️ Snag the Dark Mode Package 📦

First things first, let’s grab a nifty little package to handle the light-to-dark sorcery. Pop this command into your terminal and let *Bun* do the heavy lifting! 🥐

```powershell
bun add use-react-dark-mode
```

### 🎨 Tweak Your Tailwind Config 🖌️

Time to tell Tailwind we’re ready to go dark. Crack open your **tailwind.config.js** and add this one-liner to make dark mode toggle like a champ. 💪

```javascript
darkMode: "class",
```

### 💻 Drop in the Code Magic ✨

Now, let’s weave some dark mode wizardry into your app. Import the **`useDarkMode`** hook and set up a toggle button that screams “cool coder alert!” 🔔 Here’s the code to make it pop:

```jsx
import useDarkMode from "use-react-dark-mode";

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <>
      <p className={isDark ? "text-white" : "text-black"}>
        Hello, I’m a chameleon! Try toggling to see me in {isDark ? "light" : "dark"} mode! 🦎
      </p>
      <button
        onClick={toggle}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </>
  );
}
```

### 🎉 Boom! You’re a Dark Mode Dynamo! 🌟

That’s it — you’ve just leveled up your React app with a slick dark mode toggle! 😎 Flip that switch, admire the vibes, and maybe add some extra flair to make it *yours*. Now go build something that shines (or glows in the dark)! 💾
