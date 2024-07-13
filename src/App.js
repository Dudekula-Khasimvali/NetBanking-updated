import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ViewPlans from './Component/services/ViewPlans';
import Home from './Component/Home';
import Payments from './Component/Payments';
import History from './Component/History';
import ContactUs from './Component/ContactUs';
import About from './Component/About';
import Account from './Component/Account';
import LoginForm from './Component/LoginForm';
import UpiIdEntry from './Component/UpiIdEntry';
import Settings from './Component/Settings';
import ToSelfAccount from './Component/ToSelfAccount';
import MoneyTransfer from './Component/MoneyTransfers';
import Cylinder from './Component/services/Cylinder';
import Electricity from './Component/services/Electricity';
import Water from './Component/services/Water';
import DthRecharge from './Component/services/DTH/DthRecharge';
import SocialMedia from './Component/SocialMedia';
import ExploreProducts from './Component/ExploreProducts';
import Notifications from './Component/Notifications';
import Cards from './Component/Cards';
import RegisterForm from './Component/RegisterForm';
import './App.css';
import ForgotPassword from './Component/Forgotpsw';
import Entrypage from './Component/Entrypage';
import MobileRecharge from './Component/MobileReacharge';
import FastagForm from './Component/FastagForm';
import CreditCardDetails from './Component/Credit';


const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ color: 'white' }}>
        <a className="navbar-brand" href="/">
          <img
            src="./E-BANKING.jpg"
            alt="Logo"
            style={{ height: '60px', borderRadius: '50%' }}
          />
        </a>
        <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/home" style={{ color: 'white' }}>Home</Link>
        </li>
        <div className="drops" style={{marginTop:'-2px'}}>
                        <Link to="/login" className="btn">Login</Link>
                        <div className="contents" style={{backgroundColor:"white"}} >
                        <Link to="/rigister" style={{ color: 'black' }}>New User</Link>
                            <Link to="/account"  style={{ color: 'black' }}>Savings</Link>
                            <Link to="/Deposit" style={{ color: 'black' }}>Current</Link>
                        </div>
                        </div>
        <li className="nav-item">
            <Link className="nav-link" to="/about" style={{ color: 'white' }}>About</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/contactus" style={{ color: 'white' }}>Contact Us</Link>
        </li>
        
    </ul>
</div>

        <div className="welcome-text">
          <h1>e - Banking</h1>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Entrypage />} /> {/* This should be the default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/rigister" element={<RegisterForm />} />
        <Route path="/moneytransfer" element={<MoneyTransfer />} />
        <Route path="/upiid" element={<UpiIdEntry />} />
        <Route path="/toselfaccount" element={<ToSelfAccount />} />
        <Route path="/cylinder" element={<Cylinder />} />
        <Route path="/electricity" element={<Electricity />} />
        <Route path="/mobilerecharge" element={<MobileRecharge selectedPlan={selectedPlan} />} />
        <Route path="/water" element={<Water />} />
        <Route path="/viewplans" element={<ViewPlans setSelectedPlan={setSelectedPlan} />} />
        <Route path="/DthRecharge" element={<DthRecharge />} />
        <Route path="/SocialMedia" element={<SocialMedia />} />
        <Route path="/ExploreProducts" element={<ExploreProducts/>} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Cards" element={<Cards/>} />
        <Route path="/forgotpsw" element={<ForgotPassword/>} />
        <Route path="/entry" element={<Entrypage/>} />
        <Route path="/reacharge" element={<MobileRecharge/>} />
        <Route path="/fastag" element={<FastagForm/>} />
        <Route path="/credit" element={<CreditCardDetails/>} />
        <Route path="/CreatePersonalAccount" element={<RegisterForm/>} />
        <Route path="/CreateBusinessAccount" element={<RegisterForm/>} />

      </Routes>
    </div>
  );
};

export default App;
