import React, { useState } from 'react';
import './todolist.css'
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

  const handleDeleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className='note-body'>
      <div className="note-sub">
      <h2 className='note-head'>To do list</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your note..."
          className='to-input'
        />
        <button onClick={handleAddNote} className='todo-but'>Add</button>
      </div>
      <div>
        {notes.map((note, index) => (
          <div className="note-footer">
            <div key={index} className='note-name'>
            <div className="note-note">{note}</div>
            <button onClick={() => handleDeleteNote(index)} className='note-del'>Delete</button>
          </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default QuickNotes;
