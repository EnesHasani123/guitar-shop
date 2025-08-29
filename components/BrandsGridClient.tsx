// components/BrandsGridClient.tsx
"use client";

import { useQuery } from "@apollo/client/react";
import { FIND_ALL_BRANDS } from "@/graphql/queries";
import type { Brand as GBrand } from "@/types/graphql";
import BrandCard from "@/components/BrandCard";

type Brand = Pick<GBrand, "id" | "name" | "image">;

export default function BrandsGridClient() {
  const { data, loading, error, refetch } = useQuery<{
    findAllBrands: Brand[];
  }>(FIND_ALL_BRANDS);

  if (loading) {
    return (
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6"
          >
            <div className="h-12 bg-gray-200 animate-pulse rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 p-4 border rounded bg-red-50 text-red-700">
        Failed to load brands.
        <button
          className="ml-3 inline-flex items-center rounded px-3 py-1 border bg-white hover:bg-gray-50"
          onClick={() => refetch()}
        >
          Retry
        </button>
      </div>
    );
  }

  const brands = data?.findAllBrands ?? [];
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}
