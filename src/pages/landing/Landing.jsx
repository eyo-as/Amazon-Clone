import React from "react";
import Carsoule from "../../components/Carsoule/Carsoule";
import Catagory from "../../components/catagory/Catagory";
import Product from "../../components/products/Product";
import Layout from "../../components/layout/Layout";
import Recommendation from "../../components/recommendation/Recommendation";
import Footer from "../../components/footer/Footer";

const Landing = () => {
  return (
    <Layout>
      <Carsoule />
      <Catagory />
      <Product />
      <Recommendation />
      <Footer />
    </Layout>
  );
};

export default Landing;
