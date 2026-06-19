import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 경기살수",
};

export default function PrivacyPage() {
  return (
    <section className="py-14">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-black text-brand-primary mb-6">개인정보처리방침</h1>
        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <p>
            경기살수(이하 "회사")는 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고
            이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">제1조 (개인정보의 처리 목적)</h2>
            <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다.</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
              <li>살수차·급수차 서비스 견적 상담 및 계약 이행</li>
              <li>고객 문의에 대한 답변 및 서비스 안내</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">제2조 (처리하는 개인정보의 항목)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>필수: 이름(또는 회사명), 연락처, 현장 주소</li>
              <li>선택: 필요 날짜, 차량 종류, 문의 내용</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">제3조 (개인정보의 보유 및 이용기간)</h2>
            <p>회사는 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유·이용기간 또는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
              <li>견적 문의 처리 완료 후 6개월</li>
              <li>계약 체결 시 계약 종료일로부터 5년 (상법 기준)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">제4조 (개인정보의 제3자 제공)</h2>
            <p>회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의 없이 제3자에게 제공하지 않습니다.</p>
          </div>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">제5조 (개인정보보호 책임자)</h2>
            <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
            <div className="bg-brand-bg rounded-lg p-4 mt-3 text-sm">
              <p>개인정보 보호책임자: 대표자</p>
              <p>연락처: 031-000-0000</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-brand-primary text-lg mb-2">제6조 (정보주체의 권리·의무)</h2>
            <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리 정지 요구</li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 border-t border-brand-light pt-4">
            본 방침은 2026년 6월 19일부터 적용됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
