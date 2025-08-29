"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useQuery } from "@apollo/client/react";
import Spotlight from "@/components/Spotlight";
import ModelCard from "@/components/ModelCard";
import {
  FIND_UNIQUE_BRAND,
  FIND_BRAND_MODELS,
  SEARCH_MODELS,
} from "@/graphql/queries";
import { useI18n } from "@/components/providers/LangProvider";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

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
  const { t, tr } = useI18n();

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

  const {
    data: dataList,
    loading: loadingList,
    error: errorList,
  } = useQuery<{ findBrandModels: Model[] }>(
    FIND_BRAND_MODELS,
    {
      variables: {
        brandId,
        sort: { field: "name", order: "ASC" },
      },
      skip: !!debounced,
      fetchPolicy: "cache-and-network",
    }
  );

  const {
    data: dataSearch,
    loading: loadingSearch,
    error: errorSearch,
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

  const typeLabel = {
    ALL: t.typeAll,
    ELECTRIC: t.typeElectric,
    ACOUSTIC: t.typeAcoustic,
    BASS: t.typeBass,
    CLASSICAL: t.typeClassical,
  } as const;

  
  const canLoadMore = shown.length < filtered.length;
  const loadMore = useCallback(() => {
    setVisible((v) => Math.min(v + 12, filtered.length));
  }, [filtered.length]);
  const sentinelRef = useInfiniteScroll(
    loadMore,
    canLoadMore
  );

  return (
    <main className="py-10 space-y-10">
  
      <section className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-700"
          >
            &larr; {t.backHome}
          </Link>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {t.playLikeA}{" "}
            <span className="text-orange-500">
              {t.rock}
            </span>{" "}
            {t.star}
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md">
            {tr("legacyBrandBlurb", {
              brand: brandName || "—",
            })}
          </p>
        </div>

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

     
      <section className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {t.checkOutThe}{" "}
          <span className="text-orange-500">
            {t.selection}
          </span>
        </h2>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <select
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            value={type}
            onChange={(e) => {
              setType(e.target.value as any);
              setVisible(12);
            }}
            aria-label={t.filterByType}
          >
            {TYPES.map((tKey) => (
              <option key={tKey} value={tKey}>
                {typeLabel[tKey]}
              </option>
            ))}
          </select>

          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400 sm:col-span-2"
            placeholder={t.searchByName}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(12);
            }}
          />
        </div>

      
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

      
        {error && (
          <div className="mt-6 p-4 border rounded bg-red-50 text-red-700">
            {t.failedLoadModels}
          </div>
        )}

     
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
                    brandName={brandName}
                  />
                </div>
              ))}
            </div>

            {canLoadMore && (
              <div ref={sentinelRef} className="h-10" />
            )}

            <div className="mt-6 text-xs text-gray-500 uppercase tracking-wide">
              {tr("showingResults", {
                a: Math.min(visible, filtered.length),
                b: filtered.length,
              })}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
