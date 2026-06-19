"use client";
import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  address: string;
  date: string;
  vehicleType: string;
  message: string;
  privacy: boolean;
}

const vehicleOptions = [
  "3.5톤 살수차",
  "5톤 급수차",
  "8톤 살수차",
  "16톤 살수차",
  "미정 (상담 후 결정)",
];

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    date: "",
    vehicleType: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacy) {
      alert("개인정보 수집·이용에 동의해 주세요.");
      return;
    }
    setLoading(true);
    // Simulate submission (replace with actual API call)
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card text-center py-10">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-brand-primary mb-2">견적 문의가 접수되었습니다!</h3>
        <p className="text-gray-600 text-sm">
          빠른 시간 내 담당자가 연락 드리겠습니다.
          <br />
          긴급 문의는 <a href="tel:01048945037" className="text-brand-accent font-bold">010-4894-5037</a>으로 전화해 주세요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-brand-primary mb-1">
            이름 / 회사명 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="홍길동 / (주)경기건설"
            className="w-full border border-brand-light rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-brand-primary mb-1">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="010-0000-0000"
            className="w-full border border-brand-light rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-brand-primary mb-1">
          현장 주소 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          placeholder="경기도 평택시 안중읍 송담3로 56-15"
          className="w-full border border-brand-light rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-brand-primary mb-1">필요일</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-brand-light rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-brand-primary mb-1">차량 / 물량</label>
          <select
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
            className="w-full border border-brand-light rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent bg-white"
          >
            <option value="">선택해 주세요</option>
            {vehicleOptions.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-brand-primary mb-1">문의 내용</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="작업 목적, 현장 규모, 출동 횟수 등 자세히 기재해 주시면 빠른 견적이 가능합니다."
          className="w-full border border-brand-light rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none"
        />
      </div>

      {/* Privacy consent */}
      <div className="bg-brand-bg rounded-lg p-3 text-xs text-gray-600">
        <p className="font-bold text-brand-primary mb-1">개인정보 수집·이용 동의 (필수)</p>
        <p className="leading-relaxed">
          수집 항목: 이름, 연락처, 현장주소<br />
          수집 목적: 견적 상담 및 서비스 안내<br />
          보유 기간: 문의 처리 완료 후 6개월<br />
          귀하는 개인정보 수집·이용을 거부할 권리가 있으나, 거부 시 상담이 불가합니다.
        </p>
        <label className="flex items-center gap-2 mt-2 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={handleChange}
            className="w-4 h-4 accent-brand-accent"
          />
          <span className="font-bold text-brand-primary">위 개인정보 수집·이용에 동의합니다. (필수)</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-cta justify-center text-base py-4 disabled:opacity-60"
      >
        {loading ? "접수 중..." : "📋 견적 문의 접수하기"}
      </button>
    </form>
  );
}
