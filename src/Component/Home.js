import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from React Router
import './Home.css'; // Importing CSS for styling
import About from './About';

const Home = () => {
    const navigate = useNavigate(); // Get the navigate function
    const [language, setLanguage] = useState('English'); // State to store selected language

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        // Additional logic to handle language change can be added here
        // For example, you can update the content of the page based on the selected language
    };

    return (
        <div className="home-container">
            <nav className="navbar">
                <h1>e - Banking</h1>
                <div className="additional-links">
                    <div className="dropdown">
                        <Link to="/ExploreProducts" className="dropbtn">Explore Products</Link>
                        <div className="dropdown-content">
                            <Link to="/account">Account</Link>
                            <Link to="/Deposit">Deposit</Link>
                            <Link to="/Cards">Cards</Link>
                            <Link to="/Loans">Loans</Link>
                            <Link to="/Investments">Investments</Link>
                            <Link to="/Insurance">Insurance</Link>
                            <Link to="/StartASIP">Start a SIP</Link>
                            <Link to="/FASTag">FASTag</Link>
                            <Link to="/DigitalRupee">Digital Rupee</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="#" className="dropbtn">Grab Deal</Link>
                        <div className="dropdown-content">
                            <Link to="https://www.ajio.com">Ajio</Link>
                            <Link to="https://www.amazon.in/">Amazon</Link>
                            <Link to="https://www.flipkart.com/">Flipkart</Link>
                            <Link to="https://www.apple.com/in/">Apple</Link>
                            <Link to="https://www.myntra.com/">Myntra</Link>
                            <Link to="https://www.meesho.com/">Meesho</Link>
                            
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="#" className="dropbtn">Make Payment</Link>
                        <div className="dropdown-content">
                            <Link to="/cylinder">Cylinder</Link>
                            <Link to="/Rent">Rent</Link>
                            <Link to="/electricity">Electricity</Link>
                            <Link to="/water">Water</Link>
                            <Link to="/Postpaid">Postpaid</Link>
                            <Link to="/mobilerecharge">Mobile Recharge</Link>
                            <Link to="/FASTagRecharge">FASTag Recharge</Link>
                            <Link to="/DthRecharge">DTH Recharge</Link>
                            <Link to="/CreditCardRecharge">Credit Card Recharge</Link>
                        </div>
                    </div>
                </div>
                <div className="nav-links">
                  
                    <div className="dropdown">
                        <Link to="#" className="dropbtn">Languages</Link>
                        <div className="dropdown-content">
                            <Link to="#" onClick={() => handleLanguageChange('English')}>English</Link>
                            <Link to="#" onClick={() => handleLanguageChange('Spanish')}>Spanish</Link>
                            <Link to="#" onClick={() => handleLanguageChange('French')}>French</Link>
                            <Link to="#" onClick={() => handleLanguageChange('German')}>German</Link>
                            <Link to="#" onClick={() => handleLanguageChange('Chinese')}>Chinese</Link>
                            <Link to="#" onClick={() => handleLanguageChange('Hindi')}>Hindi</Link>
                        </div>
                    </div>
                    <div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                        </svg>
                    </div>
                </div>
            </nav>
            <div className="content">
                <aside className="sidebar">
                    <ul>
                        <li><Link to="/Account">Account</Link></li>
                        <li><Link to="/payments">Payments</Link></li>
                        <li><Link to="/History">History</Link></li>
                        <li><Link to="/Settings">Settings</Link></li>
                    </ul>
                </aside>
                <main className="main-content">
                    <div className="services">
                        <h3>{language === 'English' ? 'Bank Services' : language === 'Spanish' ? 'Servicios Bancarios' : language === 'French' ? 'Services Bancaires' : language === 'German' ? 'Bankdienstleistungen' : language === 'Chinese' ? '银行服务' : language === 'Hindi' ? 'बैंक सेवाएं' : 'Bank Services'}</h3>
                        <div className="service-cards">
                            <Link to="/MoneyTransfers" style={{textDecoration:'none'}}>
                                <div className="service-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
                                    <h4 style={{ marginBottom: '10px' }}>{language === 'English' ? 'Money Transfers' : language === 'Spanish' ? 'Transferencias de Dinero' : language === 'French' ? 'Transferts d\'argent' : language === 'German' ? 'Geldüberweisungen' : language === 'Chinese' ? '转账' : language === 'Hindi' ? 'धन हस्तांतरण' : 'Money Transfers'}</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bank2" viewBox="0 0 16 16" style={{ width: '100%', height: '100%' }}>
                                        <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"/>
                                    </svg>
                                </div>
                            </Link>
                            <div>
                                 <div className="service-card">
                                <h4>{language === 'English' ? 'Create Account' : language === 'Spanish' ? 'Crear Cuenta' : language === 'French' ? 'Créer un Compte' : language === 'German' ? 'Konto Erstellen' : language === 'Chinese' ? '创建账户' : language === 'Hindi' ? 'खाता बनाएँ' : 'Create Account'}</h4>
                                <div className="account-options">
                                    <Link to="/CreatePersonalAccount" style={{textDecoration:'none'}}>
                                        <div className="account-option">
                                            <p>{language === 'English' ? 'Personal Account' : language === 'Spanish' ? 'Cuenta Personal' : language === 'French' ? 'Compte Personnel' : language === 'German' ? 'Persönliches Konto' : language === 'Chinese' ? '个人账户' : language === 'Hindi' ? 'व्यक्तिगत खाता' : 'Personal Account'}</p>
                                        </div>
                                    </Link>
                                    <Link to="/CreateBusinessAccount" style={{textDecoration:'none'}}>
                                        <div className="account-option">
                                            <p>{language === 'English' ? 'Business Account' : language === 'Spanish' ? 'Cuenta de Negocios' : language === 'French' ? 'Compte Professionnel' : language === 'German' ? 'Geschäftskonto' : language === 'Chinese' ? '商业账户' : language === 'Hindi' ? 'व्यवसाय खाता' : 'Business Account'}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            </div>
                            <div className="service-card">
                                <h4>{language === 'English' ? 'Bill Payments' : language === 'Spanish' ? 'Pagos de Facturas' : language === 'French' ? 'Paiements de Factures' : language === 'German' ? 'Rechnungszahlungen' : language === 'Chinese' ? '账单支付' : language === 'Hindi' ? 'बिल भुगतान' : 'Bill Payments'}</h4>
                                <div className="bill-services" >
                                    <div className="bill-service-card">
                                        <Link to="/Cylinder" style={{textDecoration:'none'}}>
                                            <p>{language === 'English' ? 'Cylinder' : language === 'Spanish' ? 'Cilindro' : language === 'French' ? 'Cylindre' : language === 'German' ? 'Zylinder' : language === 'Chinese' ? '气缸' : language === 'Hindi' ? 'सिलेंडर' : 'Cylinder'}</p>
                                        </Link>
                                    </div>
                                    <div className="bill-service-card">
                                        <p>{language === 'English' ? 'Rent' : language === 'Spanish' ? 'Alquiler' : language === 'French' ? 'Loyer' : language === 'German' ? 'Miete' : language === 'Chinese' ? '租金' : language === 'Hindi' ? 'किराया' : 'Rent'}</p>
                                    </div>
                                    <div className="bill-service-card">
                                        <Link to="/Electricity" style={{textDecoration:'none'}}>
                                            <p>{language === 'English' ? 'Electricity' : language === 'Spanish' ? 'Electricidad' : language === 'French' ? 'Électricité' : language === 'German' ? 'Elektrizität' : language === 'Chinese' ? '电力' : language === 'Hindi' ? 'बिजली' : 'Electricity'}</p>
                                        </Link>
                                    </div>
                                    <div className="bill-service-card">
                                        <Link to="/Water" style={{textDecoration:'none'}}>
                                            <p>{language === 'English' ? 'Water' : language === 'Spanish' ? 'Agua' : language === 'French' ? 'Eau' : language === 'German' ? 'Wasser' : language === 'Chinese' ? '水' : language === 'Hindi' ? 'पानी' : 'Water'}</p>
                                        </Link>
                                    </div>
                                    <div className="bill-service-card">
                                        <p>{language === 'English' ? 'Postpaid' : language === 'Spanish' ? 'Postpago' : language === 'French' ? 'Postpayé' : language === 'German' ? 'Postpaid' : language === 'Chinese' ? '后付费' : language === 'Hindi' ? 'पोस्टपेड' : 'Postpaid'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-card">
                                <h4>{language === 'English' ? 'Recharge' : language === 'Spanish' ? 'Recargar' : language === 'French' ? 'Recharger' : language === 'German' ? 'Aufladen' : language === 'Chinese' ? '充值' : language === 'Hindi' ? 'रिचार्ज' : 'Recharge'}</h4>
                                <div className="recharge-services">
                                    <div className="recharge-service-card">
                                        <Link to="/reacharge" style={{textDecoration:'none'}}>
                                            <p>{language === 'English' ? 'Mobile Recharge' : language === 'Spanish' ? 'Recarga Móvil' : language === 'French' ? 'Recharge Mobile' : language === 'German' ? 'Handyaufladung' : language === 'Chinese' ? '手机充值' : language === 'Hindi' ? 'मोबाइल रिचार्ज' : 'Mobile Recharge'}</p>
                                        </Link>
                                    </div>
                                    <div className="recharge-service-card">
                                    
                                    <Link to="/fastag" style={{textDecoration:'none'}}>
                                        <p>{language === 'English' ? 'FASTag Recharge' : language === 'Spanish' ? 'Recarga FASTag' : language === 'French' ? 'Recharge FASTag' : language === 'German' ? 'FASTag-Aufladung' : language === 'Chinese' ? 'FASTag充值' : language === 'Hindi' ? 'FASTag रिचार्ज' : 'FASTag Recharge'}</p>
                                    </Link>
                                    </div>
                                    <div className="recharge-service-card">
                                        <Link to="/DthRecharge" style={{textDecoration:'none'}}>
                                            <p>{language === 'English' ? 'DTH Recharge' : language === 'Spanish' ? 'Recarga DTH' : language === 'French' ? 'Recharge DTH' : language === 'German' ? 'DTH-Aufladung' : language === 'Chinese' ? 'DTH充值' : language === 'Hindi' ? 'DTH रिचार्ज' : 'DTH Recharge'}</p>
                                        </Link>
                                    </div>
                                    <div className="recharge-service-card">
                                    <Link to="/credit" style={{textDecoration:'none'}}>
                                        <p>{language === 'English' ? 'Credit Card Recharge' : language === 'Spanish' ? 'Recarga de Tarjeta de Crédito' : language === 'French' ? 'Recharge de Carte de Crédit' : language === 'German' ? 'Kreditkartenaufladung' : language === 'Chinese' ? '信用卡充值' : language === 'Hindi' ? 'क्रेडिट कार्ड रिचार्ज' : 'Credit Card Recharge'}</p>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="service-card">
                                <h4>{language === 'English' ? 'Loans' : language === 'Spanish' ? 'Préstamos' : language === 'French' ? 'Prêts' : language === 'German' ? 'Darlehen' : language === 'Chinese' ? '贷款' : language === 'Hindi' ? 'ऋण' : 'Loans'}</h4>
                                <p>{language === 'English' ? 'Apply for loans with low interest rates.' : language === 'Spanish' ? 'Solicite préstamos con bajas tasas de interés.' : language === 'French' ? 'Demandez des prêts à des taux d\'intérêt bas.' : language === 'German' ? 'Beantragen Sie Kredite mit niedrigen Zinssätzen.' : language === 'Chinese' ? '申请低利率贷款。' : language === 'Hindi' ? 'कम ब्याज दरों पर ऋण के लिए आवेदन करें।' : 'Apply for loans with low interest rates.'}</p>
                                <div className="loan-services">
                                    <div className="loan-service-card">
                                        <p>{language === 'English' ? 'CIBIL Score' : language === 'Spanish' ? 'Puntaje CIBIL' : language === 'French' ? 'Score CIBIL' : language === 'German' ? 'CIBIL-Score' : language === 'Chinese' ? 'CIBIL评分' : language === 'Hindi' ? 'CIBIL स्कोर' : 'CIBIL Score'}</p>
                                    </div>
                                    <div className="loan-service-card">
                                        <p>{language === 'English' ? 'Bike Loan' : language === 'Spanish' ? 'Préstamo de Bicicleta' : language === 'French' ? 'Prêt de Vélo' : language === 'German' ? 'Fahrraddarlehen' : language === 'Chinese' ? '自行车贷款' : language === 'Hindi' ? 'बाइक ऋण' : 'Bike Loan'}</p>
                                    </div>
                                    <div className="loan-service-card">
                                        <p>{language === 'English' ? 'Mutual Funds' : language === 'Spanish' ? 'Fondos Mutuos' : language === 'French' ? 'Fonds Communs' : language === 'German' ? 'Investmentfonds' : language === 'Chinese' ? '共同基金' : language === 'Hindi' ? 'म्यूचुअल फंड्स' : 'Mutual Funds'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-card">
                                <h4>{language === 'English' ? 'Investments' : language === 'Spanish' ? 'Inversiones' : language === 'French' ? 'Investissements' : language === 'German' ? 'Investitionen' : language === 'Chinese' ? '投资' : language === 'Hindi' ? 'निवेश' : 'Investments'}</h4>
                                <p>{language === 'English' ? 'Explore various investment options.' : language === 'Spanish' ? 'Explore varias opciones de inversión.' : language === 'French' ? 'Explorez diverses options d\'investissement.' : language === 'German' ? 'Erkunden Sie verschiedene Investitionsmöglichkeiten.' : language === 'Chinese' ? '探索各种投资选择。' : language === 'Hindi' ? 'विभिन्न निवेश विकल्पों का अन्वेषण करें।' : 'Explore various investment options.'}</p>
                                <div className="investment-services">
                                    <div className="investment-service-card">
                                        <p>{language === 'English' ? 'Stocks' : language === 'Spanish' ? 'Acciones' : language === 'French' ? 'Actions' : language === 'German' ? 'Aktien' : language === 'Chinese' ? '股票' : language === 'Hindi' ? 'शेयर' : 'Stocks'}</p>
                                    </div>
                                    <div className="investment-service-card">
                                        <p>{language === 'English' ? 'Bonds' : language === 'Spanish' ? 'Bonos' : language === 'French' ? 'Obligations' : language === 'German' ? 'Anleihen' : language === 'Chinese' ? '债券' : language === 'Hindi' ? 'बॉन्ड' : 'Bonds'}</p>
                                    </div>
                                    <div className="investment-service-card">
                                        <p>{language === 'English' ? 'Mutual Funds' : language === 'Spanish' ? 'Fondos Mutuos' : language === 'French' ? 'Fonds Communs' : language === 'German' ? 'Investmentfonds' : language === 'Chinese' ? '共同基金' : language === 'Hindi' ? 'म्यूचुअल फंड्स' : 'Mutual Funds'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="about-section">
                        <About language={language} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
