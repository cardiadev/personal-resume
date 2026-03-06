"use client";

import dynamic from "next/dynamic";

const DynamicPortfolio = dynamic(
  () => import("@/src/components/Portfolio"),
  { ssr: false }
);

export default function PortfolioClient() {
  return <DynamicPortfolio />;
}
