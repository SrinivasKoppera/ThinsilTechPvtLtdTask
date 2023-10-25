import { Navigate } from "react-router-dom";

const PublicRouter = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  if (isLogin()) {
    return <Navigate to="/login" />;
  } else {
    return <Component {...rest} />;
  }
};

export default PublicRouter;
