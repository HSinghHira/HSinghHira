import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@/utils/generateOgImages";

export async function getStaticPaths() {
  const stories = await getCollection("stories");
  return stories.map(story => ({
    params: { slug: story.id },
    props: { story },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { story } = props as { story: CollectionEntry<"stories"> };
  const buffer = await generateOgImageForPost(story);
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
