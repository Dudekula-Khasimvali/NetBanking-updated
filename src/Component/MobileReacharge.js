import React from 'react';
import './MobileRecharge.css'; // Import the common CSS file
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mobileOperators = [
  { name: 'Airtel', id: 'airtel', url: 'https://www.airtel.in/prepaid-recharge', img: 'https://assets.airtel.in/static-assets/selfcare/images/logo.png' },
  { name: 'Vodafone', id: 'vodafone', url: 'https://www.myvi.in/prepaid/online-mobile-recharge', img: 'https://www.myvi.in/content/dam/vodafoneideadigital/homespyder/Vi-logo.svg' },
  { name: 'Jio', id: 'jio', url: 'https://www.jio.com/selfcare/recharge/mobility/', img: 'https://logos-world.net/wp-content/uploads/2020/11/Jio-Logo.png' },
  { name: 'BSNL', id: 'bsnl', url: 'https://portal2.bsnl.in/myportal/quickrecharge.do', img: 'https://download.logo.wine/logo/Bharat_Sanchar_Nigam_Limited/Bharat_Sanchar_Nigam_Limited-Logo.wine.png' }
];

const MobileRecharge = () => {
  const handleSelectOperator = (operator) => {
    window.open(operator.url, '_blank'); // Open the recharge page in a new tab
  };

  return (
    <div className="recharge-container">
      <h1 style={{ textAlign: 'center' }}>Mobile Recharge</h1><br/><br/>
      <div className="operators-container">
        {mobileOperators.map((operator) => (
          <div
            key={operator.id}
            className="operator"
            onClick={() => handleSelectOperator(operator)}
          >
            <img src={operator.img} alt={operator.name} className="operator-logo" />
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MobileRecharge;
