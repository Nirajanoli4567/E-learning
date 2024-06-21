import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import Feature from "../pages/Feature";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Navbar from "../partial/Navbar";

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
      path: "/*",
      element: <div> 404 Page not found</div>,
    },
  ];
  return (
    <div>
      <Navbar />
      <Routes>
        {Welcomroutes.map((v, key) => (
          <Route path={v.path} element={v.element} key={key} />
        ))}
      </Routes>
    </div>
  );
}

export default Welcomepage;
