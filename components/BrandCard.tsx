import Image from "next/image";
import Link from "next/link";
import type { Brand as GBrand } from "@/types/graphql";

type BrandCardProps = {
  brand: Pick<GBrand, "id" | "name" | "image">;
};

export default function BrandCard({
  brand,
}: BrandCardProps) {
  const alt = brand.name ?? "Brand";
  const src = brand.image || "/homepage.png";

  return (
    <Link
      href={`/brands/${brand.id}`}
      aria-label={alt}
      className="group flex items-center justify-center p-4"
    >
      <Image
        src={src}
        alt={alt}
        width={160}
        height={60}
        className="max-h-12 object-contain
                   filter grayscale opacity-60 brightness-90 contrast-75
                   transition duration-200 ease-out
                   group-hover:grayscale-0 group-hover:opacity-100
                   group-hover:brightness-100 group-hover:contrast-100"
      />
    </Link>
  );
}
