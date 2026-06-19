import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "단가표 | OK살수 – 살수차·급수차 요금 안내",
  description: "OK살수 살수차·급수차 단가표. 톤수별·작업 유형별 일대/월대 기준 요금 안내.",
};

const dailyPrices = [
  { type: "3.5톤 살수차", daily: "400,000원~", monthly: "협의", note: "반일 단가 별도 협의" },
  { type: "5톤 급수차", daily: "450,000원~", monthly: "협의", note: "식수용 수질검사 포함" },
  { type: "8톤 살수차", daily: "550,000원~", monthly: "협의", note: "고압 장비 기본 포함" },
  { type: "16톤 살수차", daily: "700,000원~", monthly: "협의", note: "광역 현장 최적" },
];

const monthlyPrices = [
  { type: "3.5톤 (소형)", range: "5,500,000원~/월", comment: "소규모 현장, 1일 1~2회 출동 기준" },
  { type: "5톤 (중형)", range: "7,000,000원~/월", comment: "중형 현장, 정기 출동 계약" },
  { type: "8톤 (대형)", range: "9,000,000원~/월", comment: "대형 토목·건설 현장" },
  { type: "16톤 (특대)", range: "12,000,000원~/월", comment: "광역·대단위 현장" },
];

const faq = [
  {
    q: "단가에 기사 인건비가 포함되어 있나요?",
    a: "네, 제시된 단가에 차량 운행 및 기사 인건비가 모두 포함되어 있습니다.",
  },
  {
    q: "연료비는 별도인가요?",
    a: "통상 현장까지 왕복 연료비는 포함된 단가입니다. 장거리 현장(편도 50km 이상)은 별도 협의합니다.",
  },
  {
    q: "야간·공휴일 작업도 가능한가요?",
    a: "가능합니다. 야간(21:00~06:00) 및 공휴일 작업 시 할증이 적용됩니다.",
  },
  {
    q: "월 계약 시 혜택이 있나요?",
    a: "장기 월 계약 체결 시 단가 협의 및 우선 배차 혜택을 드립니다.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg py-14 border-b border-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-brand-primary mb-3">단가표</h1>
          <p className="text-brand-gray">
            협회 기준 단가를 바탕으로 합리적이고 투명한 요금을 제공합니다.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 space-y-10">

          {/* Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
            <strong>※ 안내사항</strong><br />
            아래 단가는 <strong>협회 기준 참고가</strong>이며, 현장 위치·작업 범위·계약 기간에 따라 달라질 수 있습니다.
            정확한 견적은 전화 또는 온라인 문의를 통해 안내해 드립니다.
          </div>

          {/* Daily */}
          <div>
            <h2 className="section-title border-l-4 border-brand-accent pl-3">일대(日貸) 기준</h2>
            <p className="text-brand-gray text-sm mb-4">1일 8시간 기준 (단거리 이동 포함)</p>
            <div className="overflow-x-auto">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>차종 · 톤수</th>
                    <th>일대 단가</th>
                    <th>월대 단가</th>
                    <th>비고</th>
                  </tr>
                </thead>
                <tbody>
                  {dailyPrices.map((r) => (
                    <tr key={r.type}>
                      <td className="font-bold">{r.type}</td>
                      <td className="text-brand-secondary font-bold">{r.daily}</td>
                      <td>{r.monthly}</td>
                      <td className="text-xs text-gray-500">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Monthly */}
          <div>
            <h2 className="section-title border-l-4 border-brand-accent pl-3">월대(月貸) 기준</h2>
            <p className="text-brand-gray text-sm mb-4">현장 상주 또는 정기 출동 계약 기준</p>
            <div className="overflow-x-auto">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>차종</th>
                    <th>월 단가</th>
                    <th>조건</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyPrices.map((r) => (
                    <tr key={r.type}>
                      <td className="font-bold">{r.type}</td>
                      <td className="text-brand-secondary font-bold">{r.range}</td>
                      <td className="text-xs text-gray-600">{r.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="section-title border-l-4 border-brand-accent pl-3">단가 관련 FAQ</h2>
            <div className="space-y-4 mt-4">
              {faq.map((f) => (
                <div key={f.q} className="card">
                  <p className="font-bold text-brand-primary mb-1">Q. {f.q}</p>
                  <p className="text-gray-600 text-sm">A. {f.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-10">
        <div className="max-w-xl mx-auto px-4 text-center text-white">
          <p className="text-xl font-bold mb-2">정확한 견적이 필요하신가요?</p>
          <p className="text-blue-200 text-sm mb-5">현장 정보를 알려주시면 맞춤 견적을 바로 안내해 드립니다.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="tel:01048945037" className="btn-cta bg-phone">📞 전화 견적</a>
            <Link href="/contact" className="btn-cta bg-white text-brand-primary">📋 온라인 견적</Link>
          </div>
        </div>
      </section>
    </>
  );
}
