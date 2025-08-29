"use client";

import { useI18n } from "@/components/providers/LangProvider";
import type { Lang } from "@/lib/i18n";
import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as Lang);
  };

  return (
    <div className="inline-flex items-center gap-2">
      <label className="text-sm text-gray-500">
        Language
      </label>
      <select
        value={lang}
        onChange={onChange}
        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm"
        aria-label="Language"
      >
        <option value="en">English</option>
        <option value="mk">Македонски</option>
        <option value="sq">Shqip</option>
      </select>
    </div>
  );
}
