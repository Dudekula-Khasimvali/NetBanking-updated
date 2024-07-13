// Notifications.js
import React, { useState, useEffect } from 'react';
import './Notifications.css';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Simulate an API call to fetch notifications
        const fetchNotifications = async () => {
            // Replace with actual API call
            const response = await fetch('/api/notifications');
            const data = await response.json();
            setNotifications(data);
        };

        fetchNotifications();
    }, []);

    return (
        <div className="notifications-container">
            <h1>Notifications</h1>
            <ul className="notifications-list">
                {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <li key={index} className="notification-item">
                            <h3>{notification.title}</h3>
                            <p>{notification.message}</p>
                            <span className="notification-time">{notification.time}</span>
                        </li>
                    ))
                ) : (
                    <p>No notifications available</p>
                )}
            </ul>
        </div>
    );
};

export default Notifications;
