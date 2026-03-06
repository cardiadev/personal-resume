import Layout from "@/src/layout/Layout";
import About from "@/src/components/About";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About - Carlos Diaz</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default AboutPage;