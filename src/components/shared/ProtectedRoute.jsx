import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider/UserContextProvider";
import Loading from "../shared/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useContext(UserContext);
  const location = useLocation();

  if (userLoading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
