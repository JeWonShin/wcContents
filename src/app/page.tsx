import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OK살수 | 살수차·급수차 전문 – 평택·안중·화성·안성·천안·아산",
  description:
    "물이 필요한 곳! 어디라도 달려갑니다. 도로살수·조경급수·식수운반·비산먼지·비상출동. 평택·안중·화성·안성·천안·아산 즉시 출동. 살수차 다량 보유. 24시간 견적 접수.",
};

const PHONE = "010-4894-5037";

const quickMenus = [
  { icon: "🚧", label: "공사·현장", href: "/services#construction" },
  { icon: "🌳", label: "조경·농업", href: "/services#landscape" },
  { icon: "💧", label: "생활·식수", href: "/services#living" },
  { icon: "🏗️", label: "포크레인", href: "tel:01048945037" },
  { icon: "🌿", label: "조경건설", href: "tel:01048945037" },
  { icon: "💰", label: "단가표", href: "/pricing" },
  { icon: "📋", label: "견적 문의", href: "/contact" },
];

const stats = [
  { value: "6", unit: "개 지역", label: "즉시 출동" },
  { value: "24", unit: "시간", label: "긴급 대응" },
  { value: "多", unit: "대 보유", label: "살수차 다량" },
];

const trustPoints = [
  {
    icon: "🚛",
    title: "살수차 다량 보유",
    desc: "3.5톤~16톤 고압 살수·급수차 상시 대기. 차량 부족 없이 즉시 배차합니다.",
  },
  {
    icon: "🔬",
    title: "KOTITI 수질검사 필증",
    desc: "공인 기관 수질 검사 완료. 안전하고 위생적인 물로 작업합니다.",
  },
  {
    icon: "📋",
    title: "투명한 단가",
    desc: "협회 기준 단가 공개. 숨겨진 비용 없이 견적부터 명확하게 안내합니다.",
  },
];

const equipment = [
  { name: "3.5톤 살수차", spec: "탱크 3,500L · 고압 살수 노즐", icon: "🚛" },
  { name: "5톤 급수차", spec: "탱크 5,000L · 식수·공사용", icon: "🚚" },
  { name: "8톤 살수차", spec: "탱크 8,000L · 대형 현장", icon: "🚛" },
  { name: "16톤 살수차", spec: "탱크 16,000L · 광역 살수", icon: "🚜" },
];

const serviceArea = ["평택", "안중", "화성", "안성", "천안", "아산"];

export default function HomePage() {
  return (
    <>
      {/* 상단 공지 바 */}
      <div className="bg-red-600 text-white text-center text-xs sm:text-sm py-2.5 font-bold tracking-wide">
        🚨 지금 즉시 출동 가능 &nbsp;·&nbsp;{" "}
        <a href={`tel:${PHONE.replace(/-/g, "")}`} className="underline underline-offset-2">
          📞 {PHONE}
        </a>{" "}
        &nbsp;·&nbsp; 평택·안중·화성·안성·천안·아산
      </div>

      {/* ① Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent overflow-hidden">
        {/* 배경 글로우 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          {/* 배지 */}
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            지금 출동 가능
          </div>

          {/* 메인 헤드라인 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] mb-5 tracking-tight">
            물이 필요한 곳!
            <br />
            <span className="text-yellow-300">어디라도</span>
            <br />
            달려갑니다
          </h1>

          <p className="text-blue-100 text-base sm:text-lg mb-3 font-semibold">
            살수차·급수차 전문 OK살수 &nbsp;|&nbsp; 신속·정확·안전
          </p>
          <p className="text-white/70 text-sm mb-8 leading-relaxed">
            작은 일이라도 믿고 맡겨주신 만큼 완벽한 작업으로 보답해 드리겠습니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="phone-ring flex items-center justify-center gap-2 bg-phone text-white font-black text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:bg-green-600 active:scale-95"
            >
              📞 {PHONE} 즉시 전화
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-brand-primary font-black text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:bg-yellow-50 active:scale-95"
            >
              📋 24시간 견적 문의
            </Link>
          </div>
        </div>

        {/* 물결 SVG 구분선 */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 52"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-14"
          >
            <path
              d="M0,26 C240,52 480,0 720,26 C960,52 1200,0 1440,26 L1440,52 L0,52 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ② Stats Bar */}
      <div className="bg-brand-primary text-white py-6">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="px-4">
                <div className="text-3xl sm:text-4xl font-black text-yellow-300 leading-none">
                  {s.value}
                  <span className="text-base font-bold">{s.unit}</span>
                </div>
                <div className="text-xs text-blue-200 mt-1.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ③ Quick Menu */}
      <section className="bg-white py-7 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-y-5 md:flex md:justify-center md:gap-10">
            {quickMenus.map((m) => (
              <Link key={m.href} href={m.href} className="flex flex-col items-center gap-1.5 group">
                <div className="w-14 h-14 rounded-full bg-brand-bg flex items-center justify-center text-2xl group-hover:bg-brand-light transition-colors shadow-sm">
                  {m.icon}
                </div>
                <span className="text-xs font-medium text-brand-primary text-center">
                  {m.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ④ Trust Section */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">왜 OK살수를 선택하나요?</h2>
            <p className="section-subtitle">고객이 신뢰하는 3가지 이유</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {trustPoints.map((t) => (
              <div key={t.title} className="card text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ Equipment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">보유 장비 현황</h2>
            <p className="section-subtitle">상시 대기 중인 전문 차량으로 즉시 출동합니다</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {equipment.map((e) => (
              <div
                key={e.name}
                className="bg-brand-bg border border-brand-light rounded-xl p-5 text-center hover:shadow-md hover:border-brand-accent transition-all"
              >
                <div className="text-4xl mb-3">{e.icon}</div>
                <div className="font-bold text-brand-primary mb-1">{e.name}</div>
                <div className="text-xs text-brand-gray">{e.spec}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-7">
            <Link href="/about" className="btn-cta-outline text-sm">
              전체 장비 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ⑥ Service Area */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="section-title">서비스 지역</h2>
          <p className="section-subtitle">아래 지역 전 구역에 즉시 출동합니다</p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {serviceArea.map((city) => (
              <div
                key={city}
                className="bg-white border-2 border-brand-accent text-brand-primary font-bold text-lg px-8 py-4 rounded-xl shadow-sm hover:bg-brand-accent hover:text-white transition-all cursor-default"
              >
                {city}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-gray">
            위 지역 외에도 문의 주시면 출동 가능 여부를 확인해 드립니다.
          </p>
        </div>
      </section>

      {/* ⑦ CTA Banner */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-black mb-3">지금 바로 연락하세요</h2>
          <p className="text-blue-200 mb-8">
            통화가 어려운 시간에도 온라인 견적 폼으로 24시간 접수 가능합니다.
            <br />
            빠른 시간 내 회신 드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="phone-ring flex items-center justify-center gap-2 bg-phone text-white font-bold px-8 py-4 rounded-xl shadow-lg transition hover:bg-green-600 active:scale-95"
            >
              📞 {PHONE}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-brand-primary font-bold px-8 py-4 rounded-xl transition hover:bg-brand-bg active:scale-95"
            >
              📋 온라인 견적 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
