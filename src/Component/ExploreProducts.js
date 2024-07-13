import React from 'react';
import './ExploreProducts.css';

const ExploreProducts = () => {
    return (
        <div className="explore-background">
            <div className="explore-card">
                <div className="explore-content">
                    <h2>Explore Our Products</h2>
                    <div className="product">
                        <h3>Savings Accounts</h3>
                        <p>
                            Our savings accounts offer competitive interest rates and flexible options to suit your needs. Whether you're saving for a rainy day or your next big purchase, we have an account for you.
                        </p>
                    </div>
                    <div className="product">
                        <h3>Credit Cards</h3>
                        <p>
                            Choose from a variety of credit cards that offer rewards, cash back, and low interest rates. Find the perfect card that fits your spending habits and financial goals.
                        </p>
                    </div>
                    <div className="product">
                        <h3>Home Loans</h3>
                        <p>
                            Make your dream home a reality with our flexible home loan options. We offer competitive rates and personalized service to help you find the right loan for your needs.
                        </p>
                    </div>
                    <div className="product">
                        <h3>Personal Loans</h3>
                        <p>
                            Whether you need funds for a major purchase, debt consolidation, or an unexpected expense, our personal loans offer competitive rates and flexible repayment options.
                        </p>
                    </div>
                    <div className="product">
                        <h3>Car Loans</h3>
                        <p>
                            Drive away in your dream car with our low-interest car loans. We offer flexible terms and quick approval to get you on the road faster.
                        </p>
                    </div>
                    <div className="product">
                        <h3>Investment Services</h3>
                        <p>
                            Grow your wealth with our investment services. We offer a range of investment products, including mutual funds, stocks, and retirement accounts, to help you achieve your financial goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreProducts;
