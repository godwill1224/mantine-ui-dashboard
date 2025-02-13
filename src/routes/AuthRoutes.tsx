import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import AuthenticationForm from "../pages/auth/Authentication";
import ForgotPassword from "../pages/auth/ForgotPassword";

const AuthRoutes: React.FC = () => {
  const routes = [
    { path: "/", element: <AuthenticationForm /> },
    { path: "/forgot-password", element: <ForgotPassword /> },

    // Catch-all Route for 404 Not Found
    { path: "*", element: <NotFound /> },
  ];

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AuthRoutes;
