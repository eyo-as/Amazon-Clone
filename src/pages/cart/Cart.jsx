import React, { useContext } from "react";

import classes from "./cart.module.css";
import Layout from "../../components/layout/Layout";
import { DataContext } from "../../components/dataProvider/DataProvider";
import ProductCard from "../../components/products/ProductCard";
import CurrencyFormat from "../../components/currency-format/CurrencyFormat";
import { Link } from "react-router-dom";

const Cart = () => {
  let [{ basket, user }, dispatch] = useContext(DataContext);
  let total = basket.reduce((amount, item) => {
    item.price + amount;
  }, 0);
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.card_container}>
          <h2>Hello</h2>
          <h3>Your shoping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Oops ! No item in your Cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subTotal}>
            <div>
              <p>SubTotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order is contains a gift</small>

              <Link to="/payment">continue to check out</Link>
            </span>
          </div>
        )}
      </section>
      ;
    </Layout>
  );
};

export default Cart;
