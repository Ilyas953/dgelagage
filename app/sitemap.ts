import type { MetadataRoute } from "next";
import { data } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: data.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${data.url}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${data.url}/conditions-generales-services`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
