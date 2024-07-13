import React from 'react';
import './CardStyles.css';

const Card1 = () => (
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000"> {/* Set interval to 2000 milliseconds (2 seconds) */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <h1 className="card-title">Creating to all your needs</h1>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="d-flex justify-content-around">
          <div className="card">
            <h2>Open a <b>eB Instant SB Account</b> online through video KYC</h2>
            <ul>
              <li>Paperless digital account opening</li>
              <li>Choose your preferred branch</li>
              <li>24/7 support</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="mr-3">Apply now</button>
              <button>Know more</button>
            </div>
          </div>
          <div className="card">
            <h2>Apply for a <b>eB Xpress Cash Loan</b> online</h2>
            <ul>
              <li>Paperless digital account opening</li>
              <li>Choose your preferred branch</li>
              <li>24/7 support</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="mr-3">Apply now</button>
              <button>Know more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="d-flex justify-content-around">
          <div className="card">
            <h2>Apply for a <b>eB Gold Loan without</b> any hassle</h2>
            <ul>
              <li>Safe gold custody</li>
              <li>High loan-to-value ratio</li>
              <li>No income proof</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="mr-3">Apply now</button>
              <button>Know more</button>
            </div>
          </div>
          <div className="card">
            <h2>Start investing today through <b>Demat and Trading</b></h2>
            <ul>
              <li>Robust cybersecurity measures</li>
              <li>Zero physical certificate risk</li>
              <li>Automated IPO applications</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="mr-3">Apply now</button>
              <button>Know more</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Card1;
