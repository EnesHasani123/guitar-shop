"use client";

import HeaderBanner from "@/components/HeaderBanner";
import { useI18n } from "@/components/providers/LangProvider";

export default function HomeHeroClient() {
  const { t } = useI18n();

  return (
    <HeaderBanner
      logoSrc="/logo.png"
      heroImage="/homepage.png"
      titleLead="Browse top quality"
      titleHighlight="Guitars"
      titleTrail="online"
      subtitle="Explore 50k+ latest collections of branded guitars online with VibeStrings."
      ctaHref="/models"
      ctaLabel={t.exploreBrands}
    />
  );
}
