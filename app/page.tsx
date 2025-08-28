import HeaderBanner from "@/components/HeaderBanner";
import BrandsGridClient from "@/components/BrandsGridClient";
import WhyAndDownload from "@/components/WhyAndDownload";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <main className="py-0 md:py-4 space-y-16">
        <HeaderBanner
          logoSrc="/logo.png"
          heroImage="/homepage.png"
          titleLead="Browse top quality"
          titleHighlight="Guitars"
          titleTrail="online"
          subtitle="Explore 50k+ latest collections of branded guitars online with VibeStrings."
          ctaHref="/models"
          ctaLabel="Explore Brands"
        />

        {/* Featuring brands */}
        <section className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Featuring the{" "}
            <span className="text-orange-500">
              Best Brands
            </span>
          </h2>
          <p className="mt-1 text-gray-500 text-sm">
            Select your preferred brand and explore our
            exquisite collection.
          </p>

          <BrandsGridClient />
        </section>
        <WhyAndDownload />
      </main>
      <Footer />
    </>
  );
}
