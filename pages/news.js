import Layout from "@/src/layout/Layout";
import Blog from "@/src/components/News";
import Head from "next/head";

const NewsPage = () => {
  return (
    <>
      <Head>
        <title>Blog - Carlos Diaz</title>
      </Head>
      <Layout>
        <Blog />
      </Layout>
    </>
  );
};

export default NewsPage;