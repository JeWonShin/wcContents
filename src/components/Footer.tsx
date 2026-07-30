import Link from "next/link";
import {
  ADDRESS,
  BIZ_NAME,
  BIZ_REG_NO,
  BIZ_TAX_TYPE,
  KAKAO_URL,
  OWNER_NAME,
  PHONE,
  PHONE_HREF,
  asset,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <img
                src={asset("/logo.png")}
                alt="OK살수 로고"
                style={{ height: 40, width: "auto", filter: "brightness(0) invert(1)" }}
              />
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
                <a href={PHONE_HREF} className="hover:text-white transition">
                  {PHONE}
                </a>
              </li>
              <li>📍 {ADDRESS}</li>
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
                <a
                  href={KAKAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  카카오톡 문의
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-secondary pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-brand-light">
          <p>
            상호: {BIZ_NAME} | 대표: {OWNER_NAME} | 사업자등록번호: {BIZ_REG_NO} | {BIZ_TAX_TYPE} |
            계좌이체·현금·세금계산서 발행
          </p>
          <p>© 2026 {BIZ_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
