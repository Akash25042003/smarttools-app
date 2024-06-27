import React, { useState } from 'react';
import './percentage.css';

const Percentage = () => {
  const [total, setTotal] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);

  const handleTotalChange = (e) => {
    setTotal(e.target.value);
  };

  const handlePercentageChange = (e) => {
    setPercentage(e.target.value);
  };

  const calculatePercentage = () => {
    const totalValue = parseFloat(total);
    const percentageValue = parseFloat(percentage);

    if (!isNaN(totalValue) && !isNaN(percentageValue)) {
      const calculatedPercentage = (percentageValue / 100) * totalValue;
      setResult(calculatedPercentage.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div className="per-body">
    <div className='per-main'>
      <h2 className='per-head'>Percentage Calculator</h2>
      <div>
        <label className='per-label'>Total Value:</label>
        <input type="number" value={total} onChange={handleTotalChange} className='per-input'  placeholder='Enter total price...'/>
      </div>
      <div>
        <label className='per-label'>Percentage:</label>
        <input type="number" value={percentage} onChange={handlePercentageChange} className='per-input'  placeholder='Enter percetage...'/>
      </div>
      <button onClick={calculatePercentage} className='per-but'>Calculate</button>
      {result !== null && (
        <div>
          <p className='per-result'>Result: {result}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Percentage;
