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
  let [isLoading, setIsLoading] = useState({ signin: false, signup: false });

  let authHandler = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    // console.log(name);

    // console.log("Auth Handler:", { name, email, password });

    if (name === "signin") {
      setIsLoading({ ...isLoading, signin: true });
      try {
        const userInfo = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Sign-in Success:", userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setIsLoading({ ...isLoading, signin: false });
        navigate("/");
      } catch (err) {
        console.error("Sign-in Error:", err);
        setError(err.message);
        setIsLoading({ ...isLoading, signin: false });
      }
    } else if (name === "signup") {
      setIsLoading({ ...isLoading, signup: true });
      try {
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("Sign-up Success:", userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setIsLoading({ ...isLoading, signup: false });
        navigate("/");
      } catch (err) {
        console.error("Sign-up Error:", err);
        setError(err.message);
        setIsLoading({ ...isLoading, signup: false });
      }
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign-In</h1>

        <form>
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
            {isLoading.signin ? <ClipLoader /> : "Sign In"}
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
          {isLoading.signup ? <ClipLoader /> : "Create your Amazon Account"}
        </button>

        {error && (
          <small style={{ padding: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
