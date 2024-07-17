import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currency-format/CurrencyFormat";
import classes from "./product.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ data }) => {
  let { image, title, id, rating, price } = data;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className={`${classes.card_container}`}>
      <div>
        <a href="">
          <img src={image} alt="" />
        </a>
        <div>
          <h3 className={classes.card_container_title}>
            {truncate(data?.title, 40)}
          </h3>
          {/* <h3>{title}</h3> */}
          <div className={classes.rating}>
            <Rating value={rating.rate} precision={0.1} />
            <small>{rating.count}</small>
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
