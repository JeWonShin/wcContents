import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "현장 갤러리 | OK살수",
  description: "OK살수의 실제 작업 현장 사진 갤러리. 공사현장 살수, 조경 급수, 행사 지원 현장.",
};

const categories = ["전체", "공사·현장", "조경·농업", "차량·대기", "생활·행사"];

type PhotoItem = {
  type: "photo";
  src: string;
  alt: string;
  cat: string;
  label: string;
};

const items: PhotoItem[] = [
  {
    type: "photo",
    src: "/gallery/construction-spray.jpeg",
    alt: "공사현장 비산먼지 저감 살수 작업",
    cat: "공사·현장",
    label: "공사현장 고압 살수 — 비산먼지 저감",
  },
  {
    type: "photo",
    src: "/gallery/truck-dawn.jpeg",
    alt: "새벽 OK살수 차량 3대 출동 대기",
    cat: "차량·대기",
    label: "새벽 출동 대기 — 다량 보유 차량",
  },
  {
    type: "photo",
    src: "/gallery/landscape-trees.jpeg",
    alt: "조경 급수 작업 현장 — 수목 급수",
    cat: "조경·농업",
    label: "조경 수목 급수 지원",
  },
  {
    type: "photo",
    src: "/gallery/truck-night.jpeg",
    alt: "야간 긴급 출동 대기 — OK살수 차량",
    cat: "차량·대기",
    label: "야간 긴급 출동 대기",
  },
  {
    type: "photo",
    src: "/gallery/earthwork-site.jpeg",
    alt: "광역 토목공사 현장 비산먼지 저감 살수",
    cat: "공사·현장",
    label: "광역 토목공사 비산먼지 저감",
  },
  {
    type: "photo",
    src: "/gallery/night-crane.jpeg",
    alt: "야간 긴급 공사현장 크레인 협업 작업",
    cat: "공사·현장",
    label: "야간 긴급 공사 — 크레인 협업",
  },
  {
    type: "photo",
    src: "/gallery/street-watering.jpeg",
    alt: "도로변 조경 급수 작업 — 가로수 관수",
    cat: "조경·농업",
    label: "도로변 조경 급수 작업",
  },
  {
    type: "photo",
    src: "/gallery/autumn-trees.jpeg",
    alt: "가을 가로수 조경 급수 지원",
    cat: "조경·농업",
    label: "가을 가로수 관수 지원",
  },
  {
    type: "photo",
    src: "/gallery/sidewalk-watering.jpeg",
    alt: "도로변 가로수 관수 지원",
    cat: "조경·농업",
    label: "가로수·식재 관수 지원",
  },
  {
    type: "photo",
    src: "/gallery/event-sunset.jpeg",
    alt: "야외 행사장 긴급 용수 지원 — 석양",
    cat: "생활·행사",
    label: "야외 행사장 긴급 용수 지원",
  },
  {
    type: "photo",
    src: "/gallery/event-night.jpeg",
    alt: "야외 행사장 야간 용수 지원",
    cat: "생활·행사",
    label: "야외 행사장 야간 용수 지원",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg py-14 border-b border-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-brand-primary mb-3">현장 갤러리</h1>
          <p className="text-brand-gray">오늘도 현장에서 뛰고 있습니다.</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-brand-light bg-white sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4 flex gap-2 overflow-x-auto pb-1">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition ${
                i === 0
                  ? "bg-brand-primary text-white"
                  : "bg-brand-bg text-brand-gray hover:bg-brand-light"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer bg-gray-100"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200" />
                <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="self-start bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.cat}
                  </span>
                  <p className="text-white text-xs font-bold leading-tight drop-shadow">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-brand-gray text-sm">
            <p>현장 사진은 계속 업데이트됩니다.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-10">
        <div className="max-w-xl mx-auto px-4 text-center text-white">
          <p className="text-xl font-bold mb-2">비슷한 현장이 있으신가요?</p>
          <p className="text-blue-200 text-sm mb-5">현장 사진을 보내주시면 맞춤 견적을 드립니다.</p>
          <a
            href="tel:01048945037"
            className="inline-flex items-center gap-2 bg-phone text-white font-bold px-8 py-4 rounded-xl shadow-lg transition hover:bg-green-600"
          >
            📞 010-4894-5037
          </a>
        </div>
      </section>
    </>
  );
}
