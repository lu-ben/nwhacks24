import { useState, useEffect } from 'react';

function SliderTimePicker({ initialHour, initialMinute, initialPeriod, onHourChange, onMinuteChange, onPeriodChange }) {
  const [hour, setHour] = useState(initialHour);
  const [minute, setMinute] = useState(initialMinute);
  const [period, setPeriod] = useState(initialPeriod);

  const handleHourChange = (e) => {
    const newHour = e.target.value;
    setHour(newHour);
    onHourChange && onHourChange(newHour);
  };

  const handleMinuteChange = (e) => {
    const newMinute = e.target.value;
    setMinute(newMinute);
    onMinuteChange && onMinuteChange(newMinute);
  };

  const handlePeriodChange = (e) => {
    const newPeriod = e.target.value;
    setPeriod(newPeriod);
    onPeriodChange && onPeriodChange(newPeriod);
  };

  return (
    <div>
        <p className='text-center font-bold'>{hour}:{minute} {period}</p>
      <div>
        <label>Hour:</label>
        <input className='w-full'
          type="range" 
          min="00" 
          max="12" 
          value={hour} 
          onChange={handleHourChange}
        />
      </div>
      <div>
        <label>Minute:</label>
        <input className='w-full'
          type="range" 
          min="0" 
          max="59" 
          value={minute} 
          onChange={handleMinuteChange}
        />
      </div>
      <div className='text-center gap-x-10'>
      <div >
        <label className='m-2'>
          <input 
            type="radio" 
            value="AM" 
            checked={period === 'AM'} 
            onChange={handlePeriodChange} 
          />
          AM 
        </label>
        <label className='m-2'>
          <input 
            type="radio" 
            value="PM" 
            checked={period === 'PM'} 
            onChange={handlePeriodChange} 
          />
          PM 
        </label>
      </div>
      </div>
    </div>
  );
}

export default SliderTimePicker;
