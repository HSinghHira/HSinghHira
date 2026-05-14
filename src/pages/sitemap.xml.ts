import { getCollection } from "astro:content";
import { SITE } from "@/config";

export async function GET() {
  const siteURL = SITE.website;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const portfolios = await getCollection("portfolio", ({ data }) => !data.draft);
  const stories = await getCollection("stories");

  const pages: { url: string; priority: number; lastmod?: string }[] = [
    { url: new URL("/", siteURL).href, priority: 1.0 },
    { url: new URL("/archives/", siteURL).href, priority: 0.8 },
    { url: new URL("/portfolio/", siteURL).href, priority: 0.8 },
    { url: new URL("/stories/", siteURL).href, priority: 0.8 },
    { url: new URL("/contact/", siteURL).href, priority: 0.5 },
    { url: new URL("/search/", siteURL).href, priority: 0.3 },
    { url: new URL("/tags/", siteURL).href, priority: 0.3 },
  ];

  // Add blog posts
  for (const post of posts) {
    const postDate = post.data.modDatetime || post.data.pubDatetime;
    pages.push({
      url: new URL(`/posts/${post.id}/`, siteURL).href,
      lastmod: postDate.toISOString(),
      priority: 0.7,
    });
  }

  // Add portfolio items
  for (const item of portfolios) {
    const itemDate = item.data.modDatetime || item.data.pubDatetime || new Date(0);
    pages.push({
      url: new URL(`/portfolio/${item.id}/`, siteURL).href,
      lastmod: itemDate.toISOString(),
      priority: 0.7,
    });
  }

  // Add stories
  for (const story of stories) {
    const storyDate = story.data.pubDatetime || story.data.date || new Date();
    pages.push({
      url: new URL(`/stories/${story.id}/`, siteURL).href,
      lastmod: storyDate.toISOString(),
      priority: 0.7,
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
      .map(
        (page) => `  <url>
    <loc>${page.url}</loc>
    ${"lastmod" in page ? `    <lastmod>${page.lastmod}</lastmod>` : ""}
    <changefreq>weekly</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`
      )
      .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
