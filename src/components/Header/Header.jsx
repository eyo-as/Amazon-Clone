import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import logo from "../../assets/images/amazon_PNG11.png";
import flag from "../../assets/images//Flag_of_the_United_States.png";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section className={classes.header_container}>
        {/* logo */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img src={logo} className={classes.logo_img} alt="amazon logo" />
          </Link>
          <div className={classes.delivery}>
            <div>
              <p>Delivered to</p>
              <span>
                <SlLocationPin />
                Ethiopia
              </span>
            </div>
          </div>
        </div>

        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="" placeholder="search product" />
          <BsSearch />
        </div>

        {/* right-side */}
        <div className={classes.order_container}>
          {/* img and language */}

          <Link to="#" className={classes.language}>
            {/* <img src={flag} alt="" /> */}
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          {/* three component */}
          <>
            {/* sign in */}
            <Link to="/signIn" className={classes.language_signIn}>
              <>
                <p>Hello, sign in</p>
                <span>Account & Lists</span>
              </>
            </Link>

            {/* orders */}
            <Link to="/order">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart className={classes.cart_svg} />
              <span>0</span>
            </Link>
          </>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
