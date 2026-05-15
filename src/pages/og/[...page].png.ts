import type { APIRoute } from "astro";
import { generateOgImage } from "@/utils/generateOgImages";

const pages = {
  portfolio: { title: "Portfolio", description: "A showcase of my recent work and projects.", category: "Work" },
  posts: { title: "Blog", description: "Thoughts, tutorials, and tech exploration.", category: "Writing" },
  stories: { title: "Stories", description: "Personal stories and experiences from my journey.", category: "Personal" },
  contact: { title: "Contact", description: "Let's connect and build something together.", category: "Connect" },
  journey: { title: "Journey", description: "My life timeline from Chandigarh to Auckland.", category: "Personal" },
  about: { title: "About", description: "The honest version of my story.", category: "Personal" },
};

export async function getStaticPaths() {
  return Object.keys(pages).map(key => ({
    params: { page: key },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const page = pages[params.page as keyof typeof pages];
  if (!page) return new Response("Not Found", { status: 404 });
  
  const buffer = await generateOgImage(page.title, page.description, page.category);
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
