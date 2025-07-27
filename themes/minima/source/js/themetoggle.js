function setDarkMode(isDark) {
  const body = document.body;
  const darkBtn = document.getElementById("darkBtn");
  const lightBtn = document.getElementById("lightBtn");

  // Check if elements exist to avoid null errors
  if (!darkBtn || !lightBtn || !body) {
    console.error("Theme toggle elements or body not found");
    return;
  }

  if (isDark) {
    body.classList.add("darkmode");
    localStorage.setItem("preferredTheme", "dark");
    darkBtn.classList.add("hidden");
    lightBtn.classList.remove("hidden");
  } else {
    body.classList.remove("darkmode");
    localStorage.setItem("preferredTheme", "light");
    lightBtn.classList.add("hidden");
    darkBtn.classList.remove("hidden");
  }
}

// Set theme on initial load
(function () {
  const storedTheme = localStorage.getItem("preferredTheme");
  // Default to dark mode if no theme is stored
  const isDark = storedTheme === "dark" || !storedTheme;
  // Ensure DOM is fully loaded before running
  document.addEventListener("DOMContentLoaded", () => {
    setDarkMode(isDark);
  });
})();
