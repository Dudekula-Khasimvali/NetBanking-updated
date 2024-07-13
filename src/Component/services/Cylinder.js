import React from 'react';
import './Cylinder.css'; // Import CSS for styling

const Cylinder = () => {
    const handleBharatBookingDetails = () => {
        window.open('https://my.ebharatgas.com/bharatgas/QuickBook/BookAndPay?source=MB', '_blank');
    };

    const handleHPBookingDetails = () => {
        window.open(' https://myhpgas.in/myHPGas/PortalLogin.aspx?ReturnUrl=%2fmyhpgas%2fhpgas%2fUser%2fBookRefill.aspx');
    };

    const handleIndaneBookingDetails = () => {
        window.open('https://cx.indianoil.in/webcenter/portal/Customer/pages_pages_initiatives/smsivrsbooking?Adf-Window-Id=f2i3tb35z&Adf-Page-Id=2');
    };

    return (
        <div className="cylinder-container">
            <h2>Gas Services</h2>
            <div className="service">
                <input type="checkbox" id="expand-bharat" className="expand-input" />
                <label htmlFor="expand-bharat" className="expand-label">Bharat Gas</label>
                <div className="expand-content">
                    <input type='text' placeholder='Please enter your LPG ID/Registered Mobile Number'/><br/>
                    <input type='button' value='Get Booking Details' onClick={handleBharatBookingDetails}/>
                </div>
            </div>
            <div className="service">
                <input type="checkbox" id="expand-hp" className="expand-input" />
                <label htmlFor="expand-hp" className="expand-label">HP Gas</label>
                <div className="expand-content">
                    <input type='text' placeholder='Please enter your LPG ID/Registered Mobile Number'/><br/>
                    <input type='button' value='Get Booking Details' onClick={handleHPBookingDetails}/>
                </div>
            </div>
            <div className="service">
                <input type="checkbox" id="expand-indane" className="expand-input" />
                <label htmlFor="expand-indane" className="expand-label">Indane Gas</label>
                <div className="expand-content">
                    <input type='text' placeholder='Please enter your LPG ID/Registered Mobile Number'/><br/>
                    <input type='button' value='Get Booking Details' onClick={handleIndaneBookingDetails}/>
                </div>
            </div>
        </div>
    );
};

export default Cylinder;
