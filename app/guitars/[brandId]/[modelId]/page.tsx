import GuitarDetailsClient from "@/components/GuitarDetailsClient";

export default function Page({
  params,
}: {
  params: { brandId: string; modelId: string };
}) {
  return (
    <GuitarDetailsClient
      brandId={params.brandId}
      modelId={params.modelId}
    />
  );
}
