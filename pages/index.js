import Layout from "@/src/layout/Layout";
import About from "components/About";
import Contact from "components/Contact";
import Home from "components/Home";
import Blog from "@/src/components/News";
import Services from "components/Service";
import dynamic from "next/dynamic";
const Portfolio = dynamic(() => import("components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* SERVICE */}
      <Services />
      {/* /SERVICE */}
      <div className="tokyo_tm_portfolio_titles" />
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <Blog />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </Layout>
  );
};
export default Index;
