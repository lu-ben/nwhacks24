import { useState } from 'react';

function SliderTimePicker() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(30);
  const [period, setPeriod] = useState('AM');

  const handlePeriodChange = (e: any) => {
    setPeriod(e.target.value);
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
          onChange={(e: any) => setHour(e.target.value)}
        />
      </div>
      <div>
        <label>Minute:</label>
        <input className='w-full'
          type="range" 
          min="0" 
          max="59" 
          value={minute} 
          onChange={(e: any) => setMinute(e.target.value)}
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
