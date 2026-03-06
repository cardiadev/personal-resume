"use client";

import TokyoState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import Layout from "@/src/layout/Layout";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TokyoState>
      <PreLoader />
      <Layout>{children}</Layout>
    </TokyoState>
  );
}
