import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('green');
  const [isIntervalRunning, setIsIntervalRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isIntervalRunning) {
      intervalId = setInterval(() => {
        setColor((prevColor) => {
          switch (prevColor) {
            case 'red':
              return 'green';
            case 'yellow':
              return 'red';
            case 'green':
              return 'yellow';
            default:
              return 'green';
          }
        });
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isIntervalRunning]);

  const handleButtonClick = () => {
    setIsIntervalRunning((prevState) => !prevState);
  };

  const handleLightClick = (clickedColor) => {
    if (!isIntervalRunning) {
      setColor(clickedColor);
    }
  };

  return (
    <div className="center">
      <div className="pole" />
      <div className="traffic">
        <div
          className={`red light ${color === 'red' ? 'active' : ''}`}
          onClick={() => handleLightClick('red')}
        />
        <div
          className={`yellow light ${color === 'yellow' ? 'active' : ''}`}
          onClick={() => handleLightClick('yellow')}
        />
        <div
          className={`green light ${color === 'green' ? 'active' : ''}`}
          onClick={() => handleLightClick('green')}
        />
      </div>
      <button onClick={handleButtonClick}>
        {isIntervalRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default TrafficLight;
