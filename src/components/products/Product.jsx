import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "./product.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={`${classes.product_container} `}>
      {products.map((items, i) => {
        return <ProductCard product={items} key={i} />;
      })}
    </section>
  );
};

export default Product;
