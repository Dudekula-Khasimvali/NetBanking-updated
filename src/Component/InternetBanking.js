import React, { useRef, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InternetBanking.css'; // Import custom CSS


const InternetBanking = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 5000); // Adjust the interval (in milliseconds) for automatic sliding

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-inner">
      <Carousel ref={carouselRef} interval={null} pause={false} fade={true} indicators={false}>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <div className="card">
              <img
                className="d-block w-100"
                style={{ height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                src="https://d23wm3hwljelvs.cloudfront.net/s3fs-public/styles/webp/public/2024-04/stock-broker-%281%29.png.webp?itok=Xfqbg1JM"
                alt="First slide"
              />
            </div>
            <div className="card">
              <div className="card-body">
                <h1>Stock Broking is Now Live on Your KBL Mobile Plus App</h1>
               <h2>Zero account opening charges, just ₹20/order across all segments</h2>
                <button className="btn btn-primary mr-3">Start now</button>
                
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <div className="card">
              <img
                className="d-block w-100"
                style={{ height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                src="https://d23wm3hwljelvs.cloudfront.net/s3fs-public/styles/webp/public/2024-06/imgk.png.webp?itok=Hl8DEd_Y"
                alt="Second slide"
              />
            </div>
            <div className="card">
              <div className="card-body">
              <h2>Don't be Phished</h2>
              <h3>The bank never sends APK files over WhatsApp or links for KYC updates or any other reasons</h3>
              <ul>
                <li>Never download unknown files received via SMS, email, WhatsApp, or any other channel</li>
                <li>Never click on unknown or suspicious links</li>
                <li>Block or report suspicious contacts immediately to the national helpline 1930 or to our call centre</li>
              </ul>
              
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <div className="card">
              <img
                className="d-block w-100"
                style={{ height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                src="https://karnatakabank.com/sites/default/files/styles/webp/public/2024-05/investor-banner.png.webp?itok=UM90OX39"
                alt="Third slide"
              />
            </div>
            <div className="card">
              <div className="card-body">
                <h1>Explore Our Financial Information, Updates and more</h1>
               
                <button className="btn btn-primary mr-3">View Details</button>
                
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default InternetBanking;