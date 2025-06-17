import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else if (value === 'DEL') {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className='cal-body'>
      <div className="calculator">
        <input type="text" placeholder='0' value={display} className='cal-display' readOnly />
        <div className="cal-buttons">
          <button onClick={() => handleClick('C')} className='cal-c'>C</button>
          <button onClick={() => handleClick('%')} className='cal-but'>%</button>
          <button onClick={() => handleClick('DEL')} className='cal-del'>DEL</button>
          <button onClick={() => handleClick('/')} className='cal-but'>/</button>
          <button onClick={() => handleClick('7')} className='cal-but' >7</button>
          <button onClick={() => handleClick('8')} className='cal-but'>8</button>
          <button onClick={() => handleClick('9')} className='cal-but'>9</button>
          <button onClick={() => handleClick('*')} className='cal-but'>*</button>
          <button onClick={() => handleClick('4')} className='cal-but'>4</button>
          <button onClick={() => handleClick('5')} className='cal-but'>5</button>
          <button onClick={() => handleClick('6')} className='cal-but'>6</button>
          <button onClick={() => handleClick('-')} className='cal-but'>-</button>
          <button onClick={() => handleClick('1')} className='cal-but'>1</button>
          <button onClick={() => handleClick('2')} className='cal-but'>2</button>
          <button onClick={() => handleClick('3')} className='cal-but'>3</button>
          <button onClick={() => handleClick('+')} className='cal-but'>+</button>
          <button onClick={() => handleClick('00')} className='cal-but'>00</button>
          <button onClick={() => handleClick('0')} className='cal-but'>0</button>
          <button onClick={() => handleClick('.')} className='cal-but'>.</button>
          <button onClick={() => handleClick('=')} className='cal-equal'>=</button>
          
        </div>
      </div>
    </div>
  );
};

export default Calculator;
