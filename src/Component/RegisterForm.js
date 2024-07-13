// src/Component/RegisterForm.js
import React from 'react';
import './RegisterForm.css'; // Importing CSS for styling

const RegisterForm = () => {
    return (
        <div className="register-form-container">
            <h2>Register</h2>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="panNumber">PAN Number:</label>
                    <input type="text" id="panNumber" name="panNumber" required />
                </div>
                <div className="form-group">
                    <label htmlFor="aadharNumber">Aadhar Number:</label>
                    <input type="text" id="aadharNumber" name="aadharNumber" required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input type="tel" id="mobile" name="mobile" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit" >Register</button>
            </form>
            <div className="login-link">
                Already have an account? <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default RegisterForm;
