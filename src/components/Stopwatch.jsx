import React, { useState, useRef } from 'react';
function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 10);
      }, 10);
      setIsRunning(true);
    }
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <div className="stop-body">
      <div className="stopwatch">
      <div className="stopwatch-time">{(elapsedTime / 1000).toFixed(2)}s</div>
      <div className="stopwatch-controls">
        {!isRunning ? (
          <button onClick={startStopwatch} className='stop-start'>Start</button>
        ) : (
          <button onClick={stopStopwatch} className='stop-start'>Stop</button>
        )}
        <button onClick={resetStopwatch} className='stop-reset'>Reset</button>
      </div>
    </div>
    </div>
  );
}

export default Stopwatch;
