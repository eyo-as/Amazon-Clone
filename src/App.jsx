import React from "react";
import Header from "./components/Header/Header";
import Carsoule from "./components/Carsoule/Carsoule";
import Catagory from "./components/catagory/Catagory";
import Product from "./components/products/Product";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Carsoule />
      <Catagory />
      <Product />
    </>
  );
};

export default App;
