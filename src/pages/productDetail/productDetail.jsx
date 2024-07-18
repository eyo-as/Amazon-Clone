import React, { useEffect, useState } from "react";
import classes from "./productDetail.module.css";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/products/ProductCard";

const ProductDetail = () => {
  let { productId } = useParams();
  // console.log(productId);
  let [detail, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setDetails(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <div>
        {Array.isArray(detail) && detail.length > 0 ? (
          detail.map((item, i) => <ProductCard product={item} key={i} />)
        ) : (
          <p>No results found.</p>
        )}
      </div>
      ;
    </Layout>
  );
};

export default ProductDetail;
