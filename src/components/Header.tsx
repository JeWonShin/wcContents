"use client";
import { useState } from "react";
import Link from "next/link";
import OkSalsuLogo from "@/components/OkSalsuLogo";

const nav = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스 안내" },
  { href: "/pricing", label: "단가표" },
  { href: "/gallery", label: "현장 갤러리" },
  { href: "/contact", label: "고객센터" },
];

const PHONE = "010-4894-5037";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-brand-light">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <OkSalsuLogo size="md" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand-accent transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Phone + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="hidden sm:flex items-center gap-1 text-brand-secondary font-bold text-base"
          >
            <span>📞</span>
            <span>{PHONE}</span>
          </a>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand-bg transition"
            onClick={() => setOpen(!open)}
            aria-label="메뉴 열기"
          >
            <span className="text-2xl text-brand-primary">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-brand-light">
          <a
            href={`tel:${PHONE.replace(/-/g, "")}`}
            className="flex items-center gap-2 px-4 py-3 text-brand-secondary font-bold border-b border-brand-light"
          >
            <span>📞</span> {PHONE}
          </a>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="block px-4 py-3 text-gray-700 border-b border-brand-bg hover:bg-brand-bg transition-colors"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
