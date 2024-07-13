// Cards.js
import React from 'react';
import './Cards.css';

const Cards = () => {
    // Sample card data (replace with actual data or fetch from API)
    const cards = [
        { type: 'Credit Card', number: '**** **** **** 1234', expiry: '12/23', issuer: 'Visa' },
        { type: 'Debit Card', number: '**** **** **** 5678', expiry: '06/25', issuer: 'Mastercard' }
    ];

    return (
        <div className="cards-container">
            <h1>My Cards</h1>
            <div className="cards-grid">
                {cards.map((card, index) => (
                    <div key={index} className={`card ${card.type.toLowerCase().replace(' ', '-')}`}>
                        <div className="card-header">
                            <h3>{card.type}</h3>
                            <p>{card.number}</p>
                        </div>
                        <div className="card-footer">
                            <div>
                                <span>Issuer:</span> {card.issuer}
                            </div>
                            <div>
                                <span>Expires:</span> {card.expiry}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
