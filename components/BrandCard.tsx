import Image from "next/image";
import Link from "next/link";

type Brand = { id: string; name: string; image: string };

export default function BrandCard({
  brand,
}: {
  brand: Brand;
}) {
  return (
    <Link
      href={`/brands/${brand.id}`}
      aria-label={brand.name}
      className="group flex items-center justify-center p-4"
    >
      <Image
        src={brand.image}
        alt={brand.name}
        width={160}
        height={60}
        className="
          max-h-12 object-contain
          filter grayscale opacity-60 brightness-90 contrast-75
          transition duration-200 ease-out
          group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 group-hover:contrast-100
        "
      />
    </Link>
  );
}
