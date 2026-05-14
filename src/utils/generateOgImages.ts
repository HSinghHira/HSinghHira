import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import OGTemplate from "./og-templates/Template";
import loadGoogleFonts from "./loadGoogleFont";

export async function generateOgImage(title: string, description?: string, category?: string) {
  const fonts = await loadGoogleFonts(title + (description || "") + (category || ""));
  const svg = await satori(
    OGTemplate({ title, description, category }),
    {
      width: 1200,
      height: 630,
      fonts: fonts as any,
    }
  );

  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog" | "portfolio" | "stories">) {
  const data = post.data as any;
  const title = data.title || data.name || "Untitled";
  const description = data.description || data.desc || "";
  const category = data.category || post.collection;
  
  return await generateOgImage(title, description, category);
}

export async function generateOgImageForSite() {
  const { SITE } = await import("@/config");
  return await generateOgImage(SITE.title, SITE.desc, "Home");
}
