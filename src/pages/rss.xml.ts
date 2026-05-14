import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import getSortedPosts from "@/utils/getSortedPosts";
import { SITE } from "@/config";

export async function GET() {
  const posts = await getCollection("blog");
  const portfolio = await getCollection("portfolio", ({ data }) => !data.draft);
  const stories = await getCollection("stories");

  const sortedPosts = getSortedPosts(posts);
  const sortedPortfolio = portfolio.sort((a, b) => {
    const aDate = a.data.modDatetime ?? a.data.pubDatetime ?? new Date(0);
    const bDate = b.data.modDatetime ?? b.data.pubDatetime ?? new Date(0);
    return bDate.getTime() - aDate.getTime();
  });
  const sortedStories = stories.sort((a, b) => {
    const aDate = a.data.pubDatetime || a.data.date || new Date(0);
    const bDate = b.data.pubDatetime || b.data.date || new Date(0);
    return bDate.getTime() - aDate.getTime();
  });

  // Combine and sort all items by date
  const allItems = [
    ...sortedPosts.map(({ data, id, filePath }) => ({
      link: getPath(id, filePath),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime ?? 0),
    })),
    ...sortedPortfolio.map(({ data, id, filePath }) => ({
      link: getPath(id, filePath),
      title: data.title || '',
      description: data.description || '',
      pubDate: new Date(data.modDatetime ?? data.pubDatetime ?? 0),
    })),
    ...sortedStories.map(({ data, id, filePath }) => ({
      link: getPath(id, filePath),
      title: data.title,
      description: data.excerpt,
      pubDate: new Date(data.pubDatetime || data.date || 0),
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: allItems,
  });
}