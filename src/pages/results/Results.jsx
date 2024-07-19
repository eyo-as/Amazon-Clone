import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/products/ProductCard";
import Loader from "../../components/loader/Loader";

const Result = () => {
  const { categoryName } = useParams();
  // console.log(categoryName);
  let [results, setResults] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    console.log(
      `${productUrl}/products/category/${categoryName.toLowerCase()}`
    );

    axios
      .get(`${productUrl}/products/category/${categoryName.toLowerCase()}`)
      .then((res) => {
        setResults(res?.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        isLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.product_container}>
          {isLoading ? (
            <Loader />
          ) : Array.isArray(results) && results.length > 0 ? (
            results?.map((item, i) => (
              <ProductCard product={item} key={i} renderAdd={true} />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Result;
