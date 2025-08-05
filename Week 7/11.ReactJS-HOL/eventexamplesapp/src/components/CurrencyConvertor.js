import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);
  const conversionRate = 0.011; // 1 INR = 0.011 EUR (approx)

  const handleSubmit = (event) => {
    event.preventDefault();
    const euroAmount = (parseFloat(rupees) * conversionRate).toFixed(2);
    setEuros(euroAmount);
  };

  return (
    <div>
      <h3>Currency Converter: INR to Euro</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euros !== null && <p>{rupees} INR = {euros} EUR</p>}
    </div>
  );
}

export default CurrencyConvertor;
