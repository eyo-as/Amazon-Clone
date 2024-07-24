import React, { useContext, useEffect, useState } from "react";
import classes from "./order.module.css";
import Layout from "../../components/layout/Layout";
import { db } from "../../utils/firebase";
import { DataContext } from "../../components/dataProvider/DataProvider";
import {
  collection,
  doc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import ProductCard from "../../components/products/ProductCard";

const Order = () => {
  const [{ user }, dispatch] = useContext(DataContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      try {
        const ordersCollectionRef = collection(db, "users", user.uid, "orders");

        const ordersQuery = query(
          ordersCollectionRef,
          orderBy("created", "desc")
        );

        const snapshotListener = onSnapshot(ordersQuery, (snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
              };
            })
          );
        });

        return () => snapshotListener();
      } catch (error) {
        console.log(error);
      }

      // db.collection("users")
      //   .doc(user.uid)
      //   .collection("orders")
      //   .orderBy("created", "desc")
      //   .onSnapshot((snapshot) => {
      //     console.log(snapshot);
      //   })
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>

          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>you don't have any orders yet</div>
          )}

          {/* orderd items */}
          <div>
            {orders?.map((eachOrder, i) => {
              console.log(eachOrder);
              return (
                <div key={i}>
                  <hr />
                  <p>Order Id: {eachOrder?.id}</p>

                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
