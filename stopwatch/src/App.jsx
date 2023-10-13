import { useState, useEffect } from 'react'
import './App.css'

const TimeStopper = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(prevSeconds => prevSeconds - 1);
        } else if (minutes > 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        } else {
          setRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [minutes, seconds, running]);

  const startStopTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setRunning(prevRunning => !prevRunning);
    }
  };

  const resetTimer = () => {
    setRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  const handleNumberClick = number => {
    if (!running) {
      const totalSeconds = minutes * 60 + seconds;
      const newTotalSeconds = totalSeconds * 10 + number;
      const newMinutes = Math.floor(newTotalSeconds / 60);
      const newSeconds = newTotalSeconds % 60;
      if (newMinutes >= 0 && newSeconds >= 0) {
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }
    }
  };

  return (
    <div className="timer">
      <h1>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
      <div className="number-buttons">
        {[...Array(10)].map((_, i) => (
          <button key={i} onClick={() => handleNumberClick(i)}>
            {i}
          </button>
        ))}
      </div>
      <button className='action-button' onClick={startStopTimer}>{running ? 'Pause' : 'Start'}</button>
      <button className='action-button' onClick={resetTimer}>Clear</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Time Stopper</h1>
      <TimeStopper />
    </div>
  );
};

export default App;

// -------


