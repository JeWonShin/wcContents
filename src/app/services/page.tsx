import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스 안내 | OK살수",
  description: "공사·건설현장 살수, 조경·농업 급수, 생활·행사 용수, 특수살수 서비스 안내.",
};

const services = [
  {
    id: "construction",
    icon: "🚧",
    title: "공사·건설현장 살수",
    subtitle: "비산먼지 저감 · 철거현장 · 토목공사",
    desc: "건설법에 따른 비산먼지 저감 의무 현장에 즉시 대응합니다. 토목·건축·철거 현장에서 발생하는 먼지를 고압 살수로 효과적으로 제어합니다.",
    items: [
      "아파트·건물 신축 공사현장",
      "도로 확포장 · 토목 공사",
      "철거·재개발 현장 비산먼지 저감",
      "대지 정지 작업 후 먼지 억제",
    ],
    bg: "from-brand-primary to-brand-secondary",
  },
  {
    id: "landscape",
    icon: "🌳",
    title: "조경·농업 급수",
    subtitle: "가뭄 대비 · 가로수 급수 · 농작물",
    desc: "가뭄 시기 조경 수목 보호와 농업용 급수 지원. 지자체 발주 가로수 급수 작업 등 관공서 업무도 수행합니다.",
    items: [
      "가로수 · 공원 조경 급수",
      "농작물 가뭄 긴급 급수",
      "골프장 · 체육시설 잔디 급수",
      "신규 식재 수목 활착 급수",
    ],
    bg: "from-brand-accent to-brand-nature",
  },
  {
    id: "living",
    icon: "💧",
    title: "생활·행사 용수",
    subtitle: "단수·긴급 급수 · 행사 · 촬영",
    desc: "예기치 못한 단수 사태 긴급 대응, 야외 행사장 식수 지원, 영화·드라마 촬영 현장 용수 공급 등 다양한 수요에 대응합니다.",
    items: [
      "아파트·빌딩 단수 긴급 급수",
      "야외 행사·축제 식수 지원",
      "영화·드라마 촬영 현장 용수",
      "수영장·연못 물 채우기",
    ],
    bg: "from-brand-secondary to-brand-accent",
  },
  {
    id: "special",
    icon: "⚡",
    title: "특수살수·고압세척",
    subtitle: "도로 청소 · 고압세척 · 방역 살포",
    desc: "일반 살수를 넘어 도로 오염 제거, 산업시설 고압세척, 방역 살포 지원 등 특수 목적 작업도 수행합니다.",
    items: [
      "도로 기름·오물 오염 제거",
      "공장·창고 바닥 고압세척",
      "방역 약품 살포 지원",
      "하절기 도로 쿨링 살수",
    ],
    bg: "from-slate-700 to-slate-500",
  },
  {
    id: "excavator",
    icon: "🏗️",
    title: "포크레인 작업",
    subtitle: "터파기 · 굴착 · 적재 · 정지",
    desc: "터파기·굴착·토사 적재 등 포크레인이 필요한 현장에 대응합니다. 규모와 작업 내용을 알려주시면 빠르게 안내해 드립니다.",
    items: [
      "건설현장 터파기·굴착",
      "토사·자재 적재 및 정리",
      "대지 정지 및 성토 작업",
      "철거 후 잔재물 처리",
    ],
    bg: "from-amber-700 to-amber-500",
  },
  {
    id: "landscaping",
    icon: "🌿",
    title: "조경건설",
    subtitle: "조경 시공 · 식재 · 정원 조성",
    desc: "조경 시공·수목 식재·정원 조성 등 조경건설 전반에 걸친 문의를 받습니다. 현장 규모와 요구사항을 말씀해 주시면 최적의 방향을 안내해 드립니다.",
    items: [
      "수목·화초 식재 및 조경 시공",
      "가로수·공원 조경 공사",
      "정원·옥상 녹화 조성",
      "잔디 식재 및 유지관리",
    ],
    bg: "from-brand-nature to-teal-600",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg py-14 border-b border-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-brand-primary mb-3">서비스 안내</h1>
          <p className="text-brand-gray">현장과 목적에 맞는 살수·급수 서비스를 선택하세요.</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="card overflow-hidden">
              <div className={`bg-gradient-to-r ${s.bg} p-6 text-white flex items-center gap-4`}>
                <span className="text-5xl">{s.icon}</span>
                <div>
                  <h2 className="text-xl font-black">{s.title}</h2>
                  <p className="text-white/80 text-sm">{s.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-xs font-bold flex-shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a href="tel:01048945037" className="btn-cta text-sm">
                    📞 전화 문의
                  </a>
                  <a
                    href="https://open.kakao.com/o/sK8HVKAi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta bg-kakao text-gray-900 text-sm"
                  >
                    💬 카카오톡 문의
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-10">
        <div className="max-w-xl mx-auto px-4 text-center text-white">
          <p className="text-xl font-bold mb-2">어떤 현장이든 상담해 드립니다</p>
          <p className="text-blue-200 text-sm mb-5">
            목록에 없는 작업도 문의해 주시면 최적의 방법을 안내해 드립니다.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="tel:01048945037" className="btn-cta bg-phone">
              📞 010-4894-5037
            </a>
            <Link href="/pricing" className="btn-cta bg-white text-brand-primary">
              💰 단가표 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
