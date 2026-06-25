import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OK살수 | 살수차·급수차 전문 – 평택·화성·안성·오산·천안·아산",
  description:
    "물이 필요한 곳! 어디라도 달려갑니다. 도로살수·조경급수·식수운반·비산먼지·비상출동. 평택·화성·안성·오산·천안·아산 즉시 출동. 살수차 다량 보유. 24시간 견적 접수.",
};

const PHONE = "010-4894-5037";

const serviceCardsHome = [
  {
    icon: "🚒",
    title: "살수차",
    items: ["도로청소 / 비산먼지 저감", "용수공급", "긴급살수", "현장 살수작업"],
    href: "/services#construction",
    accent: "border-brand-secondary",
  },
  {
    icon: "🌳",
    title: "조경·공원조성",
    items: ["공원조성 / 잔디·수목식재", "정원조성 / 조경시설 설치", "조경 유지관리"],
    href: "/services#landscape",
    accent: "border-emerald-500",
  },
  {
    icon: "🏗️",
    title: "굴착기(관로작업)",
    items: [
      "상·하수도 관로공사",
      "우·오수관 / 통신관로 / 전선관로",
      "배수관 / 맨홀 / 오수받이 시공",
    ],
    href: "/services#excavator",
    accent: "border-amber-500",
  },
  {
    icon: "🚚",
    title: "덤프",
    items: [
      "골재운반 / 토사운반 / 잔토처리",
      "현장자재 운반 / 폐기물 운반",
      "신속하고 안전한 운반 서비스",
    ],
    href: "/services",
    accent: "border-slate-400",
  },
];

const workCategories = [
  { icon: "🌿", label: "조경작업", sub: "공원조성 등", href: "/services#landscape" },
  { icon: "🔩", label: "관로작업", sub: "상·하수도", href: "/services#excavator" },
  { icon: "🏢", label: "건설작업", sub: "토목·기반공사", href: "/services#construction" },
  { icon: "⛏️", label: "토목작업", sub: "관로·구조물", href: "/services#excavator" },
  { icon: "💧", label: "용수공급", sub: "살수·급수작업", href: "/services#living" },
  { icon: "🚛", label: "폐기물·운반", sub: "토사·폐기물 운반", href: "/services" },
];

const stats = [
  { value: "8", unit: "개+", label: "지역 즉시 출동" },
  { value: "24", unit: "시간", label: "긴급 대응" },
  { value: "多", unit: "대 보유", label: "살수차 다량" },
];

const painPoints = [
  {
    emoji: "🚨",
    text: "건설현장 비산먼지 민원·관청 점검이 내일인데 살수차를 못 구했다",
  },
  {
    emoji: "🌵",
    text: "가뭄으로 가로수·조경수목이 말라가고 있다 — 지금 당장 급수가 필요하다",
  },
  {
    emoji: "💦",
    text: "아파트·빌딩 단수로 주민 민원이 폭발 직전, 긴급 급수차가 필요하다",
  },
  {
    emoji: "🏗️",
    text: "포크레인이나 조경공사 업체를 빠르게 구해야 하는데 연락처를 모른다",
  },
];

const trustPoints = [
  {
    icon: "🚛",
    title: "즉시 배차 · 차량 부족 없음",
    desc: "5톤~16톤 전문 살수·급수차 다량 보유. 동시 여러 현장도 배차 가능합니다.",
    badge: "다량 상시 대기",
  },
  {
    icon: "🔬",
    title: "KOTITI 수질검사 필증 완료",
    desc: "공인 기관 수질 검사 완료. 식수·조경 급수에 안전한 물을 공급합니다.",
    badge: "공인 수질 인증",
  },
  {
    icon: "💰",
    title: "협회 기준 투명한 단가",
    desc: "숨겨진 추가 비용 없이 협회 기준 단가를 공개합니다. 견적부터 명확합니다.",
    badge: "단가표 공개",
  },
];

const equipment = [
  {
    name: "5톤 살수·급수차",
    spec: "탱크 5,000L · 살수·식수·공사 급수 겸용",
    icon: "🚚",
    badge: "다량 보유",
  },
  {
    name: "16톤 살수차",
    spec: "탱크 16,000L · 물대포 · 광역 대형 살수",
    icon: "🚛",
    badge: "다량 보유",
  },
];

const serviceArea = ["평택", "화성", "안성", "오산", "천안", "아산"];

