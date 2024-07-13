import React from 'react';
import Slider from 'react-slick';
import './CreditCardDetails.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CreditCardDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="credit-card-details">
      <header className="header">
        <h2>Enter Credit Card Details</h2>
      </header>
      <Slider {...settings}>
        <div className="card-slide">
          <h3>How to increase your credit score?</h3>
          <ul>
            <li>Pay your Credit Card Bills on time</li>
            <li>Maintain &lt;30% credit utilization ratio</li>
            <li>Use more Credit Cards</li>
          </ul>
        </div>
        <div className="card-slide">
          <h3>Tip 2</h3>
          <p>Keep your credit utilization below 30%</p>
        </div>
        <div className="card-slide">
          <h3>Tip 3</h3>
          <p>Maintain a mix of credit types</p>
        </div>
      </Slider>
      <form>
        <label>
          Enter credit card number
          <input type="text" name="cardNumber" placeholder="Card Number" />
        </label>
        <div className="card-details">
          <label>
            Valid till
            <input type="text" name="validMonth" placeholder="MM" />
            <input type="text" name="validYear" placeholder="YY" />
          </label>
          <label>
            CVV
            <input type="text" name="cvv" placeholder="CVV" />
          </label>
        </div>
        <p className="note">
          Note: Your card details are required to initiate payment as per RBI regulations. CVV will not be saved
        </p>
        <p className="allow-phonepe">
          By proceeding further, you allow PhonePe to fetch your current and future bills and remind you
        </p>
      </form>
      <div className="view-credit-bills">
        <h3>View your Credit Card bills</h3>
        <p>Be reminded when your bills are due and pay in a few simple steps.</p>
        <a href="#read-more">Read More</a>
        <button className="allow-button">ALLOW</button>
      </div>
      <button className="proceed-button">PROCEED</button>
    </div>
  );
};

export default CreditCardDetails;
