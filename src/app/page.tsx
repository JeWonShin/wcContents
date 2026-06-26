import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OK살수 | 살수차·급수차·물놀이장급수 전문 – 평택·화성·안성·오산·천안·아산",
  description:
    "물이 필요한 곳! 어디라도 달려갑니다. 도로살수·조경급수·식수운반·비산먼지·비상출동·물놀이장급수·워터슬라이드급수. 여름 행사장·학교·체육대회·축제 즉시 출동. 평택·화성·안성·오산·천안·아산. 살수차 다량 보유. 24시간 견적 접수.",
};

const PHONE = "010-4894-5037";
const KAKAO = "https://open.kakao.com/o/sK8HVKAi";
const BASE = "/wcContents";

const serviceCardsHome = [
  {
    icon: "🚒",
    title: "살수차",
    items: ["도로청소 / 비산먼지 저감", "용수공급", "긴급살수", "현장 살수작업"],
    href: "/services#construction",
    photo: `${BASE}/gallery/salsu-road-new.jpeg`,
    gradient: "from-blue-950/50 to-blue-950/92",
  },
  {
    icon: "🌳",
    title: "조경·공원조성",
    items: ["공원조성 / 잔디·수목식재", "정원조성 / 조경시설 설치", "조경 유지관리"],
    href: "/services#landscape",
    photo: `${BASE}/gallery/landscape-work-new.jpeg`,
    gradient: "from-emerald-950/50 to-emerald-950/92",
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
    photo: `${BASE}/gallery/night-excavation.jpeg`,
    gradient: "from-amber-950/50 to-amber-950/92",
  },
  {
    icon: "🚚",
    title: "덤프",
    items: [
      "골재운반 / 토사운반 / 잔토처리",
      "현장자재 운반 / 폐기물 운반",
      "신속하고 안전한 운반 서비스",
    ],
    href: "/services#dump",
    photo: `${BASE}/gallery/dump-truck-new.jpeg`,
    gradient: "from-slate-900/50 to-slate-950/92",
  },
];

