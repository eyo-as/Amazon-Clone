import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "./product.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../loader/Loader";

const Product = () => {
  let [products, setProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <section className={`${classes.product_container} `}>
      {isLoading ? (
        <Loader className={classes.loader} />
      ) : (
        products.map((items) => {
          return (
            <ProductCard
              product={items}
              key={items.id}
              renderAdd={true}
              renderTitle={true}
            />
          );
        })
      )}
    </section>
  );
};

export default Product;
