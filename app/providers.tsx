"use client";

import SleekState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import Layout from "@/src/layout/Layout";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SleekState>
      <PreLoader />
      <Layout>{children}</Layout>
    </SleekState>
  );
}
