import type { Metadata } from "next";
import Image from "next/image";

const BASE_PATH = "/wcContents";

export const metadata: Metadata = {
  title: "현장 갤러리 | OK살수",
  description: "OK살수의 실제 작업 현장 사진 갤러리. 공사현장 살수, 조경 급수, 행사 지원 현장.",
};

type PhotoItem = {
  type: "photo";
  src: string;
  alt: string;
  cat: string;
  label: string;
  rotate?: "90" | "-90" | "180";
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
    src: "/gallery/road-truck-spray.jpeg",
    alt: "도로 살수차 주행 중 살수 작업",
    cat: "공사·현장",
    label: "도로 살수차 주행 살수",
  },
  {
    type: "photo",
    src: "/gallery/road-hose-spray.jpeg",
    alt: "도로에서 호스로 직접 살수 작업",
    cat: "공사·현장",
    label: "도로 고압 호스 살수 작업",
  },
  {
    type: "photo",
    src: "/gallery/night-excavation.png",
    alt: "야간 굴착 공사 포크레인 작업",
    cat: "공사·현장",
    label: "야간 굴착 — 포크레인 작업",
  },
  {
    type: "photo",
    src: "/gallery/night-excavators.jpeg",
    alt: "야간 도로 공사 포크레인 2대 작업",
    cat: "공사·현장",
    label: "야간 도로 공사 — 포크레인 협업",
  },
  {
    type: "photo",
    src: "/gallery/demolition-spray.jpeg",
    alt: "철거현장 살수 — 포크레인 협업",
    cat: "공사·현장",
    label: "철거현장 살수 — 포크레인 협업",
    rotate: "90",
  },
  {
    type: "photo",
    src: "/gallery/pipeline-construction.jpeg",
    alt: "상하수도 관로 공사 현장 지원",
    cat: "공사·현장",
    label: "상하수도 관로 공사 지원",
  },
  {
    type: "photo",
    src: "/gallery/trench-pipeline.jpeg",
    alt: "관로 굴착 공사 현장 급수",
    cat: "공사·현장",
    label: "관로 굴착 현장 급수 지원",
  },
  {
    type: "photo",
    src: "/gallery/trench-setup.jpeg",
    alt: "굴착 현장 초기 설치 작업",
    cat: "공사·현장",
    label: "굴착 현장 초기 설치",
  },
  {
    type: "photo",
    src: "/gallery/trench-supply.jpeg",
    alt: "굴착 내부 급수 작업",
    cat: "공사·현장",
    label: "굴착 내부 급수 작업",
    rotate: "90",
  },
  {
    type: "photo",
    src: "/gallery/excavation-supply.jpeg",
    alt: "굴착 현장 포크레인 급수 지원",
    cat: "공사·현장",
    label: "굴착 현장 급수 지원",
    rotate: "90",
  },
  {
    type: "photo",
    src: "/gallery/road-widening.jpeg",
    alt: "도로 확포장 공사 현장",
    cat: "공사·현장",
    label: "도로 확포장 공사 현장",
  },
  {
    type: "photo",
    src: "/gallery/road-construction.jpeg",
    alt: "도로 공사 현장",
    cat: "공사·현장",
    label: "도로 공사 현장 지원",
  },
  {
    type: "photo",
    src: "/gallery/site-installation.jpeg",
    alt: "공사현장 설비 설치 작업",
    cat: "공사·현장",
    label: "현장 설비 설치 작업",
  },
  {
    type: "photo",
    src: "/gallery/factory-silo-supply.jpeg",
    alt: "공장 사일로 산업시설 급수 지원",
    cat: "공사·현장",
    label: "산업시설 급수 지원",
    rotate: "90",
  },
  {
    type: "photo",
    src: "/gallery/site-water-work.jpeg",
    alt: "공사현장 급수 작업",
    cat: "공사·현장",
    label: "공사현장 급수 작업",
    rotate: "180",
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
    src: "/gallery/night-spray.jpeg",
    alt: "야간 도로 살수 작업",
    cat: "공사·현장",
    label: "야간 도로 살수 작업",
    rotate: "90",
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
    src: "/gallery/truck-night.jpeg",
    alt: "야간 긴급 출동 대기 — OK살수 차량",
    cat: "차량·대기",
    label: "야간 긴급 출동 대기",
  },
  {
    type: "photo",
    src: "/gallery/night-truck-city.jpeg",
    alt: "평택역 앞 야간 살수차 작업",
    cat: "차량·대기",
    label: "평택역 앞 야간 살수 작업",
  },
  {
    type: "photo",
    src: "/gallery/business-card-collage.jpeg",
    alt: "OK살수 명함 및 차량 현장 콜라주",
    cat: "차량·대기",
    label: "OK살수 — 도로공사살수·조경급수·식수운반",
  },
  {
    type: "photo",
    src: "/gallery/truck-site-work.jpeg",
    alt: "OK살수 차량 현장 작업",
    cat: "차량·대기",
    label: "OK살수 차량 현장 출동",
    rotate: "180",
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
    src: "/gallery/building-pipe-supply.jpeg",
    alt: "건물 내부 배관 급수 연결 작업",
    cat: "생활·행사",
    label: "건물 내부 배관 급수 연결",
  },
  {
    type: "photo",
    src: "/gallery/ibc-tank-supply.jpeg",
    alt: "IBC 탱크 용수 공급 작업",
    cat: "생활·행사",
    label: "IBC 탱크 용수 공급",
    rotate: "90",
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

const rotateClass: Record<string, string> = {
  "90": "rotate-90",
  "-90": "-rotate-90",
  "180": "rotate-180",
};

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

      {/* Gallery Grid */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={`${BASE_PATH}${item.src}`}
                  alt={item.alt}
                  fill
                  className={`object-cover ${item.rotate ? rotateClass[item.rotate] : ""}`}
                  unoptimized
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-between p-3">
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
