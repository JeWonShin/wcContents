import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "OK살수 | 평택 살수차·급수차 전문 – 즉시 배차",
  description:
    "경기 평택 안중 살수차·급수차 전문 OK살수. 공사현장 비산먼지 저감, 조경·급수, 식수 운반, 비상출동까지. 살수차 다량 보유, 즉시 배차. 24시간 견적 접수.",
  keywords: [
    "OK살수", "살수차", "급수차", "평택살수차", "평택살수", "안중살수",
    "도로살수", "조경공사급수", "식수운반", "비산먼지", "물채움", "비상출동",
    "지역살수", "살수차다량보유", "경기살수차", "즉시배차",
  ],
  openGraph: {
    title: "OK살수 | 평택 살수차·급수차 전문",
    description: "평택·안중 즉시 배차. 살수차 다량 보유. 24시간 견적 접수.",
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
