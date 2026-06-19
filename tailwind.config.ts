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
          primary: "#10416E",
          secondary: "#1F6FB2",
          accent: "#2E86C1",
          light: "#BBD7EC",
          bg: "#F4F9FD",
          gray: "#5D6D7E",
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
