import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";

const Module: React.FC = () => {
  return (
    // create routes
    <BrowserRouter>
      <Routes>
        {/* load login component when route is login */}
        <Route path={`/`} element={<Login />} />
        {/* load dashboard component when route is dashboard */}
        <Route path={`/dashboard`} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Module;