import Link from "next/link";
import Image from "next/image";

type HeaderBannerProps = {
  /** Put your logo into /public (e.g. /logo.svg) */
  logoSrc: string;
  logoAlt?: string;

  heroImage: string;
  heroAlt?: string;

  /** Title pieces so we can style the highlight */
  titleLead: string;
  titleHighlight: string;
  titleTrail: string;

  subtitle?: string;

  /** Optional CTA */
  ctaHref?: string;
  ctaLabel?: string;
};

export default function HeaderBanner({
  logoSrc,
  logoAlt = "VibeStrings",
  heroImage,
  heroAlt = "Guitar hero",
  titleLead,
  titleHighlight,
  titleTrail,
  subtitle,
  ctaHref,
  ctaLabel,
}: HeaderBannerProps) {
  return (
    <header className="relative overflow-hidden">
   
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 flex items-center">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={140}
          height={32}
          priority
        />
      </div>

  
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center py-8 md:py-12">
  
        <div className="relative z-10">
          <h1 className="text-[34px] md:text-[42px] lg:text-[52px] leading-[1.1] font-bold text-gray-900">
            {titleLead}{" "}
            <span className="text-orange-500">
              {titleHighlight}
            </span>{" "}
            {titleTrail}
          </h1>
          {subtitle && (
            <p className="mt-4 text-gray-600 text-sm md:text-base max-w-sm">
              {subtitle}
            </p>
          )}

          {ctaHref && ctaLabel && (
            <div className="mt-6">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>

     
        <div className="relative md:pl-8">
 
          <div className="relative ml-auto w-full h-[300px] md:h-[420px] lg:h-[520px] rounded-[48px] md:rounded-l-[140px] overflow-hidden shadow-sm">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 600px, 100vw"
            />

         
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500" />
            </div>
          </div>

        
          <div className="pointer-events-none absolute -right-24 -top-24 w-64 h-64 rounded-full bg-white/70 blur-2xl hidden md:block" />
        </div>
      </div>
    </header>
  );
}
