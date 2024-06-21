import React from "react";
import { useLocation } from "react-router-dom";
import Welcomepage from "./components/welcomepage/Welcomepage";
import Navbar from "./components/partial/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Dashnav from "./components/partial/Dashnav";

function App() {
  const location = useLocation();

  // Check if the current path is '/dashboard'
  const isDashboardPage = location.pathname === "/dashboard";
  return (
    <div>
      <Welcomepage />
      {/* <Dashnav /> */}
    </div>
  );
}

export default App;
