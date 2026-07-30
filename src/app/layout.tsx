import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import {
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  ADDRESS_STREET,
  BIZ_NAME,
  GEO,
  HOURS,
  PHONE_INTL,
  POSTAL_CODE,
  SERVICE_AREAS,
  asset,
  siteUrl,
} from "@/lib/site";

const OG_IMAGE = siteUrl("/hero-v2.jpeg");

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
    "안중살수차",
    "안중살수",
    "포승살수차",
    "화성살수차",
    "오산살수차",
    "천안살수차",
    "아산살수차",
    "안성살수차",
    "팽성살수차",
    "청북살수차",
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
    url: siteUrl("/"),
    siteName: BIZ_NAME,
    images: [
      {
        url: OG_IMAGE,
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
        <link rel="icon" href={asset("/favicon.svg")} type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="naver-site-verification" content="b7b63713ada31a0a71dd367c4b52018a9b14c2f2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: BIZ_NAME,
              image: OG_IMAGE,
              url: siteUrl("/"),
              telephone: PHONE_INTL,
              address: {
                "@type": "PostalAddress",
                streetAddress: ADDRESS_STREET,
                addressLocality: ADDRESS_LOCALITY,
                addressRegion: ADDRESS_REGION,
                postalCode: POSTAL_CODE,
                addressCountry: "KR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: GEO.latitude,
                longitude: GEO.longitude,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: HOURS.weekday.opens,
                  closes: HOURS.weekday.closes,
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: HOURS.saturday.opens,
                  closes: HOURS.saturday.closes,
                },
              ],
              description:
                "경기 평택·안중 살수차·급수차 전문 업체. 공사현장 비산먼지 저감, 조경급수, 식수운반, 물놀이장급수, 비상출동. 즉시 배차.",
              areaServed: SERVICE_AREAS,
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
