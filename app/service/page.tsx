import type { Metadata } from "next";
import Services from "@/src/components/Service";

export const metadata: Metadata = {
  title: "Services - Carlos Diaz",
};

export default function ServicePage() {
  return <Services />;
}
