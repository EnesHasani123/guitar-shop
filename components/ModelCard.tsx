import Link from "next/link";

type Props = {
  brandId: string;
  id: string;
  name: string;
  type?: string | null;
  image?: string | null;
  price?: number | null;
  brandName?: string;
};

const FALLBACK_IMG = "/homepage.png";

export default function ModelCard({
  brandId,
  id,
  name,
  type,
  image,
  price,
  brandName,
}: Props) {
  return (
    <Link
      href={`/guitars/${brandId}/${id}`}
      className="block group"
    >
 
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={image || FALLBACK_IMG}
          alt={name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            if (!el.src.endsWith(FALLBACK_IMG))
              el.src = FALLBACK_IMG;
          }}
        />
      </div>

   
      <div className="mt-3 flex items-center justify-between">
        <div className="text-[15px] md:text-base font-medium leading-tight">
          {name}
        </div>
        {typeof price === "number" && (
          <div className="text-sm md:text-[13px] text-gray-500">
            ${price.toLocaleString()}
          </div>
        )}
      </div>

      {type && (
        <div className="mt-1 text-xs tracking-wide text-gray-500">
          {type}
        </div>
      )}

      {brandName && (
        <div className="mt-1 text-xs text-gray-400">
          {brandName}
        </div>
      )}
    </Link>
  );
}
