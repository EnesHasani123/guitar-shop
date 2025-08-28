"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@apollo/client/react";
import Spotlight from "@/components/Spotlight";
import ModelCard from "@/components/ModelCard";
import {
  FIND_UNIQUE_BRAND,
  FIND_BRAND_MODELS,
  SEARCH_MODELS,
} from "@/graphql/queries";

type Model = {
  id: string;
  name: string;
  type?: string | null;
  image?: string | null;
  price?: number | null;
};

const TYPES = [
  "ALL",
  "ELECTRIC",
  "ACOUSTIC",
  "BASS",
  "CLASSICAL",
] as const;

export default function BrandModelsClient({
  brandId,
}: {
  brandId: string;
}) {
  // Brand (we need the logo image for the spotlight)
  const { data: brandData } = useQuery<{
    findUniqueBrand: {
      id: string;
      name: string;
      image?: string | null;
    };
  }>(FIND_UNIQUE_BRAND, { variables: { id: brandId } });

  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [type, setType] =
    useState<(typeof TYPES)[number]>("ALL");
  const [visible, setVisible] = useState(12);
  const [spotImage, setSpotImage] = useState<string | null>(
    null
  );

  useEffect(() => {
    const id = setTimeout(
      () => setDebounced(query.trim()),
      300
    );
    return () => clearTimeout(id);
  }, [query]);

  // Models for this brand (sorted)
  const {
    data: dataList,
    loading: loadingList,
    error: errorList,
    refetch: refetchList,
  } = useQuery<{ findBrandModels: Model[] }>(
    FIND_BRAND_MODELS,
    {
      variables: {
        brandId,
        sort: { field: "name", order: "ASC" },
      },
      skip: !!debounced, // skip when searching
      fetchPolicy: "cache-and-network",
    }
  );

  // Search within this brand
  const {
    data: dataSearch,
    loading: loadingSearch,
    error: errorSearch,
    refetch: refetchSearch,
  } = useQuery<{ searchModels: Model[] }>(SEARCH_MODELS, {
    variables: { brandId, name: debounced || "" },
    skip: !debounced,
    fetchPolicy: "cache-and-network",
  });

  const loading = loadingList || loadingSearch;
  const error = errorList || errorSearch;

  const raw: Model[] = debounced
    ? dataSearch?.searchModels ?? []
    : dataList?.findBrandModels ?? [];

  const filtered = useMemo(() => {
    let items = raw;
    if (type !== "ALL")
      items = items.filter((m) => m.type === type);
    return items;
  }, [raw, type]);

  const shown = filtered.slice(0, visible);

  const brandName = brandData?.findUniqueBrand?.name ?? "";
  const brandLogo =
    brandData?.findUniqueBrand?.image ?? null;

  return (
    <main className="py-10 space-y-10">
      {/* Hero with Spotlight */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-700"
          >
            &larr; Back To Home
          </Link>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Play like a{" "}
            <span className="text-orange-500">Rock</span>{" "}
            star
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md">
            With a legacy dating back to the 1950s,{" "}
            {brandName || "—"} blends expert craftsmanship
            with innovation to elevate your performance.
          </p>
        </div>

        {/* Spotlight logic:
           - if user clicked a model → show the guitar image
           - else show brand logo if available (with badge)
           - else fallback to brand name label
        */}
        {spotImage ? (
          <Spotlight
            variant="guitar"
            imageSrc={spotImage}
            imageAlt="Selected guitar"
          />
        ) : brandLogo ? (
          <Spotlight
            variant="guitar"
            imageSrc={brandLogo}
            imageAlt={brandName}
            badge={brandName}
          />
        ) : (
          <Spotlight
            variant="brand"
            label={brandName || " "}
          />
        )}
      </section>

      {/* Selection + controls + grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Check out the{" "}
          <span className="text-orange-500">Selection</span>
        </h2>

        {/* Toolbar */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <select
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            value={type}
            onChange={(e) => {
              setType(e.target.value as any);
              setVisible(12);
            }}
          >
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 sm:col-span-2"
            placeholder="Search by name"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(12);
            }}
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6"
              >
                <div className="h-40 bg-gray-200 animate-pulse rounded mb-3" />
                <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 p-4 border rounded bg-red-50 text-red-700">
            Failed to load models.
            <button
              className="ml-3 inline-flex items-center rounded px-3 py-1 border bg-white hover:bg-gray-50"
              onClick={() =>
                debounced ? refetchSearch() : refetchList()
              }
            >
              Retry
            </button>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {shown.map((m) => (
                <div
                  key={m.id}
                  onClick={() =>
                    setSpotImage(m.image || "/homepage.png")
                  }
                  role="button"
                >
                  <ModelCard
                    brandId={brandId}
                    id={m.id}
                    name={m.name}
                    type={m.type}
                    image={m.image}
                    price={m.price}
                  />
                  <div className="mt-1 text-xs text-gray-500">
                    {brandName}
                  </div>
                </div>
              ))}
            </div>

            {shown.length < filtered.length && (
              <div className="mt-8 flex justify-center">
                <button
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition"
                  onClick={() => setVisible((v) => v + 12)}
                >
                  Load more
                </button>
              </div>
            )}

            <div className="mt-6 text-xs text-gray-500 uppercase tracking-wide">
              Showing {Math.min(visible, filtered.length)}{" "}
              results from {filtered.length}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
