import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Account.css';

const Account = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const usernameParam = searchParams.get('username');
        setUsername(usernameParam || '');

        const fetchAccounts = async () => {
            try {
                const response = await fetch('http://localhost:1006/apiaccounts');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAccounts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAccounts();
    }, [location.search]);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <img
                    src="https://www.globalnetbit.com/wp-content/uploads/2023/02/error-500.jpg"
                    alt="Error"
                    className="error-image"
                />
                <div className="error-message">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="account-container">
            <h3>Accounts</h3>
            {accounts.map(account => (
                <div key={account.id} className="account-card">
                    <p>Account Number: {account.accountNumber}</p>
                    <p>Balance: {account.balance}</p>
                    <p>User: {username}</p> {/* Display username here */}
                </div>
            ))}
        </div>
    );
};

export default Account;
