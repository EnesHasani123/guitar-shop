import GuitarDetailsClient from "@/components/GuitarDetailsClient";

export default function Page({
  params,
}: {
  params: { brandId: string; modelId: string };
}) {
  // Server Components can access params directly with no warning
  return (
    <GuitarDetailsClient
      brandId={params.brandId}
      modelId={params.modelId}
    />
  );
}
