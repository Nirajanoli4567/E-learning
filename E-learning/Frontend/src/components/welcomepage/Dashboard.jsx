import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import Feature from "../pages/Feature";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";

function Welcomepage() {
  const Welcomroutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/features",
      element: <Feature />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/*",
      element: <div> 404 Page not found</div>,
    },
  ];
  return (
    <div>
      <Routes>
        {Welcomroutes.map((v, key) => (
          <Route path={v.path} element={v.element} key={key} />
        ))}
      </Routes>
    </div>
  );
}

export default Welcomepage;
