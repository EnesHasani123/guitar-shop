import BrandModelsClient from "@/components/BrandModelsClient";

export default function Page({
  params,
}: {
  params: { brandId: string };
}) {
  return <BrandModelsClient brandId={params.brandId} />;
}
