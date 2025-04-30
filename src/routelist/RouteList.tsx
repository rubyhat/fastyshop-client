import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RequirePermission } from "../shared/permissions/guards/RequirePermission/RequirePermission";

const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));

const Profile = React.lazy(() => import("../pages/Profile"));
const ProfileDetails = React.lazy(() => import("../pages/ProfileDetails"));

const ShopDetails = React.lazy(() => import("../pages/ShopDetails"));

const Orders = React.lazy(() => import("../pages/Orders"));

const AccessDenied = React.lazy(() => import("../pages/System/AccessDenied"));
const PageNotFound = React.lazy(() => import("../pages/System/PageNotFound"));

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop/:id" element={<ShopDetails />} />

      <Route path="/orders" element={<Orders />} />

      <Route
        path="/profile"
        element={
          <RequirePermission
            permission="viewProfile"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <Profile />
          </RequirePermission>
        }
      />
      <Route
        path="/profile/details"
        element={
          <RequirePermission
            permission="viewProfileDetails"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <ProfileDetails />
          </RequirePermission>
        }
      />

      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
