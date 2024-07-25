import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currency-format/CurrencyFormat";
import classes from "./product.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { DataContext } from "../dataProvider/DataProvider";
import { Type } from "../../utils/action.type";

const ProductCard = ({ product, flex, renderDesc, renderAdd, renderTitle }) => {
  let { image, title, id, rating, price, description } = product;

  let [state, dispatch] = useContext(DataContext);
  // console.log(state);

  let addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3 className={classes.card_container_title}>
          {renderTitle ? (
            <span>{truncate(product?.title, 40)}</span>
          ) : (
            <span>{title}</span>
          )}
          {/* {title} */}
        </h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div className={classes.price}>
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
