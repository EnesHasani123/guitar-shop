"use client";

import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { FIND_UNIQUE_MODEL } from "@/graphql/queries";
import Spotlight from "@/components/Spotlight";

type Specs = {
  bodyWood?: string | null;
  neckWood?: string | null;
  fingerboardWood?: string | null;
  pickups?: string | null;
  tuners?: string | null;
  scaleLength?: string | null;
  bridge?: string | null;
};

type Musician = {
  name: string;
  musicianImage: string;
  bands: string[];
};

type ModelDetails = {
  id: string;
  name: string;
  description?: string | null;
  image?: string | null;
  price?: number | null;
  type?: string | null;
  specs?: Specs | null;
  musicians?: Musician[] | null;
};

export default function GuitarDetailsClient({
  brandId,
  modelId,
}: {
  brandId: string;
  modelId: string;
}) {
  const { data, loading, error, refetch } = useQuery<{
    findUniqueModel: ModelDetails;
  }>(FIND_UNIQUE_MODEL, {
    variables: { brandId, modelId },
  });

  const [tab, setTab] = useState<"specs" | "musicians">(
    "specs"
  );
  const [visible, setVisible] = useState(2);

  if (loading) {
    return (
      <main className="py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="h-6 bg-gray-200 animate-pulse rounded w-32" />
          <div className="mt-8 grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <div className="h-10 bg-gray-200 animate-pulse rounded w-2/3" />
              <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
              <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3" />
            </div>
            <div className="h-[360px] bg-gray-200 animate-pulse rounded-[42px]" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !data?.findUniqueModel) {
    return (
      <main className="py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Link
            href={`/brands/${brandId}`}
            className="text-gray-500 hover:text-gray-700"
          >
            &larr; Back To List
          </Link>
          <div className="mt-6 p-4 border rounded bg-red-50 text-red-700">
            Failed to load model details.
            <button
              className="ml-3 inline-flex items-center rounded px-3 py-1 border bg-white hover:bg-gray-50"
              onClick={() => refetch()}
            >
              Retry
            </button>
          </div>
        </div>
      </main>
    );
  }

  const m = data.findUniqueModel;
  const musicians = m.musicians ?? [];
  const pages = Math.ceil(musicians.length / 2);
  const currentPage = Math.max(
    1,
    Math.ceil(Math.min(visible, musicians.length) / 2)
  );

  return (
    <main className="pb-0">
      {/* HERO ROW */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-4 md:pt-6 grid md:grid-cols-2 gap-10 items-center">
        {/* back */}
        <div className="md:col-span-2">
          <Link
            href={`/brands/${brandId}`}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            &larr; Back To List
          </Link>
        </div>

        {/* title + (optional) price/desc blurb */}
        <div className="order-1 md:order-none">
          <h1 className="text-[36px] md:text-[44px] lg:text-[56px] font-bold text-gray-900 leading-tight tracking-tight">
            {m.name}
          </h1>
        </div>

        {/* right weird shape with guitar */}
        <div className="order-2 md:order-none">
          <Spotlight
            variant="guitar"
            imageSrc={m.image ?? "/homepage.png"}
            imageAlt={m.name}
          />
        </div>
      </section>

      {/* TABS */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mt-8">
        <div className="flex items-center gap-8 border-b border-gray-200">
          <button
            onClick={() => setTab("specs")}
            className={`py-3 text-sm md:text-base font-medium ${
              tab === "specs"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500"
            }`}
          >
            Specification
          </button>
          <button
            onClick={() => setTab("musicians")}
            className={`py-3 text-sm md:text-base font-medium ${
              tab === "musicians"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500"
            }`}
          >
            Who plays it?
          </button>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
        {tab === "specs" ? (
          <div className="grid md:grid-cols-12 gap-10">
            {/* left text block matches Figma spacing/width */}
            <div className="md:col-span-8">
              {m.description && (
                <p className="text-gray-700 leading-relaxed">
                  {m.description}
                </p>
              )}

              <ul className="mt-6 list-disc pl-6 space-y-2 text-gray-800">
                {m.specs?.bodyWood && (
                  <li>
                    <b>Body Wood:</b> {m.specs.bodyWood}
                  </li>
                )}
                {m.specs?.neckWood && (
                  <li>
                    <b>Neck Wood:</b> {m.specs.neckWood}
                  </li>
                )}
                {m.specs?.fingerboardWood && (
                  <li>
                    <b>Fingerboard:</b>{" "}
                    {m.specs.fingerboardWood}
                  </li>
                )}
                {m.specs?.pickups && (
                  <li>
                    <b>Pickups:</b> {m.specs.pickups}
                  </li>
                )}
                {m.specs?.tuners && (
                  <li>
                    <b>Tuners:</b> {m.specs.tuners}
                  </li>
                )}
                {m.specs?.scaleLength && (
                  <li>
                    <b>Scale Length:</b>{" "}
                    {m.specs.scaleLength}
                  </li>
                )}
                {m.specs?.bridge && (
                  <li>
                    <b>Bridge:</b> {m.specs.bridge}
                  </li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {musicians.slice(0, visible).map((mu, i) => (
                <div
                  key={`${mu.name}-${i}`}
                  className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                    {/* musician images can be remote → plain <img> is fine */}
                    <img
                      src={mu.musicianImage}
                      alt={mu.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="font-medium">
                      {mu.name}
                    </div>
                    {mu.bands?.length ? (
                      <div className="text-sm text-gray-500">
                        {mu.bands.join(", ")}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            {/* dots + show more to match the spec */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                {Array.from({ length: pages }).map(
                  (_, idx) => {
                    const pageNo = idx + 1;
                    const active = pageNo === currentPage;
                    return (
                      <button
                        key={idx}
                        aria-label={`Show musicians page ${pageNo}`}
                        className={`h-2.5 w-2.5 rounded-full ${
                          active
                            ? "bg-orange-500"
                            : "bg-gray-300"
                        }`}
                        onClick={() =>
                          setVisible(pageNo * 2)
                        }
                      />
                    );
                  }
                )}
              </div>

              {visible < musicians.length && (
                <button
                  onClick={() =>
                    setVisible((v) =>
                      Math.min(v + 2, musicians.length)
                    )
                  }
                  className="inline-flex items-center justify-center rounded-lg px-3 py-1.5 border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 text-sm"
                >
                  Show 2 more
                </button>
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
