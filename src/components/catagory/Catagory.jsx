import React from "react";
import CatagoryCard from "./CatagoryCard";
import classes from "./catagory.module.css";
import { catagoryImages } from "./catagoryInfos";

const Catagory = () => {
  return (
    <>
      <section className={classes.catagory_container}>
        {catagoryImages.map((items, i) => (
          <CatagoryCard data={items} key={i} />
        ))}
      </section>
    </>
  );
};

export default Catagory;
