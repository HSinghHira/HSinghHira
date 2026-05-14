import type { APIRoute } from 'astro'
import { SITE } from "@/config";

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap.xml', site)

  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    `Disallow: ${SITE}/~partytown/`,
    '',
    `Sitemap: ${sitemapURL.href}`,
  ].join('\n')

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
