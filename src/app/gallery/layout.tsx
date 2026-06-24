import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "현장 갤러리 | OK살수",
  description: "OK살수의 실제 작업 현장 사진 갤러리. 공사현장 살수, 조경 급수, 행사 지원 현장.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
