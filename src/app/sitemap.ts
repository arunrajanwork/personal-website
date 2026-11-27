import type { MetadataRoute } from "next";
import { navigation, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }, ...navigation.map((item) => ({ url: siteUrl + item.href })), { url: siteUrl + "/blog/why-cloud-systems-separate-control-plane-and-data-plane", lastModified: new Date("2026-11-27") }];
}
