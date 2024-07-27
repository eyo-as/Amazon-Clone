import React from "react";
import classes from "./recommendation.module.css";
import { useNavigate } from "react-router-dom";

const Recommendation = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    navigate("/auth");
  };
  return (
    <section className={classes.recommendation_container}>
      <hr />

      <div className={classes.container}>
        <p>See personalized recommendations</p>
        <button onClick={handleChange}>Sign in</button>
        <br />
        <span>
          New customer?
          <a href="#">Start here.</a>
        </span>
      </div>
      <hr />
    </section>
  );
};

export default Recommendation;
