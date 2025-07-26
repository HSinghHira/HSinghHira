---
title: Redirecting...
layout: false
---

<p>Redirecting to <span id="targetLink">external site</span> in <span id="countdown">5</span> seconds...</p>

{% raw %}

<script>
  const params = new URLSearchParams(window.location.search);
  const encodedUrl = params.get('u') || '';
  let targetUrl = '/';
  try {
    targetUrl = encodedUrl ? atob(encodedUrl) : '/';
  } catch (e) {
    console.error('Failed to decode URL:', e);
  }

  document.getElementById('targetLink').textContent = targetUrl;

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

{% endraw %}
