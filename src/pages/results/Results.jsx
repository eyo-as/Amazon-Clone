import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/products/ProductCard";

const Result = () => {
  const { categoryName } = useParams();
  console.log(categoryName);
  let [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.product_container}>
          {results?.map((items, i) => {
            return <ProductCard product={items} key={i} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Result;
