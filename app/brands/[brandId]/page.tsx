import BrandModelsClient from "@/components/BrandModelsClient";

export default function Page({
  params,
}: {
  params: { brandId: string };
}) {
  // Server components can access params directly without warnings.
  return <BrandModelsClient brandId={params.brandId} />;
}
