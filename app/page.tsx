import BrandsGridClient from "@/components/BrandsGridClient";
import WhyAndDownload from "@/components/WhyAndDownload";
import HomeHeroClient from "@/components/HomeHeroClient";
import HomeFeaturedCopyClient from "@/components/HomeFeaturedCopyClient";

export default function HomePage() {
  return (
    <>
      <main className="py-0 md:py-4 space-y-16">
        <HomeHeroClient />
        <section className="max-w-6xl mx-auto px-4 md:px-6">
          <HomeFeaturedCopyClient />
          <BrandsGridClient />
        </section>
        <WhyAndDownload />
      </main>
    </>
  );
}
