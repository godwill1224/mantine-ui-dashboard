import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/notFound/NotFound";
import Dashboard from "../pages/admin/Dashboard";
import Sample from "../pages/admin/Sample";
import Profile from "../pages/admin/Profile";

const DashboardRoutes: React.FC = () => {
  const routes = [
    { path: "/", element: <Dashboard /> },
    { path: "/sample", element: <Sample /> },
    { path: "/profile", element: <Profile /> },

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

export default DashboardRoutes;
