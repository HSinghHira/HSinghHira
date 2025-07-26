const cheerio = require("cheerio");

// List of domains to ignore (like your own website)
const whitelist = ["hsinghhira.me", "localhost"];

// Function to check if a link is external
function isExternalLink(url, siteUrl) {
  try {
    const linkUrl = new URL(url, siteUrl);
    const siteHost = new URL(siteUrl).hostname;
    return (
      linkUrl.hostname !== siteHost &&
      !whitelist.some((domain) => linkUrl.hostname.includes(domain))
    );
  } catch (e) {
    return false; // Skip invalid URLs
  }
}

// Hexo filter to modify links
hexo.extend.filter.register("after_render:html", function (data, context) {
  const $ = cheerio.load(data);
  const siteUrl = hexo.config.url; // Your website’s URL (e.g., http://yourwebsite.com)

  // Find all <a> tags
  $("a").each(function () {
    const href = $(this).attr("href");
    if (href && isExternalLink(href, siteUrl)) {
      // Encode the external URL in Base64
      const encodedUrl = Buffer.from(href).toString("base64");
      $(this).attr("href", `/go.html?u=${encodedUrl}`);
      $(this).attr("target", "_blank"); // Open in new tab
    }
  });

  return $.html();
});
