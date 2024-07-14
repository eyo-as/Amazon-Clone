import React from "react";
import classes from "./carsoule.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "./img/data";

const Carsoule = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {data.map((images, i) => {
          return <img src={images} alt="carasoule images" key={i} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </>
  );
};

export default Carsoule;
