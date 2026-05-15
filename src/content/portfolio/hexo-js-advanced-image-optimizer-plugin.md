---
title: Hexo JS Advanced Image Optimizer Plugin
description: >-
  The Hexo JS Advanced Image Optimizer Plugin enhances your Hexo JS site by
  leveraging the power of wsrv.nl, a high-performance image cache and resize
  service.
featured: false
draft: false
pubDatetime: 2025-12-11T00:02:00.000Z
modDatetime: 2025-12-11T00:02:00.000Z
tags:
  - Hexo JS
  - Image Optimize
image: >-
  https://raw.githubusercontent.com/HSinghHira/HSinghHira/astro-site/public/images/Hexo-JS-Advanced-Image-Optimizer-Plugin.png
imageAlt: Hexo JS Advanced Image Optimizer Plugin
technologies:
  - Hexo JS

github: "https://github.com/HSinghHira/hexo-adv-img-optimizer"
links:
  - url: https://www.npmjs.com/package/hexo-adv-img-optimizer
    icon: simple-icons:npm
    title: NPM JS
  - url: https://git.hsinghhira.me/hexo-adv-img-optimizer/
    icon: mdi:external-link
    title: Documentation

author: Harman Singh Hira
isSoftware: true
---

The Hexo JS Advanced Image Optimizer Plugin enhances your Hexo JS site by leveraging the power of wsrv.nl, a high-performance image cache and resize service. Powered by Cloudflare’s CDN, it delivers images from over 300 global datacenters, ensuring lightning-fast load times and optimal performance. With support for advanced image processing using technologies like nginx and libvips, this plugin transforms and optimizes images on-the-fly. It’s open-source, free to use, and seamlessly integrates with Hexo JS to process markdown images, cover images, CSS background images, and \<object> tags.

### Installation

Run the (any) following command in your Hexo project directory to install the plugin:

```javascript
bun add hexo-adv-img-optimizer --save
```

### Usage

After installing the plugin, all image urls will be converted to CDN urls automatically. For example:

```bash
#Example:
https://website.com/image.png -> //images.weserv.nl/?url=https://website.com/image.png
/image.png                    -> //images.weserv.nl/?url=https://website.com/image.png
```

where `https://website.com` is the url of your blog that you set in `_config.yml`.

### Configuration

The plugin can be configured globally in Hexo's `_config.yml` file under the `cdn` section or per post using front-matter in Markdown files. Front-matter settings override global settings for specific posts.

1. Open your Hexo project's `_config.yml` file.
2. Add a `cdn` section to configure global settings (see [Configuration](#configuration) below).
   Example:

```yaml
cdn:
  cdn_server: //wsrv.nl
  use_webp: true
  max_width: [1920, 1200, 800, 400]
```

#### Global Configuration (\_config.yml)

Add a `cdn` section to `_config.yml` to set default options for all images. All options are optional, and defaults are applied when not specified.

```yaml
cdn:
  cdn_server: //wsrv.nl
  native: false
  use_webp: true
  max_width: 1200
  filename: default-image
  brightness: 0
  quality: 75
  fit: cover
  .
  .
  .
```

#### Per-Post Configuration (Front-Matter)

Add a `cdn` section to a post’s front-matter to override global settings for that post’s images (e.g., cover image, markdown images, background images). For example:

```yaml
---
title: My Post
cdn:
  brightness: 20
  filename: post-specific-image
  quality: 80
  fit: contain
  .
  .
  .
---
```

#### 📀 Full Available Configuration Options

This page is getting way too longer so visit below link for full configration options.

> Please Visit: [https://git.hsinghhira.me/hexo-adv-img-optimizer/](https://git.hsinghhira.me/hexo-adv-img-optimizer/)

### Notes

- **Priority**: Front-matter options (`cdn: ...`) in a post override global settings in `_config.yml`. If neither is set, defaults like the page-title-based filename (`hello-example` for "Hello Example") or `null` are used.
- **Aliases**: Use either full names (e.g., `brightness`) or aliases (e.g., `bri`) in `_config.yml` or front-matter.
- **Validation**: Ensure values match the expected format (e.g., `crop` as `[10,20,100,100]`, `brightness` as a number between -100 and 100) to avoid errors.
- **SVG Exclusion**: SVG images are excluded from CDN processing to preserve their vector format.
- **CDN Support**: Verify that your CDN (e.g., `images.weserv.nl`) supports the specified options. Invalid values may be ignored.
- **Testing**: After configuration, run `hexo generate` and inspect the generated HTML to confirm CDN URLs include the desired parameters (e.g., `https://images.weserv.nl/?url=...&bri=20&filename=post-specific-image`).

### Troubleshooting

- **Images Not Processed**: Ensure the plugin is installed correctly. Check for `exclude_domains` that might skip certain images.
- **Incorrect Filenames**: Verify the `filename` setting in `_config.yml` or front-matter. If using the page-title default, ensure posts have a `title` in their front-matter.
- **CDN Errors**: Confirm that the `cdn_server` supports the configured options (e.g., `images.weserv.nl` documentation: [https://images.weserv.nl/](https://images.weserv.nl/)).
- **WebP Not Working**: Set `use_webp: true` and ensure the browser supports WebP. Check if `output_format: webp` is set correctly for specific images.

For additional help or feature requests, please open an issue on the plugin’s repository or contact the maintainer.

### Special Thanks

- [Jinzhe Zeng](https://github.com/njzjz/hexo-image-cloudflare)
- [hexo-util](https://github.com/hexojs/hexo-util)
- [html-tag](https://github.com/jonschlinkert/html-tag)
