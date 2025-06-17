import React, { useState } from 'react';
const Discount = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);

  const handleOriginalPriceChange = (event) => {
    setOriginalPrice(event.target.value);
  };

  const handleDiscountPercentageChange = (event) => {
    setDiscountPercentage(event.target.value);
  };

  const calculateFinalPrice = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (!isNaN(price) && !isNaN(discount)) {
      const discountedAmount = (price * discount) / 100;
      const finalPrice = price - discountedAmount;
      setFinalPrice(finalPrice.toFixed(2));
    } else {
      setFinalPrice(null);
    }
  };

  return (
    <div className="per-body">
    <div className='per-main'>
      <h2 className='per-head'>Discount Calculator</h2>
      <div>
        <label className='per-label'>Original Price:</label>
        <input type="number" value={originalPrice} onChange={handleOriginalPriceChange}  className='per-input' placeholder='Enter your price...'/>
      </div>
      <div>
        <label className='per-label'>Discount (%)</label>
        <input type="number" value={discountPercentage} onChange={handleDiscountPercentageChange}  className='per-input' placeholder='Enter discount...'/>
      </div>
      <button onClick={calculateFinalPrice} className='per-but'>Calculate</button>
      {finalPrice !== null && (
        <div>
          <p className='per-result'>Final Price after Discount: {finalPrice}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Discount;
