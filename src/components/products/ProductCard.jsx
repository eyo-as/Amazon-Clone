import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currency-format/CurrencyFormat";
import classes from "./product.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product, flex, renderDesc }) => {
  let { image, title, id, rating, price, description } = product;
  console.log(product);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_fixed : ""
      }`}
    >
      <div>
        <Link to={`${id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h3 className={classes.card_container_title}>
            {truncate(product?.title, 40)}
          </h3>
          {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
          <div className={classes.rating}>
            <Rating value={rating?.rate} precision={0.1} />
            <small>{rating?.count}</small>
          </div>
          <div className={classes.price}>
            <CurrencyFormat amount={price} />
          </div>
          <button className={classes.button}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
