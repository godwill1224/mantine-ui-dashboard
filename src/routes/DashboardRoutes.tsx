import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Sample from "../pages/Sample";

const DashboardRoutes: React.FC = () => {
  const routes = [
    // Users
    { path: "/", element: <Dashboard /> },
    { path: "/sample", element: <Sample /> },

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
