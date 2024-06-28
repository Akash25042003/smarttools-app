import React, { useState } from 'react';
import '../style/agecalculator.css'
const Agecalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [ageYears, setAgeYears] = useState('');
  const [daysSinceBirth, setDaysSinceBirth] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const diff = today - birthDateObj;

    // Calculate age in years
    const ageDate = new Date(diff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAgeYears(calculatedAge);

    // Calculate days since birth
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    setDaysSinceBirth(days);
  };
  const handleclear=()=>{
    setAgeYears('')
    setBirthDate('')
  }

  return (
    <div className="age-container-main">
      <div className='age-container-sub'>
      <h1>Age Calculator</h1>
      <div className="age-in">
      <label htmlFor="birthdate">Enter your birthdate:</label>
      <input
        type="date"
        id="birthdate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      </div>
      <div className="age-but">
      <button onClick={calculateAge} className='age-but-1'>Calculate</button>
      <button className='age-but-1' onClick={handleclear}>Clear</button>
      </div>
      { (ageYears && daysSinceBirth) &&(
        <div className="age-footer">
         <p>Your age is: {ageYears} years</p>
        <p>Days since birth: {daysSinceBirth}</p>
        </div>
       )}
    </div>
    </div>
  )
}

export default Agecalculator