import type { Metadata } from "next";
import { Mulish, Poppins, Open_Sans, Montserrat } from "next/font/google";
import Providers from "./providers";
import "@/styles/globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Carlos Diaz - Fullstack Developer",
  description:
    "Carlos Diaz - Fullstack Developer, UX Engineer, Software Specialist",
  authors: [{ name: "Carlos Diaz" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body
        className={`${mulish.variable} ${poppins.variable} ${openSans.variable} ${montserrat.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
