import React from 'react';
import Event from './Event';
import './Day.css';

const Day = ({ date, day, month, events, isFirstDay, isLastDay }) => {
  return (
    <div className='day-parent'>
      {/* vertical line */}
      <div className="vertical-line" />

      <div className="day">
        <div className="day-details">
          <p className="day-day">{day}</p>
          <p className="day-month">{month}</p>
        </div>

        <div className="day-header">
          <h2 className={`day-date ${isFirstDay ? 'first-day' : ''}`}>{date}</h2>
        </div>
      </div>

      <div className='event'>
        <Event events={events} isFirstEventOfDay={isFirstDay} /> {/* Pass the events as props to Event component */}
      </div>

      {/* Horizontal Line conditionally */}
      {isLastDay === false && <hr className="horizontal-line" />}
    </div>
  );
};

export default Day;
