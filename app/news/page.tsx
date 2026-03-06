import type { Metadata } from "next";
import Blog from "@/src/components/News";

export const metadata: Metadata = {
  title: "Blog - Carlos Diaz",
};

export default function NewsPage() {
  return <Blog />;
}
