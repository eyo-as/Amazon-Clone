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

    console.log(`${productUrl}/products/${productId}`);

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data.id);
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        isLoading(false);
      });
  }, []);
  return (
    <Layout>
      <div>
        {/* <div>
          {isLoading ? (
            <Loader />
          ) : Array.isArray(product) && product.length > 0 ? (
            product?.map((item, i) => (
              <ProductCard product={item} key={i} renderAdd={true} />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div> */}
        {/* ************* */}
        {/* {Array.isArray(product) && product.length > 0 ? (
          product?.map((item, i) => {
            return <ProductCard product={item} key={i} renderAdd={true} />;
          })
        ) : (
          <p>No result Found</p>
        )} */}
        {isLoading ? (
          <Loader />
        ) : (
          <ProductCard product={product} renderAdd={true} />
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