const workCategories = [
  { icon: "🌿", label: "조경작업", sub: "공원조성 등", href: "/services#landscape" },
  { icon: "🔩", label: "관로작업", sub: "상·하수도", href: "/services#excavator" },
  { icon: "🏢", label: "건설작업", sub: "토목·기반공사", href: "/services#construction" },
  { icon: "⛏️", label: "토목작업", sub: "관로·구조물", href: "/services#excavator" },
  { icon: "💧", label: "용수공급", sub: "살수·급수작업", href: "/services#living" },
  { icon: "🚛", label: "폐기물·운반", sub: "토사·폐기물 운반", href: "/services#dump" },
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
        <div className="sm:hidden overflow-hidden">
          <span className="announcement-ticker inline-block whitespace-nowrap">
            📍 활동지역 &nbsp;·&nbsp; 평택 · 안성 · 화성 · 오산 · 천안 · 아산 &nbsp;·&nbsp; 전지역
            출동! &nbsp;·&nbsp; 📞 {PHONE} &nbsp;&nbsp;&nbsp;
          </span>
        </div>
        <div className="hidden sm:block text-center">
          📍 활동지역 &nbsp;·&nbsp; 평택 · 안성 · 화성 · 오산 · 천안 · 아산 &nbsp;·&nbsp; 전지역
          출동! &nbsp;·&nbsp;{" "}
          <a href={`tel:${PHONE.replace(/-/g, "")}`} className="underline underline-offset-2">
            📞 {PHONE}
          </a>
        </div>
      </div>

      {/* ① Hero */}
      <section className="relative overflow-hidden bg-black">
        <img
          src={`${BASE}/hero-v2.jpeg`}
          alt="OK살수차 — 어디든 달려갑니다"
          className="w-full block"
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* 여름 물놀이 링크 뱃지 — hidden으로 숨김 (롤백: hidden 제거) */}
        <Link
          href="/services#waterplay"
          className="hidden absolute top-3 left-3 z-20 hover:scale-105 active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-black px-4 py-2.5 rounded-full shadow-[0_0_16px_4px_rgba(34,211,238,0.55)] border border-white/30">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <span className="animate-bounce inline-block">🌊</span>
            <span className="tracking-tight">여름 물놀이장 급수</span>
            <span className="opacity-75 text-[11px]">→</span>
          </div>
        </Link>
        {/* 히어로 헤드라인 — hidden으로 숨김 (롤백: hidden 제거) */}
        <div className="hidden absolute inset-0 flex flex-col items-center justify-center px-6">
          <h1 className="text-3xl sm:text-5xl font-black leading-tight text-center text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            현장이 부르면,
            <br />
            <span className="text-yellow-300">OK살수차</span>가 달려갑니다!
          </h1>
        </div>
      </section>

      {/* ② 24시간 + 활동지역 */}
      <div className="bg-brand-primary text-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 divide-x divide-white/20">
            <div className="py-6 px-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl font-black text-yellow-300 leading-none mb-1 whitespace-nowrap">
                24시간
              </div>
              <div className="text-sm font-bold text-white/90">긴급출동 가능!</div>
            </div>
            <div className="py-6 px-6 flex flex-col items-center justify-center text-center">
              <div className="text-xs font-bold text-yellow-300 mb-1.5 tracking-wider">
                활동지역
              </div>
              <div className="text-sm font-semibold text-white/90 leading-relaxed">
                평택 · 안성 · 화성
                <br />
                오산 · 천안 · 아산
              </div>
              <div className="text-xs font-bold text-yellow-200 mt-1">전지역 출동!</div>
            </div>
          </div>
        </div>
      </div>

      {/* ②-b 여름 배너 */}
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
              <p className="text-white/90 text-sm font-bold mt-1">
                🛠️ 물놀이장·워터슬라이드 설치까지 원스톱 지원
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

      {/* ③ Pain Point */}
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
                href={KAKAO}
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

      {/* ④ 서비스 라인업 — 포토 카드 */}
      <section className="py-12 bg-[#0a2240]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-yellow-300">
              조경·건설 포크레인 / 살수차 전문 운영
            </h2>
            <p className="text-blue-300 text-sm mt-1">원하시는 서비스를 선택하세요</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {serviceCardsHome.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="relative overflow-hidden rounded-xl h-[220px] sm:h-[250px] block group"
              >
                <img
                  src={s.photo}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${s.gradient}`} />
                <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <h3 className="font-black text-yellow-300 text-sm sm:text-base mb-2">
                      {s.title}
                    </h3>
                    <ul className="space-y-1">
                      {s.items.map((item) => (
                        <li key={item} className="text-xs text-white/85 flex items-start gap-1">
                          <span className="text-yellow-400 flex-shrink-0 mt-0.5">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 원스톱 섭외 */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 text-white text-center sm:text-left">
            <div className="text-5xl flex-shrink-0">🤝</div>
            <div className="flex-1">
              <h3 className="font-black text-yellow-300 text-xl mb-1">원스톱 섭외</h3>
              <p className="text-blue-200 text-sm">
                살수차·포크레인·덤프·조경 — 원스톱 서비스로 시간과 비용을 절약하세요!
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
      <section className="py-8 bg-[#071830] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {workCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl group-hover:bg-white/20 transition-colors">
                  {cat.icon}
                </div>
                <span className="text-sm font-bold text-white text-center leading-tight">
                  {cat.label}
                </span>
                <span className="text-xs font-medium text-blue-300 text-center leading-tight">
                  {cat.sub}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ Trust */}
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

      {/* ⑥ Equipment */}
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

      {/* ⑦ FAQ */}
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
              href={KAKAO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta bg-kakao text-gray-900 text-sm"
            >
              💬 카카오톡 문의
            </a>
          </div>
        </div>
      </section>

      {/* ⑧ Final CTA — 전화 한 통이면 OK! */}
      <section className="bg-[#080f1e] py-16 border-t-4 border-yellow-400">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <p className="text-yellow-300 font-black text-4xl md:text-5xl mb-2">전화 한 통이면 OK!</p>
          <p className="text-white/90 text-lg font-bold mb-1">
            빠른 출동! 깔끔한 작업! 믿고 맡기세요!
          </p>
          <p className="text-white/50 text-sm italic mb-8">깨끗한 현장의 시작, OK살수차!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="phone-ring flex items-center justify-center gap-2 bg-phone text-white font-bold px-8 py-4 rounded-xl shadow-lg transition hover:bg-green-600 active:scale-95"
            >
              📞 {PHONE}
            </a>
            <a
              href={KAKAO}
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
