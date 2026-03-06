import type { Metadata } from "next";
import Contact from "@/src/components/Contact";

export const metadata: Metadata = {
  title: "Contact - Carlos Diaz",
};

export default function ContactPage() {
  return <Contact />;
}
