import React, { useEffect, useState } from "react";
import classes from "./productDetail.module.css";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/products/ProductCard";
import Loader from "../../components/loader/Loader";

const ProductDetail = () => {
  let { productId } = useParams();
  // console.log(productId);
  let [product, setProduct] = useState([]);
  // console.log(product);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // console.log(`${productUrl}/products/${productId}`);

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
        isLoading(false);
      });
  }, [productId]);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
          renderTitle={false}
        />
      )}
    </Layout>
  );
};

export default ProductDetail;
