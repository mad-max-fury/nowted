import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../react-query/auth/useUser";

const RequireAuth = ({ children }) => {
  const { user } = useUser();
  if (!user) return <Navigate to="/" replace />;
  return children;
};

export default RequireAuth;
