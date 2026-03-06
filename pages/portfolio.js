import Layout from "@/src/layout/Layout";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicPortfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Carlos Diaz</title>
      </Head>
      <Layout>
        <div className="tokyo_tm_portfolio_titles" />
        <DynamicPortfolio />
      </Layout>
    </>
  );
};

export default PortfolioPage;