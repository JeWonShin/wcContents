import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객센터 | OK살수",
  description: "살수차·급수차 출동 문의. 전화·카카오톡으로 빠르게 상담하세요. 자주 묻는 질문(FAQ).",
};

const faqs = [
  {
    q: "출동 가능 지역은 어디까지인가요?",
    a: "수도권 전 지역(서울·경기·인천) 출동 가능합니다. 경기도 내 30분 내 즉시 배차를 원칙으로 합니다.",
  },
  {
    q: "당일 급하게 요청해도 출동이 가능한가요?",
    a: "가능합니다. 상시 대기 중인 차량이 있어 당일·긴급 출동이 가능합니다. 전화로 바로 문의해 주세요.",
  },
  {
    q: "급수차에서 공급하는 물은 마셔도 안전한가요?",
    a: "저희 급수차는 KOTITI 공인 기관의 수질 검사를 통과한 물을 공급합니다. 식수용 사용도 안전합니다.",
  },
  {
    q: "계약서를 작성해야 하나요?",
    a: "일대(단발 출동)는 계약서 없이 가능합니다. 월 계약 또는 장기 현장 투입 시 계약서를 작성합니다.",
  },
  {
    q: "비용은 어떻게 지불하나요?",
    a: "현금, 계좌이체, 세금계산서 발행 모두 가능합니다. 법인 고객은 후불 계좌이체를 기본으로 합니다.",
  },
  {
    q: "야간·주말에도 운영하나요?",
    a: "24시간 견적 문의 접수가 가능하며, 야간·주말 출동도 가능합니다. 단, 야간 할증이 적용될 수 있습니다.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg py-14 border-b border-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-brand-primary mb-3">고객센터</h1>
          <p className="text-brand-gray">견적 문의, 긴급 출동 요청, 궁금한 점을 해결해 드립니다.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title border-l-4 border-brand-accent pl-3">연락처 안내</h2>
          <div className="space-y-4 mt-6">
            <a
              href="tel:01048945037"
              className="flex items-center gap-4 card hover:border-brand-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-phone flex items-center justify-center text-2xl text-white flex-shrink-0">
                📞
              </div>
              <div>
                <div className="font-bold text-brand-primary text-lg">010-4894-5037</div>
                <div className="text-xs text-brand-gray">전화 한 통이면 즉시 연결됩니다</div>
              </div>
            </a>

            <a
              href="https://open.kakao.com/o/sK8HVKAi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 card hover:border-yellow-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-kakao flex items-center justify-center text-2xl flex-shrink-0">
                💬
              </div>
              <div>
                <div className="font-bold text-gray-800 text-lg">카카오톡 상담</div>
                <div className="text-xs text-brand-gray">채널명: OK살수</div>
              </div>
            </a>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card">
                <div className="font-bold text-brand-primary mb-2">📍 위치</div>
                <p className="text-sm text-gray-600">경기도 평택시 안중읍 송담3로 56-15</p>
                <p className="text-xs text-brand-gray mt-1">방문 상담 전 사전 연락 바랍니다.</p>
              </div>

              <div className="card">
                <div className="font-bold text-brand-primary mb-2">🕐 운영 시간</div>
                <table className="text-sm w-full">
                  <tbody>
                    <tr>
                      <td className="text-gray-500 pr-3 py-0.5">평일</td>
                      <td className="font-medium">08:00 – 20:00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 pr-3 py-0.5">토요일</td>
                      <td className="font-medium">08:00 – 18:00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 pr-3 py-0.5">일·공휴일</td>
                      <td className="font-medium">긴급 출동 가능 (할증 적용)</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 pr-3 py-0.5">카카오톡 접수</td>
                      <td className="font-medium text-brand-accent">24시간</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center mb-2">자주 묻는 질문</h2>
          <p className="section-subtitle text-center">FAQ</p>
          <div className="space-y-4 mt-4">
            {faqs.map((f, i) => (
              <details key={i} className="card group cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-brand-primary list-none cursor-pointer">
                  <span>Q. {f.q}</span>
                  <span className="text-brand-accent ml-2 flex-shrink-0 text-lg group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed border-t border-brand-light pt-3">
                  A. {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
