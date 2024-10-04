import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import NetworkAnomaly from "./components/NetworkAnomaly";
import SecurityAlert from "./components/SecurityAlert";
import Settings from "./components/Settings";
import Layout from "./Ui/Layout";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/network-anomalies" element={<NetworkAnomaly />} />
            <Route path="/alerts" element={<SecurityAlert />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
