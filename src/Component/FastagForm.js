// src/FastagForm.js
import React, { useState } from 'react';
import './FastagForm.css';

const FastagForm = () => {
    const [vehicleRegNumber, setVehicleRegNumber] = useState('');
    const [idType, setIdType] = useState('');
    const [pan, setPan] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ vehicleRegNumber, idType, pan, mobileNumber });
    };

    return (
        <div className="fastag-form-container">
            <h2>E-Banking FASTag</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Vehicle Registration Number *
                    <input
                        type="text"
                        value={vehicleRegNumber}
                        onChange={(e) => setVehicleRegNumber(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Select ID type *
                    <select
                        value={idType}
                        onChange={(e) => setIdType(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select ID type</option>
                        <option value="Aadhar">Aadhar</option>
                        <option value="Driving License">Driving License</option>
                        <option value="Passport">Passport</option>
                    </select>
                </label>
                <label>
                    PAN *
                    <input
                        type="text"
                        value={pan}
                        onChange={(e) => setPan(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Mobile Number *
                    <input
                        type="text"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Continue</button>
            </form>
            <div className="note">
                <p><strong>NOTE:</strong></p>
                <p>
                    <i className="fas fa-car car-icon"></i>
                    This tag application is only for passenger car vehicles.
                </p>
                <p>
                    <i className="fas fa-exclamation-circle exclamation-icon"></i>
                    Purchase of FASTag for commercial vehicles is not supported at the moment.
                </p>
                <p>
                    <i className="fas fa-exclamation-circle exclamation-icon"></i>
                    The tag issued needs to be affixed only on the vehicle it's being applied for.
                </p>
                <p>
                    <i className="fas fa-exclamation-circle exclamation-icon"></i>
                    If you already have a FASTag, ensure to replace your existing FASTag with the new one upon successful application and delivery.
                </p>
            </div>
        </div>
    );
};

export default FastagForm;
