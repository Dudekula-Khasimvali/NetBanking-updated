import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserEntry.css'; // Import the CSS for styling

const UpiIdEntry = () => {
    const [upiId, setUpiId] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!upiId.includes('@')) {
            toast.error('Please enter a valid UPI ID.');
        } else {
            // Handle UPI ID submission logic
            console.log('Verified successfully:', upiId);
            toast.success('Verified successfully!');
            setError('');
            navigate('/MoneyTransfer');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Enter UPI ID</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter UPI ID"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-block">Verify</button>
                    {error && <div className="error">{error}</div>}
                </form>
                <div className="already-member">
                    <a href="/payments">Back to Payments</a>
                </div>
            </div>
        </div>
    );
};

export default UpiIdEntry;
