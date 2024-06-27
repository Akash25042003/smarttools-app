import React, { useState } from 'react';
import './leapyear.css'

function Leapyear() {
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [leapYears, setLeapYears] = useState([]);
  const [dis,setdis]=useState('')

  const handleStartYearChange = (event) => {
    setStartYear(event.target.value);
  };

  const handleEndYearChange = (event) => {
    setEndYear(event.target.value);
  };

  const calculateLeapYears = () => {
    const start = parseInt(startYear);
    const end = parseInt(endYear);
    const leapYearsArray = [];
    

    for (let year = start; year <= end; year++) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        leapYearsArray.push(year);
      }
    }

    setLeapYears(leapYearsArray);
    setdis(1)
  };
  const handleclear=()=>{
    setdis('')
    setEndYear('')
    setStartYear('')
  }

  return (
    <div className='leap-body'>
      <div className="leap-sub">
      <h3 className='leap-heading'>Leap Year Calculator</h3>
      <div className="leap-input">
      <div className='leap-first'>
        <label>Start Year: </label>
        <input
          type="number"
          value={startYear}
          onChange={handleStartYearChange}
        />
      </div>
      <div className='leap-second'>
        <label>End Year: </label>
        <input
          type="number"
          value={endYear}
          onChange={handleEndYearChange}
        />
      </div>
      </div>
      <div className="lea-button">
      <button onClick={calculateLeapYears} className='leap-but'>Calculate</button>
      <button className='leap-but' onClick={handleclear} >clear</button>
      </div>
      <div >
        {
         (dis)&& (
                <div className='leap-last'>
                    <p className='leap'>Leap Years:{leapYears.count}</p>
                {leapYears.map((year, index) => (
                  <div key={index} className='leap-years'>{year}</div>
                ))}
              </div>
                
         )
        }
      </div>
      </div>
    </div>
  );
}

export default Leapyear;
