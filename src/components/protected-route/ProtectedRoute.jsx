import React, { useContext, useEffect } from "react";
import { DataContext } from "../dataProvider/DataProvider";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children, msg, redirect }) => {
  const [{ user }, dispatch] = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);
  return <div>{children}</div>;
};

export default ProtectedRoute;
