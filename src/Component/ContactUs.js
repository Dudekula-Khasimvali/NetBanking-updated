// src/Component/ContactUs.js
import React from 'react';
import './ContactUs.css'; // Importing CSS for styling

const ContactUs = () => {
    return (
        <div className="contactus-container">
            <div className="card">
                <h2>Contact Us</h2>
                <div className="contactus-section">
                    <h3>Get in Touch</h3>
                    <form className="contactus-form">
                        <label>
                            Full Name:
                            <input type="text" name="fullName" />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Phone Number:
                            <input type="tel" name="phone" />
                        </label>
                        <label>
                            Message:
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="contactus-info">
                    <h3>Contact Information</h3>
                    <p>Email: support@ebanking.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123 Bank Street, Financial City, Country</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
