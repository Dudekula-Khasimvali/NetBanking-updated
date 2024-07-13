import React, { useState, useEffect } from 'react';
import './Electricity.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const states = {
    Maharashtra: ['MSEDCL', 'Tata Power', 'Adani Electricity'],
    TamilNadu: ['TANGEDCO'],
    Karnataka: ['BESCOM', 'MESCOM', 'GESCOM'],
    Delhi: ['BSES Rajdhani', 'BSES Yamuna', 'Tata Power-DDL'],
    Gujarat: ['PGVCL', 'UGVCL', 'MGVCL', 'DGVCL'],
    AndhraPradesh: ['APSPDCL', 'APEPDCL'],
    Telangana: ['TSSPDCL', 'TSNPDCL'],
    Rajasthan: ['JVVNL', 'AVVNL', 'JdVVNL'],
    UttarPradesh: ['DVVNL', 'MVVNL', 'PVVNL', 'PUVVNL'],
    WestBengal: ['WBSEDCL', 'CESC'],
    Kerala: ['KSEB'],
};

const Electricity = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedBoard, setSelectedBoard] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [remind, setRemind] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (selectedState) {
            setSelectedBoard(states[selectedState][0]);
        }
    }, [selectedState]);

    const handleFetchBill = () => {
        if (!selectedState || !selectedBoard || !customerId) {
            toast.error('Please fill all the fields');
            return;
        }

        // Mock fetching data based on customer ID, selected state and board
        setData({
            state: selectedState,
            board: selectedBoard,
            customerId,
            usage: Math.floor(Math.random() * 1000),
            bill: Math.floor(Math.random() * 2000),
            dueDate: '2024-07-15'
        });
        toast.success('Bill fetched successfully');
    };

    return (
        <div className="electricity-container">
            <h1>Electricity Services</h1>
            <div className="form-group">
                <label htmlFor="state">Select State:</label>
                <select id="state" onChange={(e) => setSelectedState(e.target.value)} value={selectedState}>
                    <option value="">Select State</option>
                    {Object.keys(states).map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>
            {selectedState && (
                <div className="form-group">
                    <label htmlFor="board">Select Electricity Board:</label>
                    <select id="board" onChange={(e) => setSelectedBoard(e.target.value)} value={selectedBoard}>
                        {states[selectedState].map(board => (
                            <option key={board} value={board}>{board}</option>
                        ))}
                    </select>
                </div>
            )}
            {selectedBoard && (
                <>
                    <div className="form-group">
                        <label htmlFor="customerId">Customer ID:</label>
                        <input
                            type="text"
                            id="customerId"
                            value={customerId}
                            onChange={(e) => setCustomerId(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="remind">
                            <input
                                type="checkbox"
                                id="remind"
                                checked={remind}
                                onChange={(e) => setRemind(e.target.checked)}
                            />
                            Remind me when my bill is due
                        </label>
                    </div>
                    <div className="form-group">
                        <button onClick={handleFetchBill}>Fetch Bill</button>
                    </div>
                </>
            )}
            {data && (
                <div className="data-container">
                    <h2>{data.state} - {data.board}</h2>
                    <p>Customer ID: {data.customerId}</p>
                    <p>Usage: {data.usage} kWh</p>
                    <p>Bill: ₹{data.bill}</p>
                    <p>Due Date: {data.dueDate}</p>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Electricity;
