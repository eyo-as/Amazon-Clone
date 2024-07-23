import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import Layout from "../../components/layout/Layout";
import { DataContext } from "../../components/dataProvider/DataProvider";
import ProductCard from "../../components/products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../components/currency-format/CurrencyFormat";

const Payment = () => {
  const [{ user, basket }] = useContext(DataContext);

  const stripe = useStripe();
  const elements = useElements();

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const totalPrice = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);

  const handleChange = (e) => {
    e.error?.message ? setCardError(e.error?.message) : setCardError("");
  };

  return (
    <Layout>
      {/* header */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>

      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>

          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, li</div>
          </div>
        </div>

        <hr />

        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>

          <div>
            {basket?.map((item) => {
              return <ProductCard product={item} key={item.id} flex={true} />;
            })}
          </div>
        </div>

        <hr />

        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>

          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}

                {/* card element*/}
                <CardElement onChange={handleChange} />

                {/* peice */}

                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p>
                      <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>

                  <button type="submit">Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
