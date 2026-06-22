"use client";

const PHONE = "010-4894-5037";
const KAKAO_CHANNEL_URL = "https://open.kakao.com/o/sK8HVKAi";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-2.5">
      {/* KakaoTalk */}
      <a
        href={KAKAO_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-kakao text-gray-900 font-bold text-sm pl-3 pr-4 py-3 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95"
        aria-label="카카오톡 상담"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
          <path d="M12 3C6.477 3 2 6.813 2 11.45c0 2.9 1.677 5.458 4.226 7.02L5.2 22l4.757-2.596C10.6 19.795 11.29 19.9 12 19.9c5.523 0 10-3.813 10-8.45S17.523 3 12 3z" />
        </svg>
        <span>카카오 상담</span>
      </a>

      {/* Phone */}
      <a
        href={`tel:${PHONE.replace(/-/g, "")}`}
        className="phone-ring flex items-center gap-2 bg-phone text-white font-bold text-sm pl-3 pr-4 py-3 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95"
        aria-label="전화 상담"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        <span>전화 상담</span>
      </a>
    </div>
  );
}
