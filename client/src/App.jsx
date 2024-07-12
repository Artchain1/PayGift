import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import AccountConfirmation from "./components/Auth/AccountConfirmation/AccountConfirmation";
import LinkExpired from "./components/Auth/LinkExpired/LinkExpired";
import ActivatePage from "./components/Auth/ActivateAccount/ActivatePage";
import Dashboard from "./pages/DashboardPage";
import WalletPage from "./pages/WalletPage";
import CreateGiftcard from "./pages/CreateGiftcard";
import RedeemGiftcard from "./pages/RedeemGiftcardPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/create" element={<CreateGiftcard />} />
        <Route path="/redeem" element={<RedeemGiftcard />} />
        <Route path="/settings" element={<SettingsPage />} />
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
