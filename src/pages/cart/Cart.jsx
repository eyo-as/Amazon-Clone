import React, { useContext } from "react";

import classes from "./cart.module.css";
import Layout from "../../components/layout/Layout";
import { DataContext } from "../../components/dataProvider/DataProvider";
import ProductCard from "../../components/products/ProductCard";
import CurrencyFormat from "../../components/currency-format/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../utils/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  let [{ basket, user }, dispatch] = useContext(DataContext);
  let total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  // console.log(basket);

  let increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  let decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shoping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Oops ! No item in your Cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product} key={i}>
                  <ProductCard
                    product={item}
                    renderDesc={true}
                    flex={true}
                    renderTitle={false}
                    renderAdd={false}
                  />

                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        <div>
          {basket?.length !== 0 && (
            <div className={classes.subTotal}>
              <div>
                <p>subTotal ({basket?.length} items)</p>

                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order is contains a gift</small>
              </span>
              <Link to="/payment">continue to check out</Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
