import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserEntry.css'; // Import the CSS for styling

const ToSelfAccount = () => {
    const [selfAccountNumber, setSelfAccountNumber] = useState('');
    const [recipientAccountNumber, setRecipientAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulate validation for a valid self account number and recipient account number
        if (selfAccountNumber.trim() === '') {
            toast.error('Please enter your account number.');
        } else if (recipientAccountNumber.trim() === '') {
            toast.error('Please enter recipient account number.');
        } else if (amount.trim() === '' || isNaN(parseFloat(amount))) {
            toast.error('Please enter a valid amount.');
        } else {
            // Simulate transaction attempt (replace with actual backend call)
            const success = Math.random() < 10000; // Simulate success or failure randomly
            if (success) {
                toast.success('Payment Successful');
                setError('');
          
            } else {
                toast.error('Payment Failed');
                setError('Payment Failed');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Transfer to Another Bank Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Your Account Number:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Account Number"
                            value={selfAccountNumber}
                            onChange={(e) => setSelfAccountNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Recipient's Account Number:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Recipient's Account Number"
                            value={recipientAccountNumber}
                            onChange={(e) => setRecipientAccountNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Amount:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-block">Transfer</button>
                    {error && <div className="error">{error}</div>}
                </form>
                <div className="already-member">
                    <a href="/payments">Back to Payments</a>
                </div>
            </div>
        </div>
    );
};

export default ToSelfAccount;
