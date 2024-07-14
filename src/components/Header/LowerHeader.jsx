import React from "react";
import classes from "./header.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const LowerHeader = () => {
  return (
    <>
      <div className={classes.lower_container}>
        <ul>
          {/* <AiOutlineMenu className={classes.LowerHeader_menu} /> */}
          <select className={classes.lower_container_opt}>
            <option>All</option>
            <option>Today's Deals</option>
            <option>Customer Servie </option>
            <option>Registery</option>
            <option>Gift Cards</option>
            <option>Sell</option>
          </select>
          <li>Today's Deals</li>
          <li>Customer Servie </li>
          <li>Registery</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
};

export default LowerHeader;
