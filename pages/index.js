import Layout from "@/src/layout/Layout";
import Home from "components/Home";
import Head from "next/head";
const Index = () => {
  return (
    <>
      <Head>
        <title>Carlos Diaz - Fullstack Developer</title>
      </Head>
      <Layout>
        {/* HOME */}
        <Home />
        {/* /HOME */}
      </Layout>
    </>
  );
};
export default Index;
