import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio - Carlos Diaz",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
