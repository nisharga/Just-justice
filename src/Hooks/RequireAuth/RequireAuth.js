import React from "react";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../Firebase/Config";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
