import Image from "next/image";

type SpotlightProps =
  | {
      variant?: "random";
      imageSrc: string;
      imageAlt?: string;
      badge?: string;
    }
  | { variant: "brand"; label: string; badge?: string }
  | {
      variant: "guitar";
      imageSrc: string;
      imageAlt?: string;
      badge?: string;
    };

export default function Spotlight(props: SpotlightProps) {
  const isImageVariant = "imageSrc" in props;
  const isRemote =
    isImageVariant && /^https?:\/\//i.test(props.imageSrc);

  return (
    <div className="relative md:pl-8">
      <div
        className="relative ml-auto w-full h-[260px] md:h-[360px] lg:h-[420px]
                   rounded-[42px] md:rounded-l-[120px] overflow-hidden shadow-sm"
        style={{
          background:
            "linear-gradient(180deg, #FF8A3B 0%, #F15A24 100%)",
        }}
      >
        {/* optional badge in the top-left */}
        {"badge" in props && props.badge && (
          <div className="absolute left-4 top-4 text-[13px] font-medium text-white/95">
            {props.badge}
          </div>
        )}

        {/* Brand label fallback */}
        {"label" in props && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/95 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
              {props.label}
            </span>
          </div>
        )}

        {/* Image variant: <img> for remote, <Image> for local */}
        {isImageVariant &&
          (isRemote ? (
            <img
              src={props.imageSrc}
              alt={props.imageAlt ?? "Spotlight"}
              className="absolute inset-0 w-full h-full object-contain p-8 md:p-10 lg:p-12"
            />
          ) : (
            <Image
              src={props.imageSrc}
              alt={props.imageAlt ?? "Spotlight"}
              fill
              className="object-contain p-8 md:p-10 lg:p-12"
              priority
              sizes="(min-width: 768px) 600px, 100vw"
            />
          ))}

        {/* bottom notch */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-white/50 shadow-sm flex items-center justify-center">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-white/90" />
        </div>
      </div>
    </div>
  );
}
