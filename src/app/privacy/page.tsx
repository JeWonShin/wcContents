import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | OK살수",
};

export default function PrivacyPage() {
  return (
    <section className="py-14">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-black text-brand-primary mb-6">개인정보처리방침</h1>
        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <p>
            OK살수(이하 &quot;회사&quot;)는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
            보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보
            처리방침을 수립·공개합니다.
          </p>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">
              제1조 (개인정보 수집 여부)
            </h2>
            <p>
              본 웹사이트는 회원가입, 온라인 결제, 자동 수집 기능(쿠키, 로그 등)을 운영하지 않으며
              방문자의 개인정보를 수집하지 않습니다.
            </p>
            <p className="mt-2">
              서비스 문의는 전화 또는 카카오톡 상담을 통해 이루어지며, 해당 과정에서 고객이 직접
              제공한 정보(이름, 연락처 등)는 상담 및 계약 이행 목적으로만 활용됩니다.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">
              제2조 (개인정보의 보유 및 이용기간)
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>상담 완료 후 6개월</li>
              <li>계약 체결 시 계약 종료일로부터 5년 (상법 기준)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">
              제3조 (개인정보의 제3자 제공)
            </h2>
            <p>회사는 고객의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.</p>
          </div>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">
              제4조 (개인정보보호 책임자)
            </h2>
            <div className="bg-brand-bg rounded-lg p-4 text-sm">
              <p>개인정보 보호책임자: 대표자</p>
              <p>연락처: 010-4894-5037</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 border-t border-brand-light pt-4">
            본 방침은 2026년 6월 26일부터 적용됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
