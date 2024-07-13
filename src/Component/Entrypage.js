import React from 'react';
import InternetBanking from './InternetBanking';
import Card1 from './Card1';
import LoanCalculatorCard from './LoanCalculatorCard';
import Footer from './Footer';
import './Marquee.css';

const Entrypage = () => {
  const cardStyle = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.1s',
    borderRadius: '15px',
    padding: '20px',
    margin: '20px',
    backgroundColor: '#894cac'
  };

  return (
    <>
      <h3 className="marquee">
      {/* <h4>Services</h4> */}
        <span className="marquee-content">Services :- Deposit || Cards || Loans || Investments  || Insurance || Start a SI || FASTag || Grab Deal </span>
      </h3>
      <InternetBanking style={cardStyle} />
      <Card1 style={cardStyle} />
      <LoanCalculatorCard style={cardStyle} />
      <Footer />
    </>
  );
};

export default Entrypage;