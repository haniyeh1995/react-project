import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('IRR');
  const [result, setResult] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  const conversionRates = {
    USD: {
      USD: 1,
      EUR: 0.93,
      IRR: 42000,
      AED: 3.67,
      CNH: 7.28,
    },
    EUR: {
      EUR: 1,
      USD: 1.07,
      IRR: 45000,
      AED: 3.94,
      CNH: 7.79,
    },
    IRR: {
      IRR:1,
      USD: 0.00002,
      EUR: 0.00002,
      AED: 0.00008,
      CNH: 0.00017,
    },
    AED: {
      AED: 1,
      USD: 0.27,
      EUR: 0.25,
      IRR: 11511,
      CNH: 1.98,
    },
    CNH: {
      CHN: 1,
      USD: 0.13,
      EUR: 0.12,
      IRR: 5814,
      AED: 0.5,
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAmountChange = (event) => {
    const enteredAmount = parseFloat(event.target.value);
    setAmount(enteredAmount);
    setResult(enteredAmount * conversionRates[fromCurrency][toCurrency]);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
    setResult(amount * conversionRates[event.target.value][toCurrency]);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
    setResult(amount * conversionRates[fromCurrency][event.target.value]);
  };

  return (
    <div>
      <h2 className="title">Currency Calculator</h2>
      <div className="space"></div>
      <div className="example">
        1 {fromCurrency} = {conversionRates[fromCurrency][toCurrency]} {toCurrency}
      </div>
      <div className="date">Currency quote day: {currentTime.toLocaleString()}</div>
      <div className="currencyFrom">
        <input className="inputs" type="number" value={amount} onChange={handleAmountChange} />
        <select className="inputs" value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="IRR">IRR</option>
          <option value="AED">AED</option>
          <option value="CNH">CNH</option>
        </select>
      </div>
      <div className="currencyTo">
        <input className="inputs" type="number" value={result} readOnly />
        <select className="inputs" value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="IRR">IRR</option>
          <option value="AED">AED</option>
          <option value="CNH">CNH</option>
        </select>
      </div>
    </div>
  );
}

export default App;
