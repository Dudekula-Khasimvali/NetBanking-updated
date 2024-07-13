// src/components/History.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './History.css';

const History = () => {
    const { accountNumber } = useParams();
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch(`http://localhost:1006/api/transactions/account/${accountNumber}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch transactions');
                }
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                setError('Failed to fetch transactions');
            }
        };

        fetchTransactions();
    }, [accountNumber]);

    return (
        <div className="transaction-list">
            <h2>Transactions for Account {accountNumber}</h2>
            {error && <div className="error">{error}</div>}
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <div>Transaction ID: {transaction.id}</div>
                        <div>Date & Time: {transaction.timestamp}</div>
                        <div>Transferred Amount: {transaction.amount}</div>
                        <div>Remarks: {transaction.remarks}</div>
                        {/* Add more fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
