import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequirePermission } from "../shared/permissions/guards/RequirePermission/RequirePermission";

const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));

const Profile = React.lazy(() => import("../pages/Profile"));
const ProfileDetails = React.lazy(() => import("../pages/ProfileDetails"));

const ShopDetails = React.lazy(() => import("../pages/ShopDetails"));

const Orders = React.lazy(() => import("../pages/Orders"));

const Cart = React.lazy(() => import("../pages/Cart"));

const Seller = React.lazy(() => import("../pages/Seller"));
const BecomeSeller = React.lazy(() => import("../pages/BecomeSeller"));

const AccessDenied = React.lazy(() => import("../pages/System/AccessDenied"));
const PageNotFound = React.lazy(() => import("../pages/System/PageNotFound"));

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shops/:id" element={<ShopDetails />} />

      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/seller/create" element={<BecomeSeller />} />

      <Route
        path="/profile"
        element={
          // <RequirePermission
          //   permission="viewProfile"
          //   fallback={<Navigate to="/access-denied" replace />}
          // >
          <Profile />
          // </RequirePermission>
        }
      />
      <Route
        path="/profile/details"
        element={
          <RequirePermission
            permission="viewProfileDetails"
            // fallback={<Navigate to="/access-denied" replace />}
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
