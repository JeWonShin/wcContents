interface LogoProps {
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

const sizes = {
  sm: { wrap: "gap-1.5", circle: "w-8 h-8", ok: "text-xs", name: "text-base", sub: "text-[9px]" },
  md: { wrap: "gap-2",   circle: "w-10 h-10", ok: "text-sm", name: "text-xl",  sub: "text-[10px]" },
  lg: { wrap: "gap-2.5", circle: "w-14 h-14", ok: "text-lg", name: "text-3xl", sub: "text-xs" },
};

export default function OkSalsuLogo({ size = "md", dark = false }: LogoProps) {
  const s = sizes[size];
  return (
    <div className={`flex items-center ${s.wrap}`}>
      {/* 빨간 원형 OK 배지 */}
      <div
        className={`${s.circle} rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}
        style={{ background: "linear-gradient(135deg, #e53e3e 0%, #c53030 100%)" }}
      >
        <span className={`text-white font-black ${s.ok} leading-none tracking-tight`}>OK</span>
      </div>

      {/* 살수 텍스트 */}
      <div className="leading-tight">
        <div
          className={`font-black ${s.name} leading-none tracking-tight`}
          style={{ color: dark ? "#ffffff" : "#1a1a1a" }}
        >
          살수
        </div>
        <div
          className={`${s.sub} mt-0.5`}
          style={{ color: dark ? "rgba(255,255,255,0.65)" : "#5D6D7E" }}
        >
          살수차·급수차 전문
        </div>
      </div>
    </div>
  );
}
