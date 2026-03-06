import type { Metadata } from "next";
import About from "@/src/components/About";

export const metadata: Metadata = {
  title: "About - Carlos Diaz",
};

export default function AboutPage() {
  return <About />;
}
