import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RequireAuth;
