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
    "OK살수",
    "살수차",
    "급수차",
    "평택살수차",
    "평택살수",
    "안중살수",
    "도로살수",
    "조경공사급수",
    "식수운반",
    "비산먼지",
    "물채움",
    "비상출동",
    "지역살수",
    "살수차다량보유",
    "경기살수차",
    "즉시배차",
  ],
  openGraph: {
    title: "OK살수 | 평택 살수차·급수차 전문 – 즉시 배차",
    description:
      "경기 평택·안중 살수차·급수차 전문 업체. 공사현장 비산먼지, 조경급수, 식수운반, 비상출동. 즉시 배차 가능. 24시간 견적 접수.",
    url: "https://jewonshin.github.io/wcContents/",
    siteName: "OK살수",
    images: [
      {
        url: "https://jewonshin.github.io/wcContents/hero-v2.jpeg",
        width: 1200,
        height: 630,
        alt: "OK살수 살수차 작업 현장",
      },
    ],
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
        <link rel="icon" href="/wcContents/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="naver-site-verification" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "OK살수",
              image: "https://jewonshin.github.io/wcContents/hero-v2.jpeg",
              url: "https://jewonshin.github.io/wcContents/",
              telephone: "+82-10-4894-5037",
              address: {
                "@type": "PostalAddress",
                streetAddress: "안중읍 송담3로 56-15",
                addressLocality: "평택시",
                addressRegion: "경기도",
                postalCode: "17632",
                addressCountry: "KR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.9897,
                longitude: 126.8286,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              description:
                "경기 평택·안중 살수차·급수차 전문 업체. 공사현장 비산먼지 저감, 조경급수, 식수운반, 물놀이장급수, 비상출동. 즉시 배차.",
              areaServed: ["평택", "화성", "안성", "오산", "천안", "아산"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "살수·급수 서비스",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "공사현장 살수" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "조경·농업 급수" } },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "물놀이장·워터슬라이드 급수" },
                  },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "식수 운반" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "포크레인 작업" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "덤프·운반" } },
                ],
              },
            }),
          }}
        />
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
