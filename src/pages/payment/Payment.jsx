import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import Layout from "../../components/layout/Layout";
import { DataContext } from "../../components/dataProvider/DataProvider";
import ProductCard from "../../components/products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../components/currency-format/CurrencyFormat";
import { AxiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../utils/firebase";
import { useNavigate } from "react-router";
import { doc, setDoc, collection } from "firebase/firestore";
import { Type } from "../../utils/action.type";

const Payment = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const stripe = useStripe();
  const elements = useElements();

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const totalPrice = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.error?.message ? setCardError(e.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // backend function to contact to the client secret

      const response = await AxiosInstance({
        method: "POST",
        url: `/payment/create?total=${totalPrice * 100}`,
      });

      const clientSecret = response.data?.clientSecret;

      // client (react) side confirmation

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      // console.log(confirmation);

      // after the confirmation order firestore db save, clear basket

      try {
        // Create a reference to the user's orders collection
        const ordersCollectionRef = collection(db, "users", user.uid, "orders");

        // Create a reference to the specific order document
        const orderDocRef = doc(ordersCollectionRef, paymentIntent.id);

        await setDoc(orderDocRef, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        console.log("Order created successfully!");
      } catch (error) {
        console.log(error);
      }

      // empty the basket

      dispatch({ type: Type.EMPTY_BASKET });

      setIsLoading(false);

      navigate("/order", { state: { msg: "you have placed new order" } });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
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
              <form action="" onSubmit={handlePayment}>
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

                  <button type="submit">
                    {isLoading ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={10} />
                        <span>Please wait ...</span>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
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
