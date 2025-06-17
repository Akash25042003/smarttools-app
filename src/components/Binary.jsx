import React, { useState } from 'react';
const TextToBinary = () => {
  const [inputText, setInputText] = useState('');
  const [binaryText, setBinaryText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const convertToBinary = () => {
    const binaryString = inputText.split('').map(char => {
      const binaryChar = char.charCodeAt(0).toString(2);
      return '0'.repeat(8 - binaryChar.length) + binaryChar;
    }).join(' ');
    setBinaryText(binaryString);
  };

  return (
    <div className="binary-main">
    <div className='binary_body'>
      <h2>Text to Binary Converter</h2>
      <div className='binary-first'>
        <label htmlFor="textInput">Enter Text:</label>
        <input
          type="text"
          id="textInput"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text to convert"
        />
      </div>
      <div className="binary-but-1">
      <button onClick={convertToBinary}>Convert to Binary</button>
      </div>
      <div className='binary-last'>
        <label htmlFor="binaryOutput">Binary Representation:</label>
        <textarea
          id="binaryOutput"
          value={binaryText}
          readOnly
          rows={5}
        />
      </div>
    </div>
    </div>
  );
};

export default TextToBinary;
