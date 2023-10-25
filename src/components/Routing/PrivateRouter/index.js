import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  if (isLogin()) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRouter;
