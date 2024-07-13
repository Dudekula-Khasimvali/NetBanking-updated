import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MobileRecharge.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MobileRecharge = ({ selectedPlan }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [circle, setCircle] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        if (selectedPlan) {
            setAmount(selectedPlan.price.replace('₹ ', ''));
        }
    }, [selectedPlan]);

    const handleRecharge = () => {
        if (!mobileNumber || !operator || !circle || !amount) {
            toast.error('Please fill all the fields');
            return;
        }

        toast.success('Recharge successful');
    };

    return (
        <div className="recharge-container">
            <h1>Mobile Recharge</h1>
            <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input
                    type="text"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="operator">Operator:</label>
                <select id="operator" onChange={(e) => setOperator(e.target.value)} value={operator}>
                    <option value="">Select Operator</option>
                    <option value="Airtel">Airtel</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="Jio">Jio</option>
                    <option value="BSNL">BSNL</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="circle">Circle:</label>
                <select id="circle" onChange={(e) => setCircle(e.target.value)} value={circle}>
                    <option value="">Select Circle</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount:</label>
                <div className="amount-container">
                    <input
                        type="text"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <Link to="/viewplans" className="view-plans-link">
                        View Plans
                    </Link>
                </div>
            </div>
            <div className="form-group">
                <button onClick={handleRecharge}>Recharge</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MobileRecharge;
