import React, { useState } from 'react';
const UnitCalculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('kilometer');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };
  const unitclear=()=>{
    setResult("")
    setInputValue("")
  }

  const convertUnits = () => {
    let convertedValue;
    const inputValueFloat = parseFloat(inputValue);
    switch (selectedUnit) {
      case 'kilometer':
        convertedValue = inputValueFloat * 1000;
        break;
      case 'meter':
        convertedValue = inputValueFloat * 1;
        break;
      case 'centimeter':
        convertedValue = inputValueFloat / 100;
        break;
      case 'millimeter':
        convertedValue = inputValueFloat / 1000;
        break;
      case 'inch':
        convertedValue = inputValueFloat / 0.0254;
        break;
      case 'mile':
        convertedValue = inputValueFloat * 1609.344;
        break;
      default:
        convertedValue = NaN;
    }
    setResult(convertedValue.toFixed(2));
  };

  return (
    <div className="unit-main">
    <div className='unit-body'>
      <div className="unit-top">
      <h2 className='unit-heading'>Unit Calculator</h2>
      </div>
      <div className="unit-both">
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter value"
        
      />
      <select value={selectedUnit} onChange={handleUnitChange}>
        <option value="kilometer">Kilometer</option>
        <option value="meter">Meter</option>
        <option value="centimeter">Centimeter</option>
        <option value="millimeter">Millimeter</option>
        <option value="inch">Inch</option>
        <option value="mile">Mile</option>
      </select>
      </div>
      <div className="unit-footer-but">
      <button onClick={convertUnits}>Convert</button>
      <button onClick={unitclear}>clear</button>
      </div>
      {result && <p className='unit-result'>Result: {result}</p>}
    </div>
    </div>
  );
};

export default UnitCalculator;
