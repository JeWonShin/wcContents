import Link from "next/link";
import OkSalsuLogo from "@/components/OkSalsuLogo";

const PHONE = "010-4894-5037";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <OkSalsuLogo size="md" dark={true} />
            </div>
            <p className="text-brand-light text-sm leading-relaxed">
              평택·안중 살수차·급수차 전문 업체.
              <br />
              도로살수, 조경급수, 식수운반, 비상출동까지.
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
              <li>📍 경기도 평택시 안중읍 송담3로 56-15</li>
              <li>🕐 평일 08:00–20:00 | 24시간 견적 접수</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">바로가기</h3>
            <ul className="space-y-2 text-brand-light text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  서비스 안내
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  단가표
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  온라인 견적 문의
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-secondary pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brand-light">
          <p>
            상호: OK살수 | 대표: 이준희 | 사업자등록번호: 209-31-66281 | 일반과세자 |
            계좌이체·현금·세금계산서 발행
          </p>
          <p>© 2026 OK살수. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
