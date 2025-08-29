"use client";

import {
  useApolloClient,
  useQuery,
} from "@apollo/client/react";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";
import ModelCard from "@/components/ModelCard";
import {
  FIND_ALL_BRANDS,
  FIND_BRAND_MODELS,
} from "@/graphql/queries";
import { useI18n } from "@/components/providers/LangProvider";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

type Brand = {
  id: string;
  name: string;
  image?: string | null;
};
type Model = {
  id: string;
  name: string;
  type?: string | null;
  image?: string | null;
  price?: number | null;
  brandId?: string;
  brandName?: string;
};

export default function AllModelsPage() {
  const client = useApolloClient();
  const { t, tr } = useI18n();

  const {
    data: brandsData,
    loading: loadingBrands,
    error: errorBrands,
  } = useQuery<{ findAllBrands: Brand[] }>(FIND_ALL_BRANDS);

  const [loadingModels, setLoadingModels] = useState(false);
  const [allModels, setAllModels] = useState<Model[]>([]);
  const [brandId, setBrandId] = useState<string>("ALL");
  const [type, setType] = useState<
    "ALL" | "ELECTRIC" | "ACOUSTIC" | "BASS" | "CLASSICAL"
  >("ALL");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(12);
  const [spotImage, setSpotImage] = useState<string | null>(
    null
  );

  useEffect(() => {
    const run = async () => {
      const all = brandsData?.findAllBrands;
      if (!all || all.length === 0) return;

      setLoadingModels(true);
      const brands =
        brandId === "ALL"
          ? all
          : all.filter((b) => b.id === brandId);

      const results = await Promise.all(
        brands.map((b) =>
          client.query<{ findBrandModels: Model[] }>({
            query: FIND_BRAND_MODELS,
            variables: {
              brandId: b.id,
              sort: { field: "name", order: "ASC" },
            },
            fetchPolicy: "network-only",
          })
        )
      );

      const flat = results.flatMap((res, idx) =>
        (res.data?.findBrandModels ?? []).map((m) => ({
          ...m,
          brandId: brands[idx].id,
          brandName: brands[idx].name,
        }))
      );

      setAllModels(flat);
      setVisible(12); 
      setSpotImage(null); 
      setLoadingModels(false);
    };

    run();
  }, [brandsData, client, brandId]);


  const filtered = useMemo(() => {
    let items = allModels;
    if (type !== "ALL")
      items = items.filter((m) => m.type === type);
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter((m) =>
        m.name.toLowerCase().includes(q)
      );
    }
    return items;
  }, [allModels, type, query]);

  const shown = filtered.slice(0, visible);
  const brandObj =
    brandId === "ALL"
      ? null
      : brandsData?.findAllBrands.find(
          (b) => b.id === brandId
        ) ?? null;

  const isLoading = loadingBrands || loadingModels;

 
  const canLoadMore = shown.length < filtered.length;
  const loadMore = useCallback(() => {
    setVisible((v) => Math.min(v + 12, filtered.length));
  }, [filtered.length]);
  const sentinelRef = useInfiniteScroll(
    loadMore,
    canLoadMore
  );

  const typeLabel = {
    ALL: t.typeAll,
    ELECTRIC: t.typeElectric,
    ACOUSTIC: t.typeAcoustic,
    BASS: t.typeBass,
    CLASSICAL: t.typeClassical,
  } as const;

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
            {t.legacyBlurb}
          </p>
        </div>

        {spotImage ? (
          <Spotlight
            variant="guitar"
            imageSrc={spotImage}
            imageAlt="Selected guitar"
          />
        ) : brandObj?.image ? (
          <Spotlight
            variant="guitar"
            imageSrc={brandObj.image}
            imageAlt={brandObj.name}
            badge={brandObj.name}
          />
        ) : brandObj?.name ? (
          <Spotlight
            variant="brand"
            label={brandObj.name}
          />
        ) : (
          <Spotlight
            variant="random"
            imageSrc="/homepage.png"
            imageAlt={t.featured}
            badge={t.featured}
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
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
            disabled={loadingBrands || !!errorBrands}
            aria-label={t.allBrands}
          >
            <option value="ALL">{t.allBrands}</option>
            {brandsData?.findAllBrands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>

          <select
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            aria-label={t.filterByType}
          >
            {(
              [
                "ALL",
                "ELECTRIC",
                "ACOUSTIC",
                "BASS",
                "CLASSICAL",
              ] as const
            ).map((tKey) => (
              <option key={tKey} value={tKey}>
                {typeLabel[tKey]}
              </option>
            ))}
          </select>

          <input
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            placeholder={t.searchByName}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

      
        {isLoading && (
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

   
        {!!errorBrands && (
          <div className="mt-6 p-4 border rounded bg-red-50 text-red-700">
            {t.failedLoadBrands}
          </div>
        )}

    
        {!isLoading && !errorBrands && (
          <>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {shown.map((m) => (
                <div
                  key={`${m.brandId}-${m.id}`}
                  onClick={() =>
                    setSpotImage(m.image || "/homepage.png")
                  }
                  role="button"
                >
                  <ModelCard
                    brandId={m.brandId!}
                    id={m.id}
                    name={m.name}
                    type={m.type}
                    image={m.image}
                    price={m.price}
                    brandName={m.brandName}
                  />
                </div>
              ))}
            </div>

         
            {canLoadMore && (
              <div ref={sentinelRef} className="h-10" />
            )}
            <div className="mt-6 text-xs text-gray-500">
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
