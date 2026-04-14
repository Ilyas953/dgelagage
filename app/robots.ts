import type { MetadataRoute } from "next";
import { data } from "./data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${data.url}/sitemap.xml`,
  };
}
