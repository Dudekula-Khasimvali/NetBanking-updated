import React, { useState } from 'react';
import './Settings.css'; // Importing CSS for styling

const Settings = () => {
    const [activeForm, setActiveForm] = useState('profile');

    const handleSectionClick = (formName) => {
        setActiveForm(formName);
    };

    return (
        <div className="settings-container">
            <div className="settings-sidebar">
                <div className="logo">
                    <img style={{ borderRadius:'80px',height:'150px'  , marginRight:'20px' }} src="./E-BANKING.jpg"  alt="e-Bank Logo" />
                </div>
                <div className="progress">
                    <span>0 / 4 Steps Completed</span>
                    <div className="progress-bar">
                        <div className="progress-fill"></div>
                    </div>
                </div>
                <div className="settings-menu">
                    <div className={`menu-item ${activeForm === 'profile' ? 'active' : ''}`} onClick={() => handleSectionClick('profile')}>
                        <span>Profile Settings</span>
                        <span className="menu-icon">&#9998;</span>
                    </div>
                    <div className={`menu-item ${activeForm === 'security' ? 'active' : ''}`} onClick={() => handleSectionClick('security')}>
                        <span>Security Settings</span>
                        <span className="menu-icon">&#128274;</span>
                    </div>
                    <div className={`menu-item ${activeForm === 'notifications' ? 'active' : ''}`} onClick={() => handleSectionClick('notifications')}>
                        <span>Notification Settings</span>
                        <span className="menu-icon">&#128276;</span>
                    </div>
                    <div className={`menu-item ${activeForm === 'bank' ? 'active' : ''}`} onClick={() => handleSectionClick('bank')}>
                        <span>Bank Preferences</span>
                        <span className="menu-icon">&#128181;</span>
                    </div>
                </div>
                <button className="submit-button">Submit</button>
            </div>
            <div className="settings-content">
                {activeForm === 'profile' && (
                    <div className="settings-card active">
                        <h3>Profile Settings</h3>
                        <form className="settings-form form-profile">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name:</label>
                                <input type="text" id="fullName" name="fullName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                            <button type="submit">Save Changes</button>
                        </form>
                    </div>
                )}
                {activeForm === 'security' && (
                    <div className="settings-card active">
                        <h3>Security Settings</h3>
                        <form className="settings-form form-security">
                            <div className="form-group">
                                <label htmlFor="currentPassword">Current Password:</label>
                                <input type="password" id="currentPassword" name="currentPassword" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword">New Password:</label>
                                <input type="password" id="newPassword" name="newPassword" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmNewPassword">Confirm New Password:</label>
                                <input type="password" id="confirmNewPassword" name="confirmNewPassword" />
                            </div>
                            <button type="submit">Update Password</button>
                        </form>
                    </div>
                )}
                {activeForm === 'notifications' && (
                    <div className="settings-card active">
                        <h3>Notification Settings</h3>
                        <form className="settings-form form-notifications">
                            <div className="form-group">
                                <label>
                                    <input type="checkbox" name="emailNotifications" />
                                    Email Notifications
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    <input type="checkbox" name="smsNotifications" />
                                    SMS Notifications
                                </label>
                            </div>
                            <button type="submit">Save Preferences</button>
                        </form>
                    </div>
                )}
                {activeForm === 'bank' && (
                    <div className="settings-card active">
                        <h3>Bank Preferences</h3>
                        <form className="settings-form form-bank">
                            <div className="form-group">
                                <label htmlFor="defaultAccount">Default Account for Transfers:</label>
                                <select id="defaultAccount" name="defaultAccount">
                                    <option value="savings">Savings Account</option>
                                    <option value="current">Current Account</option>
                                    <option value="credit">Credit Account</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="preferredLanguage">Preferred Language:</label>
                                <select id="preferredLanguage" name="preferredLanguage">
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="french">French</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="currency">Currency:</label>
                                <select id="currency" name="currency">
                                    <option value="usd">USD</option>
                                    <option value="eur">EUR</option>
                                    <option value="gbp">GBP</option>
                                </select>
                            </div>
                            <button type="submit">Save Preferences</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Settings;
