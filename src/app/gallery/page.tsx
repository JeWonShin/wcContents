import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "현장 갤러리 | OK살수",
  description: "OK살수의 실제 작업 현장 사진 갤러리. 공사현장 살수, 조경 급수, 행사 지원 현장.",
};

const categories = ["전체", "공사·현장", "조경·농업", "생활·행사", "특수살수"];

const items = [
  { cat: "공사·현장", label: "아파트 신축 현장 비산먼지 저감 살수", bg: "from-orange-800 to-orange-600", date: "2026.06" },
  { cat: "공사·현장", label: "도로 확포장 공사 먼지 억제", bg: "from-orange-700 to-amber-500", date: "2026.05" },
  { cat: "조경·농업", label: "공원 가로수 가뭄 급수 지원", bg: "from-green-800 to-green-600", date: "2026.06" },
  { cat: "조경·농업", label: "골프장 잔디 급수 작업", bg: "from-green-700 to-emerald-500", date: "2026.04" },
  { cat: "생활·행사", label: "야외 행사장 식수 공급", bg: "from-blue-700 to-blue-500", date: "2026.05" },
  { cat: "생활·행사", label: "아파트 단수 긴급 급수", bg: "from-sky-700 to-sky-500", date: "2026.03" },
  { cat: "특수살수", label: "도로 오염 고압 세척 작업", bg: "from-purple-800 to-purple-600", date: "2026.06" },
  { cat: "공사·현장", label: "철거현장 분진 저감 살수", bg: "from-stone-700 to-stone-500", date: "2026.02" },
  { cat: "조경·농업", label: "신규 식재 수목 활착 급수", bg: "from-teal-700 to-teal-500", date: "2026.01" },
  { cat: "생활·행사", label: "드라마 촬영 현장 용수 지원", bg: "from-indigo-700 to-indigo-500", date: "2025.12" },
  { cat: "특수살수", label: "하절기 도로 쿨링 살수", bg: "from-cyan-700 to-cyan-500", date: "2025.08" },
  { cat: "공사·현장", label: "대단위 토목 광역 살수", bg: "from-yellow-800 to-yellow-600", date: "2025.07" },
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

      {/* Category Filter (UI only) */}
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
                className={`relative aspect-square rounded-xl bg-gradient-to-br ${item.bg} overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-200" />
                <div className="absolute inset-0 flex flex-col justify-between p-3">
                  <span className="self-start bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.cat}
                  </span>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">{item.label}</p>
                    <p className="text-white/60 text-[10px] mt-0.5">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder note */}
          <div className="mt-8 text-center text-brand-gray text-sm">
            <p>실제 사진은 운영 시 업로드됩니다. 관리자 페이지에서 쉽게 관리하세요.</p>
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
