import React, { useState, useContext } from "react";
import { DataContext } from "../../components/dataProvider/DataProvider";
import classes from "./signIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Type } from "../../utils/action.type";
import { ClipLoader } from "react-spinners";

const Auth = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  let navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [isloading, setIsLoading] = useState({ signin: false, signup: false });

  // console.log(user);

  let authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);

    if (e.target.name == "signin") {
      setIsLoading({ ...isloading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setIsLoading({
            ...isloading,
            signin: false,
          });
          navigate("/");
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message);
          setIsLoading({
            ...isloading,
            signup: false,
          });
        });
    } else {
      setIsLoading({
        ...isloading,
        signup: true,
      });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setIsLoading({ ...isloading, signup: false });
        })
        .catch((err) => {
          // console.log(err);
          setError(err.message);
          setIsLoading({
            ...isloading,
            signup: false,
          });
          useNavigate("/");
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign-In</h1>

        <form action="">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signIn_btn}
          >
            {isloading.signin ? <ClipLoader /> : "Sign In"}
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_register_btn}
        >
          {isloading.signup ? <ClipLoader /> : "Create your Amazon Account"}
        </button>

        {error && (
          <small style={{ padding: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
