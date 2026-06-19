import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "회사소개 | ○○살수 – 살수차·급수차 전문",
  description: "○○살수 회사소개. 창업 이력, 보유 장비, 인증·면허 현황.",
};

const equipment = [
  { name: "3.5톤 살수차", tank: "3,500L", pressure: "고압 노즐 (60bar)", use: "소규모 현장, 도로 먼지저감", icon: "🚛" },
  { name: "5톤 급수차", tank: "5,000L", pressure: "저압 살수·급수", use: "생활용수, 공사현장 급수", icon: "🚚" },
  { name: "8톤 살수차", tank: "8,000L", pressure: "고압 노즐 (80bar)", use: "대형 공사현장, 철거 현장", icon: "🚛" },
  { name: "16톤 살수차", tank: "16,000L", pressure: "대용량 광역 살수", use: "대단위 토목, 비산먼지 광역 저감", icon: "🚜" },
];

const certs = [
  { icon: "🔬", label: "KOTITI 수질검사 필증", desc: "공인 기관의 수질 안전 검사 통과" },
  { icon: "®️", label: "상표등록증", desc: "브랜드 상표 정식 등록 완료" },
  { icon: "📄", label: "사업자등록증", desc: "적법한 사업자 등록 업체" },
  { icon: "🚛", label: "화물자동차 운송사업 허가", desc: "관련 법령에 따른 운송 허가 보유" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg py-14 border-b border-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-brand-primary mb-3">회사소개</h1>
          <p className="text-brand-gray">
            수도권·경기 지역 살수차·급수차 전문 업체, ○○살수를 소개합니다.
          </p>
        </div>
      </section>

      {/* Greeting */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title border-l-4 border-brand-accent pl-3">인사말</h2>
          <div className="card mt-4">
            <p className="text-gray-700 leading-relaxed">
              안녕하세요, ○○살수 대표입니다.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              저희 ○○살수는 수도권·경기 지역을 기반으로 <strong>살수차·급수차 전문 서비스</strong>를 제공하고 있습니다.
              공사현장의 비산먼지 저감부터 조경·농업 급수, 생활용수 공급, 행사 지원까지 다양한 현장에서
              빠르고 안전하게 대응해 왔습니다.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              저희는 <strong>정직한 단가</strong>와 <strong>즉시 배차</strong>를 원칙으로,
              고객이 전화 한 통으로 믿고 맡길 수 있는 업체가 되기 위해 최선을 다하고 있습니다.
              KOTITI 공인 수질 검사를 통과한 깨끗한 물, 최신 고압 장비, 숙련된 기사가
              현장에서 함께합니다.
            </p>
            <br />
            <p className="text-gray-700 font-bold">
              — ○○살수 대표 일동
            </p>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-14 bg-brand-bg">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title border-l-4 border-brand-accent pl-3">보유 장비 · 차량</h2>
          <p className="text-brand-gray text-sm mb-6">상시 대기 중인 차량으로 30분 내 즉시 출동합니다.</p>
          <div className="overflow-x-auto">
            <table className="price-table">
              <thead>
                <tr>
                  <th>차종</th>
                  <th>탱크 용량</th>
                  <th>장비 사양</th>
                  <th>주요 용도</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((e) => (
                  <tr key={e.name}>
                    <td>
                      <span className="mr-1">{e.icon}</span>
                      <strong>{e.name}</strong>
                    </td>
                    <td>{e.tank}</td>
                    <td>{e.pressure}</td>
                    <td className="text-sm text-gray-600">{e.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title border-l-4 border-brand-accent pl-3">인증 · 면허 현황</h2>
          <p className="text-brand-gray text-sm mb-6">공인된 인증과 면허로 신뢰할 수 있는 서비스를 제공합니다.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certs.map((c) => (
              <div key={c.label} className="card text-center">
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="font-bold text-brand-primary text-sm mb-1">{c.label}</div>
                <div className="text-xs text-gray-500">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-10">
        <div className="max-w-xl mx-auto px-4 text-center text-white">
          <p className="text-xl font-bold mb-4">지금 바로 문의해 보세요</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="tel:03100000000" className="btn-cta bg-phone">📞 전화 상담</a>
            <Link href="/contact" className="btn-cta bg-white text-brand-primary">📋 견적 문의</Link>
          </div>
        </div>
      </section>
    </>
  );
}
