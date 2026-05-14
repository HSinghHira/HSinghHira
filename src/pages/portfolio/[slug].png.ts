import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@/utils/generateOgImages";

export async function getStaticPaths() {
  const portfolio = await getCollection("portfolio");
  return portfolio.map(item => ({
    params: { slug: item.id },
    props: { item },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { item } = props as { item: CollectionEntry<"portfolio"> };
  const buffer = await generateOgImageForPost(item);
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
