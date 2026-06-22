"use client";

const PHONE = "010-4894-5037";
const KAKAO_CHANNEL_URL = "https://open.kakao.com/o/sK8HVKAi";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {/* KakaoTalk */}
      <a
        href={KAKAO_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-kakao text-gray-900 shadow-xl transition-transform hover:scale-110 active:scale-95"
        aria-label="카카오톡 상담"
      >
        <span className="text-xl leading-none">💬</span>
        <span className="text-[9px] font-bold leading-tight mt-0.5">카톡</span>
      </a>

      {/* Phone */}
      <a
        href={`tel:${PHONE.replace(/-/g, "")}`}
        className="phone-ring flex flex-col items-center justify-center w-14 h-14 rounded-full bg-phone text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
        aria-label="전화 상담"
      >
        <span className="text-xl leading-none">📞</span>
        <span className="text-[9px] font-bold leading-tight mt-0.5">전화</span>
      </a>
    </div>
  );
}
