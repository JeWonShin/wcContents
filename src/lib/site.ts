/**
 * 업체 정보 단일 출처(single source of truth).
 *
 * 전화번호·주소·카카오 링크 등이 바뀌면 이 파일만 수정하면 사이트 전체에 반영됩니다.
 * 페이지나 컴포넌트에 값을 직접 적지 마세요.
 */

/**
 * 정적 배포 시 붙는 경로 접두사.
 * - ok살수.kr (프로덕션): 빈 문자열
 * - GitHub Pages (스테이징): "/wcContents"
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * public/ 안의 정적 파일 경로에 BASE_PATH를 붙입니다.
 * `<img src>`, `<link href>` 처럼 Next가 자동으로 처리하지 않는 곳에 사용하세요.
 * (`next/link`는 basePath를 자동 처리하므로 감싸지 않아도 됩니다.)
 */
export const asset = (path: string) => `${BASE_PATH}${path}`;

/**
 * 프로덕션 도메인 — ok살수.kr의 퓨니코드 표기.
 *
 * 한글 도메인(`https://ok살수.kr`)과 동일한 주소지만, 절대 URL에는 퓨니코드를 씁니다.
 * OG 스크래퍼·XML·JSON-LD 파서가 ASCII만 안전하게 처리하고,
 * 네이버 서치어드바이저에도 이 형태로 등록되어 있어 정규 URL을 일치시킵니다.
 */
export const SITE_URL = "https://xn--ok-tr4j39b.kr";

/** 절대 URL 생성 (OG 이미지 등). 스테이징 빌드에서도 프로덕션 도메인을 가리킵니다. */
export const siteUrl = (path = "/") => `${SITE_URL}${path}`;

/* ── 사업자 정보 ────────────────────────────────────────── */

export const BIZ_NAME = "OK살수";
export const OWNER_NAME = "이준희";
export const BIZ_REG_NO = "209-31-66281";
export const BIZ_TAX_TYPE = "일반과세자";

/* ── 연락 수단 ──────────────────────────────────────────── */

export const PHONE = "010-4894-5037";
/** `<a href>`에 그대로 넣는 tel: 링크 */
export const PHONE_HREF = `tel:${PHONE.replace(/-/g, "")}`;
/** JSON-LD·국제표기용 */
export const PHONE_INTL = "+82-10-4894-5037";

export const KAKAO_URL = "https://open.kakao.com/o/sK8HVKAi";
export const KAKAO_CHANNEL = "OK살수";

/* ── 주소 ───────────────────────────────────────────────── */

export const ADDRESS = "경기도 평택시 안중읍 송담3로 56-15";
export const ADDRESS_STREET = "안중읍 송담3로 56-15";
export const ADDRESS_LOCALITY = "평택시";
export const ADDRESS_REGION = "경기도";
export const POSTAL_CODE = "17632";
export const GEO = { latitude: 36.9897, longitude: 126.8286 } as const;

/* ── 활동 지역 ──────────────────────────────────────────── */

/** JSON-LD `areaServed` 등 데이터용 지역명. */
export const SERVICE_AREAS = ["평택", "화성", "안성", "오산", "천안", "아산"] as const;

/**
 * 상단 배너 표시용 지역 목록. 평택은 읍·면 단위까지 노출해 지역 검색을 노립니다.
 * 6개 유지 — 앞 3개/뒤 3개로 나눠 2줄로도 표시됩니다.
 */
export const SERVICE_AREAS_BANNER = [
  "평택(안중·포승·팽성·청북)",
  "화성",
  "오산",
  "안성",
  "천안",
  "아산",
] as const;

/* ── 운영 시간 ──────────────────────────────────────────── */

export const HOURS = {
  weekday: { opens: "08:00", closes: "20:00" },
  saturday: { opens: "08:00", closes: "18:00" },
  /** 일·공휴일 */
  holidayNote: "긴급 출동 가능 (할증 적용)",
  /** 카카오톡 견적 접수 */
  inquiryNote: "24시간",
} as const;

/** 운영시간을 "08:00 – 20:00" 형태로 표시합니다. */
export const hoursLabel = (h: { opens: string; closes: string }) => `${h.opens} – ${h.closes}`;
