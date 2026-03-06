import Layout from "@/src/layout/Layout";
import Contact from "@/src/components/Contact";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Carlos Diaz</title>
      </Head>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
};

export default ContactPage;