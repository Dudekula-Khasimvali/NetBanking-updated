import React, { useState } from 'react';
import './DthRecharge.css'; // Import the CSS file for styling

const dthProviders = [
  { name: 'Tata Sky', id: 'tata-sky', url: 'https://www.tataplayrecharge.com/Recharge/QuickRecharge', img:  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/tatasky_0.jpeg' },
  { name: 'Dish TV', id: 'dish-tv', url: 'https://www.dishtv.in/pages/Instant-Recharge-Payment.aspx', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Dish_TV_Logo.svg/800px-Dish_TV_Logo.svg.png' },
  { name: 'Airtel Digital TV', id: 'airtel-digital-tv', url: 'https://www.airtel.in/dth-recharge', img: 'https://th.bing.com/th/id/OIP.uCOl1_qJJVNXjZBRPRXLBQHaDg?rs=1&pid=ImgDetMain' },
  { name: 'Videocon D2H', id: 'videocon-d2h', url: 'https://www.d2h.com/quick-recharge', img: 'https://vignette.wikia.nocookie.net/logopedia/images/2/2c/Videocon_d2h.jpeg/revision/latest/scale-to-width-down/185?cb=20190808101037' },
  { name: 'Sun Direct', id: 'sun-direct', url: 'https://www.sundirect.in/Recharge', img: 'https://dreamdth.com/wp-content/uploads/2019/09/Sun-Direct.jpg' }
];

const DthRecharge = ({ setSelectedPlan }) => {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [amount, setAmount] = useState('');

  const handleSelectProvider = (provider) => {
    setSelectedProvider(provider);
    if (provider.url) {
      window.location.href = provider.url; // Redirect to the provider's recharge page
    }
  };

  const handleRecharge = () => {
    if (selectedProvider && amount) {
      // Implement recharge logic here
      alert(`Recharged ${selectedProvider.name} with ₹${amount}`);
      setSelectedPlan(null); // Reset the selected plan after recharge
    } else {
      alert('Please select a provider and enter an amount');
    }
  };

  return (
    <div className="dth-recharge-container">
      <h2>DTH Recharge</h2>
      <div className="providers-container">
        {dthProviders.map((provider) => (
          <div
            key={provider.id}
            className={`provider ${selectedProvider.id === provider.id ? 'selected' : ''}`}
            onClick={() => handleSelectProvider(provider)}
          >
            <img src={provider.img} alt={provider.name} className="provider-logo" />
          </div>
        ))}
      </div>
      <div className="recharge-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter recharge amount"
        />
        <button onClick={handleRecharge}>Recharge</button>
      </div>
    </div>
  );
};

export default DthRecharge;
