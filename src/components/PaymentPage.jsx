import React, { useState, useEffect } from 'react';
import './PaymentPage.css'; 
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const formatCardNumber = (value) => {
    return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim().substring(0, 19);
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2').substring(0, 5);
  };

  const formatCVV = (value) => {
    return value.replace(/\D/g, '').substring(0, 3);
  };

  const detectCardType = (number) => {
    const firstDigit = number.charAt(0);
    if (firstDigit === '4') return 'Visa';
    if (firstDigit === '2' || firstDigit === '5') return 'MasterCard';
    return 'Unknown';
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (paymentStatus) {
      setTimeout(() => setPaymentStatus(null), 3000);
    }
  }, [paymentStatus]);

  return (
    <motion.div 
      className="payment-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="payment-header">
        <h1>AIU.</h1>
        <p>Alamein International University</p>
        <p>Secure Payment Portal</p>
      </div>
      <div className="payment-content">
        <motion.div 
          className="payment-form"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Make a Payment</h2>
          <form onSubmit={handlePayment}>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input 
                type="number" 
                id="amount" 
                placeholder="Enter amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input 
                type="text" 
                id="cardNumber" 
                placeholder="XXXX-XXXX-XXXX-XXXX" 
                value={formatCardNumber(cardNumber)} 
                onChange={(e) => setCardNumber(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group-inline">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input 
                  type="text" 
                  id="expiryDate" 
                  placeholder="MM/YY" 
                  value={formatExpiryDate(expiryDate)} 
                  onChange={(e) => setExpiryDate(e.target.value.substring(0,5))} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <input 
                  type="text" 
                  id="cvv" 
                  placeholder="CVV" 
                  value={formatCVV(cvv)} 
                  onChange={(e) => setCvv(e.target.value.substring(0,3))} 
                  required 
                />
              </div>
            </div>
            <motion.button 
              type="submit" 
              className="pay-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isProcessing}
            >
                
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </motion.button>
          </form>
          {paymentStatus === 'success' && <div className="payment-success">Payment Successful!</div>}
          {paymentStatus === 'error' && <div className="payment-error">Payment Failed. Please try again.</div>}
        </motion.div>
        <motion.div 
          className="payment-visual"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="card-visual">
            <div className="card-chip"></div>
            <motion.div 
              className="card-number"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {cardNumber ? formatCardNumber(cardNumber) : 'XXXX-XXXX-XXXX-XXXX'}
            </motion.div>
            <div className="card-details">
              <div className="card-expiry">{expiryDate ? expiryDate : 'MM/YY'}</div>
              <div className="card-cvv">{cvv ? cvv : 'CVV'}</div>
            </div>
            <div className="card-type">
              {detectCardType(cardNumber.replace(/\s/g, ''))}
            </div>
          </div>
        </motion.div>
        
      </div>
      <div className="back-link">
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>
    </motion.div>
    
  );
};

export default PaymentPage;