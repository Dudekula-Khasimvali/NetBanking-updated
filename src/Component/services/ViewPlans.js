import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewPlans.css';

const plans = [
    { validity: '1 day', price: '₹ 19', details: 'Data: 1GB | Validity: 1 day' },
    { validity: '30 days', price: '₹ 181', details: 'Data: 1GB/day | Validity: 30 days | Details: Benefit is over & above existing UL pack benefit' },
    { validity: 'Same as your existing Pack', price: '₹ 65', details: 'Data: 4GB | Validity: Till your existing pack' },
    { validity: '28 days', price: '₹ 239', details: 'Calls: Unlimited | Data: 1.5GB/day | SMS: 100/day | Validity: 28 days; Unlimited 5G Data; Free Hellotunes; Enjoy Wynk Music' },
    { validity: '30 days', price: '₹ 199', details: 'Calls: Unlimited | Data: 3GB | SMS: 300 | Validity: 30 days; Free Hellotunes; Enjoy Wynk Music' },
    { validity: '28 days', price: '₹ 179', details: 'Calls: Unlimited | Data: 2GB | SMS: 300 | Validity: 28 days; Free Hellotunes; Enjoy Wynk Music' },
    { validity: '84 days', price: '₹ 455', details: 'Calls: Unlimited | Data: 6GB | SMS: 900 | Validity: 84 days; Apollo 24|7 Circle; Free Hellotunes; Enjoy Wynk Music' },
    { validity: '84 days', price: '₹ 666', details: 'Calls: Unlimited | Data: 1.5GB/day | SMS: 100/day | Validity: 84 days; Unlimited 5G Data; Apollo 24|7 Circle; Free Hellotunes; Enjoy Wynk Music' },
    { validity: '28 days', price: '₹ 299', details: 'Calls: Unlimited | Data: 2GB/day | SMS: 100/day | Validity: 28 days; Unlimited 5G Data; Apollo 24|7 Circle; Free Hellotunes; Enjoy Wynk Music' }
];

const ViewPlans = ({ setSelectedPlan }) => {
    const navigate = useNavigate();

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
        navigate('/mobilerecharge'); // Navigate to the mobile recharge page after selecting a plan
    };

    return (
        <div className="viewplans-container">
            <h2>Choose a Plan</h2>
            <div className="plans-container">
                {plans.map((plan, index) => (
                    <div key={index} className="plan" onClick={() => handleSelectPlan(plan)}>
                        <p><strong>Validity:</strong> {plan.validity}</p>
                        <p><strong>Price:</strong> {plan.price}</p>
                        <p>{plan.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewPlans;
