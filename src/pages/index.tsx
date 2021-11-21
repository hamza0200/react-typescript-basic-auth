import * as React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";

const Module: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/dashboard`} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Module;