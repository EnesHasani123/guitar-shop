"use client";

import { useI18n } from "@/components/providers/LangProvider";

export default function HomeFeaturedCopyClient() {
  const { t } = useI18n();

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        {t.featuring}{" "}
        <span className="text-orange-500">
          {t.bestBrands}
        </span>
      </h2>
      <p className="mt-1 text-gray-500 text-sm">
        {t.chooseBrandExplore}
      </p>
    </>
  );
}
