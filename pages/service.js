import Layout from "@/src/layout/Layout";
import Services from "@/src/components/Service";
import Head from "next/head";

const ServicePage = () => {
  return (
    <>
      <Head>
        <title>Services - Carlos Diaz</title>
      </Head>
      <Layout>
        <Services />
      </Layout>
    </>
  );
};

export default ServicePage;