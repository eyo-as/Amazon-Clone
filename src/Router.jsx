import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Auth from "./pages/auth/Auth";
import Payment from "./pages/payment/Payment";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Results from "./pages/results/Results";
import ProductDetail from "./pages/productDetail/productDetail";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
