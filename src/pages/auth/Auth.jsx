import React from "react";
import classes from "./signIn.module.css";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <section className={classes.login}>
      <Link>
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign-In</h1>

        <form action="">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login_signIn_btn}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className={classes.login_register_btn}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
};

export default Auth;
