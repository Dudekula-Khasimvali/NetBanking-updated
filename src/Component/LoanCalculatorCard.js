import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './LoanCalculatorCard.css';

// Register necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const LoanCalculatorCard = () => {
  const [loanAmount, setLoanAmount] = useState(25000); // Initial loan amount for EMI calculator
  const [interestRate, setInterestRate] = useState(2); // Initial interest rate for EMI calculator
  const [loanTenure, setLoanTenure] = useState(12); // Initial loan tenure for EMI calculator
  const [calculatorType, setCalculatorType] = useState('emi'); // Default calculator type

  const handleCalculatorChange = (type) => {
    setCalculatorType(type);

    switch (type) {
      case 'emi':
        setLoanAmount(25000);
        setInterestRate(2);
        setLoanTenure(12);
        break;
      case 'homeLoan':
        setLoanAmount(50000);
        setInterestRate(5);
        setLoanTenure(24);
        break;
      case 'carLoan':
        setLoanAmount(50000);
        setInterestRate(5);
        setLoanTenure(24);
        break;
      case 'fixedDeposit':
        setLoanAmount(25000);
        setInterestRate(2);
        setLoanTenure(12);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const principal = loanAmount;
    const interest = calculateInterest(loanAmount, interestRate, loanTenure);
    setChartData({
      labels: ['Principal Amount', 'Interest'],
      datasets: [{
        data: [principal, interest],
        backgroundColor: ['#007bff', '#dc3545'],
      }],
    });
  }, [loanAmount, interestRate, loanTenure]);

  const [chartData, setChartData] = useState({
    labels: ['Principal Amount', 'Interest'],
    datasets: [{
      data: [25000, calculateInterest(25000, 2, 12)],
      backgroundColor: ['#007bff', '#dc3545'],
    }],
  });

  function calculateEMI(principal, rate, tenure) {
    rate = rate / 100 / 12; // Monthly interest rate
    const emi = principal * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
    return parseFloat(emi.toFixed(2));
  }

  function calculateInterest(principal, rate, tenure) {
    const emi = calculateEMI(principal, rate, tenure);
    return (emi * tenure) - principal;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add any additional form submission logic here if needed
    alert('Form submitted');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="mt-4 w-100 mb-1"> {/* Adjusted margin-bottom */}
        <Col>
          <h1 className="text-center mb-4">Turn your dreams into reality</h1>
          <h5 className="text-center mb-4">Access our tools and calculators for smart spending and savings</h5>
          <Card className="p-4 custom-card-radius mx-auto">
            <Row className="mb-4 text-center">
              <Col md={3}>
                <h6 onClick={() => handleCalculatorChange('emi')} style={{ cursor: 'pointer' }}>Loans EMI calculator</h6>
              </Col>
              <Col md={3}>
                <h6 onClick={() => handleCalculatorChange('homeLoan')} style={{ cursor: 'pointer' }}>Loans Home loan calculator</h6>
              </Col>
              <Col md={3}>
                <h6 onClick={() => handleCalculatorChange('carLoan')} style={{ cursor: 'pointer' }}>Loans Car loan calculator</h6>
              </Col>
              <Col md={3}>
                <h6 onClick={() => handleCalculatorChange('fixedDeposit')} style={{ cursor: 'pointer' }}>Investment Fixed deposit calculator</h6>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="loanAmount">
                    <Form.Label>Loan amount</Form.Label>
                    <input
                      type="range"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      min={25000}
                      max={calculatorType === 'emi' ? 100000 : 75000}
                      step={5000}
                    />
                    <div className="text-center">{loanAmount}</div>
                  </Form.Group>

                  <Form.Group controlId="interestRate">
                    <Form.Label>Rate of interest (%)</Form.Label>
                    <input
                      type="range"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      min={2}
                      max={10}
                      step={0.5}
                    />
                    <div className="text-center">{interestRate}</div>
                  </Form.Group>

                  <Form.Group controlId="loanTenure">
                    <Form.Label>Loan tenure (months)</Form.Label>
                    <input
                      type="range"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      min={12}
                      max={60}
                      step={6}
                    />
                    <div className="text-center">{loanTenure}</div>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3">
                    Apply now
                  </Button>
                </Form>
              </Col>
              <Col md={6} className="d-flex align-items-center justify-content-center">
                <div className="chart-container">
                  <Pie data={chartData} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <div className="text-center">
        <img src='https://karnatakabank.com/themes/custom/karnataka_bank/assets/images/plan-img.png' alt='Bank Plan' />
      </div>
    </Container>
  );
};

export default LoanCalculatorCard;
