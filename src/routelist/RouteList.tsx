import React from "react";
import { Route, Routes } from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));

const AccessDenied = React.lazy(() => import("../pages/System/AccessDenied"));
const PageNotFound = React.lazy(() => import("../pages/System/PageNotFound"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));

export const RouteList = () => {
  const isAuth = true;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/access-denied"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <AccessDenied />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
