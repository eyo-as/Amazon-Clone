import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Auth from "./pages/auth/Auth";
import Payment from "./pages/payment/Payment";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Results from "./pages/results/Results";
import ProductDetail from "./pages/productDetail/productDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51Pf1oNRxJEKqQR7eX1ZjaML0Zhp3miTRKJURteD9XbajxncZr17S59M9KjPMVyErm3llOAAfRmUbYqbBIQmHPNZe00B6FNixc6"
);

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoute
                msg={"you must login to pay"}
                redirect={"/payment"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />

          <Route
            path="/order"
            element={
              <ProtectedRoute
                msg={"you must login to see the order"}
                redirect={"/order"}
              >
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
