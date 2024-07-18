import React from "react";
import Carsoule from "../../components/Carsoule/Carsoule";
import Catagory from "../../components/catagory/Catagory";
import Product from "../../components/products/Product";
import Layout from "../../components/layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <Carsoule />
      <Catagory />
      <Product />
    </Layout>
  );
};

export default Landing;
