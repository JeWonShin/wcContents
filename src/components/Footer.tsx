import Link from "next/link";

const PHONE = "031-000-0000";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💧</span>
              <div>
                <div className="font-black text-xl">○○살수</div>
                <div className="text-brand-light text-xs">살수차·급수차 전문</div>
              </div>
            </div>
            <p className="text-brand-light text-sm leading-relaxed">
              수도권·경기 지역 살수차·급수차 전문 업체.
              <br />공사현장, 조경·농업, 생활용수까지 즉시 대응합니다.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">연락처</h3>
            <ul className="space-y-2 text-brand-light text-sm">
              <li>
                📞{" "}
                <a href={`tel:${PHONE.replace(/-/g, "")}`} className="hover:text-white transition">
                  {PHONE}
                </a>
              </li>
              <li>📍 경기도 ○○시 ○○구 ○○로 000</li>
              <li>🕐 평일 08:00–20:00 | 24시간 견적 접수</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">바로가기</h3>
            <ul className="space-y-2 text-brand-light text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition">서비스 안내</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">단가표</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">온라인 견적 문의</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">개인정보처리방침</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-secondary pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brand-light">
          <p>
            상호: ○○살수 | 대표: ○○○ | 사업자등록번호: 000-00-00000
          </p>
          <p>© 2026 ○○살수. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
