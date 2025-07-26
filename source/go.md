---
title: Redirecting...
layout: false
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting</title>
</head>
<body>
  <p>Redirecting to <span id="targetLink">external site</span> in <span id="countdown">5</span> seconds...</p>
  <script>
    // Get the URL parameter and decode from Base64
    const params = new URLSearchParams(window.location.search);
    const encodedUrl = params.get('u') || '';
    let targetUrl = '/';
    try {
      targetUrl = encodedUrl ? atob(encodedUrl) : '/';
    } catch (e) {
      console.error('Failed to decode URL:', e);
    }
    
    // Update the link text
    const targetLink = document.getElementById('targetLink');
    targetLink.textContent = targetUrl;

    // Countdown and redirect
    let countdown = 5;
    const countdownElement = document.getElementById('countdown');
    const interval = setInterval(() => {
      countdown--;
      countdownElement.textContent = countdown;
      if (countdown <= 0) {
        clearInterval(interval);
        window.location.href = targetUrl;
      }
    }, 1000);

  </script>
</body>
</html>
