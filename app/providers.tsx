"use client";

import CardiaDevState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import Layout from "@/src/layout/Layout";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CardiaDevState>
      <PreLoader />
      <Layout>{children}</Layout>
    </CardiaDevState>
  );
}
