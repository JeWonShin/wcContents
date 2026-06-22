import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0F4C75", // 딥 코발트 네이비 — 신뢰
          secondary: "#1464A0", // 코발트 블루 — 물의 선명함
          accent: "#0D9488", // 틸(Teal) — 물+자연 교차점
          light: "#A7D3CF", // 소프트 틸 미스트 — 경계선
          bg: "#F0F8F7", // 틸화이트 — 섹션 배경
          gray: "#5D6D7E",
          nature: "#4AAB7E", // 리프 그린 — 조경 포인트
        },
        kakao: "#FEE500",
        phone: "#25D366",
      },
      fontFamily: {
        sans: ["Malgun Gothic", "맑은 고딕", "Apple SD Gothic Neo", "Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
