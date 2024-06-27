import React, { useState } from 'react';
import './notes.css'
const QuickNotes = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='note-body'>
      <div className="note-sub">
      <h2 className='note-head'>Quick Notes</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your note..."
          className='note-input'
        />
        <button onClick={handleAddNote} className='notesbutton'>Add Note</button>
      </div>
      <div>
        {notes.map((note, index) => (
          <div className="note-footer">
            <div key={index} className='note-name'>
            <div className="note-note">{note}</div>
          </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default QuickNotes;
