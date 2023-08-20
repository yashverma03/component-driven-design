import React from 'react';
import Event from './Event';
import './Day.css';

const Day = ({ date, day, month, events, isFirstDay, isLastDay }) => {
  return (
    <div className='day-parent'>
      {/* Vertical line */}
      <div className='vertical-line' />

      {/* Render day, month and date */}
      <div className='day'>
        <div className='day-details'>
          <p className='day-day'>{day}</p>
          <p className='day-month'>{month}</p>
        </div>

        <div className='day-header'>
          {/* // Apply custom css to first day of the calendar */}
          <h2 className={`day-date ${isFirstDay ? 'first-day' : ''}`}>{date}</h2>
        </div>
      </div>

      {/* Render the Event component, passing the events as props */}
      <div className='event'>
        <Event events={events} isFirstEventOfDay={isFirstDay} />
      </div>

      {/* Horizontal line (conditionally) */}
      {isLastDay === false && <hr className='horizontal-line' />}
    </div>
  );
};

export default Day;
