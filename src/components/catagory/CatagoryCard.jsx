import React from "react";
import classes from "./catagory.module.css";

const CatagoryCard = ({ data }) => {
  return (
    <div className={classes.catagory}>
      <a href="" className={classes.catagory_for_mb}>
        <span className={classes.catagory_title}>
          <h2>{data.category}</h2>
          <span className={classes.catagory_title_container}>
            <img src={data.image} alt={data.title} />
            <span className={classes.catagory_text}>shop now</span>
          </span>
        </span>
      </a>
    </div>
  );
};

export default CatagoryCard;