const faq = [
  {
    q: "얼마나 빨리 출동할 수 있나요?",
    a: "평택 기준 30분, 화성·안성·오산·천안·아산 기준 1시간 이내 도착을 목표로 합니다. 차량 위치·교통 상황에 따라 달라질 수 있으니 전화로 확인해 주세요.",
  },
  {
    q: "야간·주말·공휴일에도 출동 가능한가요?",
    a: "가능합니다. 야간(21:00~06:00) 및 공휴일 작업 시 할증이 적용됩니다. 24시간 견적 접수 중이니 언제든지 연락 주세요.",
  },
  {
    q: "물은 어디서 공급하나요? 수질이 안전한가요?",
    a: "자체 급수 차량으로 이동합니다. KOTITI 공인 수질검사를 완료한 물을 사용하며, 식수 운반도 안전하게 진행합니다.",
  },
  {
    q: "살수차 외에 포크레인·조경공사도 문의할 수 있나요?",
    a: "네, 포크레인 작업과 조경건설 시공도 문의 가능합니다. 모든 문의는 동일 번호(010-4894-5037)로 접수됩니다.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 상단 공지 바 */}
      <div className="bg-red-600 text-white text-sm py-3 font-bold tracking-wide">
        {/* 모바일: 흐르는 티커 */}
        <div className="sm:hidden overflow-hidden">
          <span className="announcement-ticker inline-block whitespace-nowrap">
            📍 활동지역 &nbsp;·&nbsp; 평택 · 안성 · 화성 · 오산 · 천안 · 아산 &nbsp;·&nbsp; 전지역
            출동! &nbsp;·&nbsp; 📞 {PHONE} &nbsp;&nbsp;&nbsp;
          </span>
        </div>
        {/* 데스크탑: 한 줄 중앙 */}
        <div className="hidden sm:block text-center">
          📍 활동지역 &nbsp;·&nbsp; 평택 · 안성 · 화성 · 오산 · 천안 · 아산 &nbsp;·&nbsp; 전지역
          출동! &nbsp;·&nbsp;{" "}
          <a href={`tel:${PHONE.replace(/-/g, "")}`} className="underline underline-offset-2">
            📞 {PHONE}
          </a>
        </div>
      </div>

      {/* ① Hero */}
      <section className="relative overflow-hidden min-h-[440px] sm:min-h-[560px]">
        <img
          src="/wcContents/hero-bg.jpeg"
          alt="OK살수 작업 현장 — 살수차·포크레인·조경건설 전문"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/85" />
        <div className="relative z-10 min-h-[440px] sm:min-h-[560px] flex flex-col justify-end pb-10 px-6">
          <div className="max-w-2xl mx-auto w-full text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
              📍 평택·화성·안성·오산·천안·아산 즉시 출동
            </div>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-3 drop-shadow-lg">
              현장이 부르면,
              <br />
              <span className="text-yellow-300">OK살수차</span>가 달려갑니다!
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-semibold mb-8 drop-shadow">
              살수차 · 포크레인 · 덤프 · 조경건설 — 한 번에 해결
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE.replace(/-/g, "")}`}
                className="phone-ring flex items-center justify-center gap-2 bg-phone text-white font-black text-xl px-8 py-4 rounded-xl shadow-xl hover:bg-green-600 active:scale-95 transition-all"
              >
                📞 {PHONE}
              </a>
              <a
                href="https://open.kakao.com/o/sK8HVKAi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-kakao text-gray-900 font-black text-xl px-8 py-4 rounded-xl shadow-xl hover:brightness-95 active:scale-95 transition-all"
              >
                💬 카카오톡 문의
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ② Stats Bar */}
      <div className="bg-brand-primary text-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="px-2">
                <div className="text-4xl sm:text-5xl font-black text-yellow-300 leading-none whitespace-nowrap">
                  {s.value}
                  <span className="text-lg font-bold">{s.unit}</span>
                </div>
                <div className="text-xs font-bold text-white/90 mt-2 whitespace-nowrap">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ②-b Summer Banner */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-white">
            <div className="text-5xl flex-shrink-0">🌊</div>
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
                🌞 여름 시즌 특별 대응
              </div>
              <h2 className="text-xl sm:text-2xl font-black leading-snug mb-1">
                워터슬라이드·물놀이장 급수 지원
              </h2>
              <p className="text-blue-100 text-sm">
                대용량 급수 · 현장 대기 · 행사장·학교·체육대회·축제 즉시 출동
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${PHONE.replace(/-/g, "")}`}
                className="flex items-center justify-center gap-2 bg-white text-blue-600 font-black px-6 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition whitespace-nowrap"
              >
                📞 지금 바로 문의
              </a>
              <Link
                href="/services#waterplay"
                className="text-center text-blue-100 text-xs underline underline-offset-2 hover:text-white transition"
              >
                서비스 자세히 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ③ Pain Point — 공감: 고객의 상황 짚어주기 */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
              혹시 지금 <span className="text-red-600">이런 상황</span>인가요?
            </h2>
            <p className="text-brand-gray text-sm">급할수록 빠른 판단이 중요합니다</p>
          </div>
          <div className="space-y-3 mb-8">
            {painPoints.map((p) => (
              <div
                key={p.text}
                className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl px-5 py-4"
              >
                <span className="text-2xl leading-none flex-shrink-0">{p.emoji}</span>
                <p className="text-gray-800 text-sm font-medium leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="phone-ring inline-flex items-center gap-2 bg-phone text-white font-black text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-green-600 active:scale-95 transition-all"
            >
              📞 지금 바로 전화하세요
            </a>
            <p className="text-xs text-brand-gray mt-3">
              통화가 어려우신 경우&nbsp;
              <a
                href="https://open.kakao.com/o/sK8HVKAi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-brand-secondary"
              >
                카카오톡 문의
              </a>
              를 이용해 주세요
            </p>
          </div>
        </div>
      </section>

      {/* ④ 서비스 라인업 */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-title">서비스 라인업</h2>
            <p className="section-subtitle">조경·건설 포크레인 / 살수차 전문 운영</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            {serviceCardsHome.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className={`card border-t-4 ${s.accent} p-4 hover:shadow-md transition-shadow group`}
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="font-black text-brand-primary text-base sm:text-lg mb-2 group-hover:text-brand-secondary transition-colors">
                  {s.title}
                </h3>
                <ul className="space-y-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-1">
                      <span className="text-brand-accent flex-shrink-0 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          {/* 원스톱 섭외 */}
          <div className="card bg-brand-primary text-white p-5 flex flex-col sm:flex-row items-center gap-4">
            <div className="text-4xl flex-shrink-0">🤝</div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-black text-lg mb-1">원스톱 섭외</h3>
              <p className="text-blue-200 text-sm">
                살수차·포크레인·덤프·조경 모두 한 번의 연락으로 —{" "}
                <span className="text-yellow-300 font-bold">시간과 비용을 절약하세요!</span>
              </p>
            </div>
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="flex-shrink-0 bg-phone text-white font-black px-6 py-3 rounded-xl hover:bg-green-600 transition whitespace-nowrap"
            >
              📞 지금 문의
            </a>
          </div>
        </div>
      </section>

      {/* ④-b 작업 분야 */}
      <section className="py-7 bg-brand-bg border-y border-brand-light">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {workCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl group-hover:bg-brand-light transition-colors shadow-sm">
                  {cat.icon}
                </div>
                <span className="text-sm font-bold text-brand-primary text-center leading-tight">
                  {cat.label}
                </span>
                <span className="text-xs font-medium text-brand-gray text-center leading-tight">
                  {cat.sub}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ Trust — 해결: 왜 OK살수인가 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">왜 OK살수를 선택하나요?</h2>
            <p className="section-subtitle">고객이 신뢰하는 3가지 이유</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {trustPoints.map((t) => (
              <div key={t.title} className="card text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{t.icon}</div>
                <div className="inline-block bg-brand-accent/10 text-brand-accent text-sm font-bold px-3 py-1 rounded-full mb-2">
                  {t.badge}
                </div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-secondary transition-colors shadow-sm"
            >
              📞 지금 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* ⑥ Equipment Section */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">보유 장비 현황</h2>
            <p className="section-subtitle">상시 대기 중인 전문 차량으로 즉시 출동합니다</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {equipment.map((e) => (
              <div
                key={e.name}
                className="bg-white border border-brand-light rounded-xl p-6 text-center hover:shadow-md hover:border-brand-accent transition-all"
              >
                <div className="text-5xl mb-3">{e.icon}</div>
                <div className="inline-block bg-brand-accent/10 text-brand-accent text-sm font-bold px-3 py-1 rounded-full mb-2">
                  {e.badge}
                </div>
                <div className="font-bold text-brand-primary text-lg mb-1">{e.name}</div>
                <div className="text-sm text-brand-gray leading-relaxed">{e.spec}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about" className="btn-cta-outline text-sm">
              전체 장비 보기 →
            </Link>
            <a href={`tel:${PHONE.replace(/-/g, "")}`} className="btn-cta text-sm">
              📞 배차 문의
            </a>
          </div>
        </div>
      </section>

      {/* ⑦ FAQ — 이탈률 낮추기 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">자주 묻는 질문</h2>
            <p className="section-subtitle">가장 많이 물어보시는 질문들을 모았습니다</p>
          </div>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="card border-l-4 border-brand-accent">
                <p className="font-bold text-brand-primary mb-2">Q. {f.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A. {f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing" className="btn-cta-outline text-sm">
              단가표 자세히 보기
            </Link>
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
      </section>

      {/* ⑧ Service Area */}
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

      {/* ⑨ Final CTA Banner — 전환 */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <p className="text-yellow-300 font-black text-3xl md:text-4xl mb-2">전화 한 통이면 OK!</p>
          <p className="text-blue-100 text-base mb-1">빠른 출동! 깔끔한 작업! 믿고 맡기세요!</p>
          <p className="text-brand-light text-sm italic mb-8">깨끗한 현장의 시작, OK살수차!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="phone-ring flex items-center justify-center gap-2 bg-phone text-white font-bold px-8 py-4 rounded-xl shadow-lg transition hover:bg-green-600 active:scale-95"
            >
              📞 {PHONE}
            </a>
            <a
              href="https://open.kakao.com/o/sK8HVKAi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-kakao text-gray-900 font-bold px-8 py-4 rounded-xl transition hover:brightness-95 active:scale-95"
            >
              💬 카카오톡 문의
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
