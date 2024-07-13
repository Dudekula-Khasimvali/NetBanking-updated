import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Payments.css'; // Import CSS for styling

const Payments = () => {
    const navigate = useNavigate(); // Get the navigate function from react-router-dom

    // Function to handle navigation to MoneyTransfer page
    const handleMoneyTransferClick = () => {
        navigate('/moneytransfer');
    };

    // Function to handle navigation to UPI ID page
    const handleUpiIdClick = () => {
        navigate('/upiid');
    };

    // Function to handle navigation to ToSelfAccount page
    const handleSelfAccountClick = () => {
        navigate('/toselfaccount');
    };

    return (
        <div className="payments-container">
            <h1 className="payments-heading">Payments</h1>

            <div className="payment-card-container">
                <div className="payment-card" onClick={handleMoneyTransferClick}>
                    <h2>
                        Money Transfers
                        <img src="https://cdn.pixabay.com/photo/2018/08/25/21/08/money-3630935_1280.png" alt="Money Transfer Icon" />
                    </h2>
                </div>

                <div className="payment-card" onClick={handleUpiIdClick}>
                    <h2>
                        To Bank/UPI ID
                        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_170312.png" alt="Bank/UPI ID Icon" />
                    </h2>
                </div>

                <div className="payment-card" onClick={handleSelfAccountClick}>
                    <h2>
                        To Self Account
                        <img src="https://cdn-icons-png.freepik.com/512/13185/13185243.png" alt="Self Transfer Icon" />
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Payments;
