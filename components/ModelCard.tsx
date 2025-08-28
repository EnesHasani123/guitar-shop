import Link from "next/link";

type Props = {
  brandId: string;
  id: string;
  name: string;
  type?: string | null;
  image?: string | null;
  price?: number | null;
};

export default function ModelCard({
  brandId,
  id,
  name,
  type,
  image,
  price,
}: Props) {
  return (
    <Link
      href={`/guitars/${brandId}/${id}`}
      className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 md:p-6 transition hover:shadow-md block"
    >
      <div className="bg-gray-50 rounded-xl overflow-hidden aspect-[4/3] mb-3">
        <img
          src={image ?? ""}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="font-medium">{name}</div>
        {typeof price === "number" && (
          <div className="text-gray-500">
            ${price.toLocaleString()}
          </div>
        )}
      </div>

      {type && (
        <div className="mt-1 text-sm text-gray-500">
          {type}
        </div>
      )}
    </Link>
  );
}
