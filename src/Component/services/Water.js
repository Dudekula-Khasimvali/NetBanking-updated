import React, { useState } from 'react';
import './Water.css';

const Water = () => {
    const [waterBoard, setWaterBoard] = useState('');
    const [rrNumber, setRrNumber] = useState('');
    const [remindMe, setRemindMe] = useState(false);
    const [billMessage, setBillMessage] = useState('');

    const handleFetchBill = () => {
        if (waterBoard && rrNumber) {
            setBillMessage('Fetching bill details...');
            // Simulate an API call
            setTimeout(() => {
                setBillMessage('The payment will reflect at biller\'s end after 2-3 working days.');
            }, 1000);
        } else {
            setBillMessage('Please select a water board and enter RR Number.');
        }
    };

    return (
        <div className="card">
            <h1>Water Bill Payment</h1>
            <div className="form-group">
                <label htmlFor="waterBoard">Select water board to proceed</label>
                <select
                    id="waterBoard"
                    value={waterBoard}
                    onChange={(e) => setWaterBoard(e.target.value)}
                >
                    <option value="">--Select--</option>
                    <option value="Board1">Water Board 1</option>
                    <option value="Board2">Water Board 2</option>
                    <option value="Board3">Water Board 3</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="rrNumber">RR Number</label>
                <input
                    type="text"
                    id="rrNumber"
                    value={rrNumber}
                    onChange={(e) => setRrNumber(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="checkbox"
                    id="remindMe"
                    checked={remindMe}
                    onChange={(e) => setRemindMe(e.target.checked)}
                />
              Remind me when my bill is due
            </div>
            <button onClick={handleFetchBill}>Fetch Bill</button>
            {billMessage && <p className="message">{billMessage}</p>}
        </div>
    );
};

export default Water;
