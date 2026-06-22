import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개 | OK살수 – 살수차·급수차 전문",
  description: "OK살수 회사소개. 대표 인사말, 보유 장비, 주요 시공이력, 인증·면허 현황.",
};

const equipment = [
  {
    name: "5톤 살수·급수차",
    tank: "5,000L",
    spec: "살수·식수·공사 급수 겸용",
    use: "비산먼지 저감, 공사현장 급수, 생활용수 운반",
    icon: "🚚",
    badge: "다량 보유",
  },
  {
    name: "16톤 살수차",
    tank: "16,000L",
    spec: "물대포 · 대용량 광역 살수",
    use: "대형 공사현장, 광역 비산먼지, 대단위 토목",
    icon: "🚜",
    badge: "다량 보유",
  },
];

const certs = [
  { icon: "🔬", label: "KOTITI 수질검사 필증", desc: "공인기관 수질 안전검사 통과" },
  { icon: "®️", label: "상표등록증", desc: "브랜드 상표 정식 등록" },
  { icon: "📄", label: "사업자등록증", desc: "209-31-66281" },
  { icon: "🚛", label: "화물자동차 운송사업 허가", desc: "관련 법령에 따른 운송 허가" },
];

const references = [
  { label: "수도권 광역고속도로 건설현장", detail: "13·14공구 비산먼지 저감 살수 작업" },
  { label: "경기 평택 관급 공사", detail: "용수공급시설공사 현장 급수 지원" },
  { label: "경기 화성 관급 복구", detail: "수질 오염수 수해 복구 작업" },
  { label: "수도권 대형 물류센터", detail: "현장 살수 작업" },
  { label: "영화·드라마 촬영장", detail: "긴급 용수 및 우천 장면 연출" },
  { label: "행사장·야외 이벤트", detail: "긴급 용수 지원 다수" },
  { label: "수압·보일러 테스트 현장", detail: "긴급 용수 철야 작업" },
  { label: "조경·관수 현장", detail: "긴급 급수 지원 다수" },
  { label: "에어바운스 설치 행사", detail: "물 공급 지원" },
  { label: "긴급 상하수도 복구현장", detail: "복구 작업 지원" },
  { label: "기타 다수", detail: "공사현장·생활용수·특수 용수 공급" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg py-14 border-b border-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-brand-primary mb-3">회사소개</h1>
          <p className="text-brand-gray">
            평택·포승·안중·화성·안성·오산·천안·아산
            <br />
            살수차·급수차 전문 업체, OK살수를 소개합니다.
          </p>
        </div>
      </section>

      {/* 대표 인사말 */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title border-l-4 border-brand-accent pl-3">대표 인사말</h2>
          <div className="card mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>안녕하십니까. OK살수 대표 이준희입니다.</p>
            <p>
              깨끗한 현장은 우연히 만들어지지 않습니다.
              <br />
              누군가는 가장 이른 새벽에 움직여야 하고, 누군가는 가장 늦은 시간까지 현장을 지켜야
              합니다.
            </p>
            <p>
              OK살수는 단순히 물을 뿌리는 일을 하지 않습니다.
              <br />
              현장의 안전을 책임지고, 비산먼지를 관리하며, 공정이 멈추지 않도록 필요한 순간 가장
              먼저 출동합니다.
            </p>
            <p>
              수많은 건설현장과 도로 위에서 쌓아온 경험, 약속한 시간보다 먼저 도착하는 책임감,
              끝까지 작업을 마무리하는 성실함.
            </p>
            <p className="font-bold text-brand-primary">그것이 OK살수의 경쟁력입니다.</p>
            <p>
              &ldquo;된다&rdquo;는 말보다 &ldquo;보여주는 결과&rdquo;를 믿습니다.
              <br />
              오늘도 현장의 시작과 끝을 함께하며, 고객이 안심하고 맡길 수 있는 최고의 파트너가
              되겠습니다.
            </p>
            <p>
              현장이 부르면, OK살수는 언제나 출동 준비가 되어 있습니다.
              <br />
              <strong>신뢰를 싣고 달립니다.</strong>
            </p>
            <p className="text-brand-primary font-bold">OK살수 대표 이준희</p>
          </div>
        </div>
      </section>

      {/* 보유 장비 */}
      <section className="py-14 bg-brand-bg">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title border-l-4 border-brand-accent pl-3">보유 장비 · 차량</h2>
          <p className="text-brand-gray text-sm mb-6">
            상시 대기 중인 전문 차량으로 즉시 출동합니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {equipment.map((e) => (
              <div key={e.name} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{e.icon}</span>
                  <div>
                    <div className="font-black text-brand-primary text-lg">{e.name}</div>
                    <span className="inline-block bg-brand-accent/10 text-brand-accent text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">
                      {e.badge}
                    </span>
                  </div>
                </div>
                <table className="text-sm w-full">
                  <tbody>
                    <tr>
                      <td className="text-gray-500 pr-4 py-1 whitespace-nowrap">탱크 용량</td>
                      <td className="font-medium">{e.tank}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 pr-4 py-1 whitespace-nowrap">장비 사양</td>
                      <td className="font-medium">{e.spec}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 pr-4 py-1 whitespace-nowrap align-top">
                        주요 용도
                      </td>
                      <td className="text-gray-600 text-xs leading-relaxed">{e.use}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 시공이력 */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title border-l-4 border-brand-accent pl-3">주요 시공이력</h2>
          <p className="text-brand-gray text-sm mb-6">
            다양한 현장에서 신뢰를 쌓아왔습니다. (일부 공개 가능한 이력)
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {references.map((r) => (
              <div
                key={r.label}
                className="flex items-start gap-3 bg-brand-bg border border-brand-light rounded-xl px-5 py-4"
              >
                <span className="w-5 h-5 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <p className="font-bold text-brand-primary text-sm">{r.label}</p>
                  <p className="text-xs text-brand-gray leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인증·면허 */}
      <section className="py-14 bg-brand-bg">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title border-l-4 border-brand-accent pl-3">인증 · 면허 현황</h2>
          <p className="text-brand-gray text-sm mb-6">
            공인된 인증과 면허로 신뢰할 수 있는 서비스를 제공합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certs.map((c) => (
              <div key={c.label} className="card text-center">
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="font-bold text-brand-primary text-sm mb-1 break-keep">
                  {c.label}
                </div>
                <div className="text-xs text-gray-500 break-keep">{c.desc}</div>
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
            <a href="tel:01048945037" className="btn-cta bg-phone">
              📞 전화 상담
            </a>
            <a
              href="https://open.kakao.com/o/sK8HVKAi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta bg-kakao text-gray-900"
            >
              💬 카카오톡 문의
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
