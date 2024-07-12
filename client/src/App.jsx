import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import AccountConfirmation from "./components/Auth/AccountConfirmation/AccountConfirmation";
import LinkExpired from "./components/Auth/LinkExpired/LinkExpired";
import ActivatePage from "./components/Auth/ActivateAccount/ActivatePage";
import Dashboard from "./pages/DashboardPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/confirm-email" element={<AccountConfirmation />} />
        <Route path="/link-expired/" element={<LinkExpired />} />
        <Route path="/verify-access/:token" element={<ActivatePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
