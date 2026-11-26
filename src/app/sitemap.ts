import type { MetadataRoute } from "next";
import { navigation, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }, ...navigation.map((item) => ({ url: siteUrl + item.href }))];
}
