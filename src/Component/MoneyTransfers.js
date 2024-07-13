import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MoneyTransfer.css';

const MoneyTransfer = () => {
    const [balance, setBalance] = useState(null);
    const [amount, setAmount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [remarks, setRemarks] = useState('');
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [error, setError] = useState('');

    const accountNumber = '123456'; // Replace with actual account number

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await fetch(`http://localhost:1006/api/transactions`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBalance(data.balance);
            } catch (error) {
                setError('Failed to fetch balance');
                toast.error('Failed to fetch balance');
            }
        };

        fetchBalance();
    }, [accountNumber]);

    const handleTransferSubmit = async (e) => {
        e.preventDefault();

        const transactionData = {
            fromAccount: accountNumber,
            toAccount,
            amount,
            remarks,
        };

        try {
            const response = await fetch('http://localhost:1006/api/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transactionData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPaymentDetails(data);
            toast.success('Payment Successful');
        } catch (error) {
            setError('Failed to perform the transfer');
            toast.error('Failed to perform the transfer');
        }
    };

    return (
        <div className="money-transfer-container">
            <h1>Money Transfer</h1>
            {error && <div className="error">{error}</div>}
            <div className="balance-info">
                <h2>Current Balance: {balance !== null ? `$${balance}` : 'Loading...'}</h2>
            </div>
            <form onSubmit={handleTransferSubmit} className="transfer-form">
                <div className="form-group">
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>To Account:</label>
                    <input
                        type="text"
                        value={toAccount}
                        onChange={(e) => setToAccount(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Transaction Note:</label>
                    <input
                        type="text"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Transfer</button>
            </form>
            {paymentDetails && (
                <div className="payment-details">
                    <h2>Payment Successful!</h2>
                    <p>Transaction ID: {paymentDetails.id}</p>
                    <p>Amount: ${paymentDetails.amount}</p>
                    <p>To Account: {paymentDetails.toAccount}</p>
                    <p>Remarks: {paymentDetails.remarks}</p>
                    <p>Balance after Transfer: ${paymentDetails.balanceAfterTransfer}</p>
                </div>
            )}
        </div>
    );
};

export default MoneyTransfer;
