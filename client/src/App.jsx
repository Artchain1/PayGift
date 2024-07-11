import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Wallet from './components/Dashboard/Wallet'
import Settings from './components/Dashboard/Settings'
import CreateCard from './components/Dashboard/GiftCard/CreateCard'
import Redeem from './components/Dashboard/GiftCard/Redeem'

// import AuthPage from './pages/AuthPage'
// import GoogleAuth from './components/authentications/GoogleAuth'
// import AccountConfirmation from "./components/authentications/AccountConfirmation";
// import LinkExpired from "./components/authentications/LinkExpired";
// import ActivatePage from "./components/authentications/ActivatePage";

const App = () => {
  return (

    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/createCard' element={<CreateCard/>} />
        <Route path='/redeem' element={<Redeem/>} />
        <Route path='/setting' element={<Settings/>} />
        {/* <Route path="/auth" element={<AuthPage />} />
				<Route path="/auth/google-verify" element={<GoogleAuth />} />
				<Route path="/confirm-email" element={<AccountConfirmation />} />
				<Route path="/link-expired/" element={<LinkExpired />} />
				<Route path="/verify-access/:token" element={<ActivatePage />} /> */}
      </Routes>
    </>
  )
}

export default App