import React from 'react';
import Event from './Event';
import './Day.css';

const Day = ({ date, day, month, events }) => {
  return (
    <div className='day-parent'>
      <div className="day">
        <div className="day-details">
          <p className="day-day">{day}</p>
          <p className="day-month">{month}</p>
        </div>

        <div className="day-header">
          <h2 className="day-date">{date}</h2>
        </div>
      </div>

      <div className='event'>
        <Event events={events} /> {/* Pass the events as props to Event component */}
      </div>
    </div>
  );
};

export default Day;
