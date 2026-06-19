import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "경기살수 | 살수차·급수차 전문 – 수도권·경기 즉시 배차",
  description:
    "수도권·경기 지역 살수차·급수차 전문 업체. 공사현장 비산먼지 저감, 조경·농업 급수, 생활·행사 용수, 특수살수까지 30분 내 즉시 배차. 24시간 견적 접수.",
  keywords: [
    "살수차", "급수차", "물차", "경기살수", "수도권 살수차", "평택살수차",
    "공사현장 살수", "비산먼지 저감", "급수 서비스", "즉시 배차",
  ],
  openGraph: {
    title: "경기살수 | 살수차·급수차 전문",
    description: "수도권·경기 30분 내 즉시 배차. 24시간 견적 접수.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="naver-site-verification" content="" />
      </head>
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
