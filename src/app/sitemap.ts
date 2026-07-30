import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** `output: "export"`에서 sitemap 라우트를 빌드 시점에 정적 생성하기 위해 필요합니다. */
export const dynamic = "force-static";

/**
 * sitemap.xml을 빌드 시 생성합니다. (기존 public/sitemap.xml 대체)
 *
 * 도메인이 `src/lib/site.ts`의 SITE_URL에서 나오므로, 도메인이 바뀌어도
 * 사이트맵이 따로 어긋나지 않습니다. 새 페이지를 추가하면 이 배열에도 추가하세요.
 */
const routes: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/gallery/", changeFrequency: "weekly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: siteUrl(path),
    changeFrequency,
    priority,
  }));
}
