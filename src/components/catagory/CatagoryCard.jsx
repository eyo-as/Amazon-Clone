import React from "react";
import classes from "./catagory.module.css";
import { Link } from "react-router-dom";

const CatagoryCard = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.catagory}>
      <Link
        to={`/category/${data.category}`}
        className={classes.catagory_for_mb}
      >
        <span className={classes.catagory_title}>
          <h2>{data.category}</h2>
          <span className={classes.catagory_title_container}>
            <img src={data.image} alt={data.title} />
            <span className={classes.catagory_text}>shop now</span>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default CatagoryCard;
