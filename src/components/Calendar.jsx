import React from 'react';
import { data } from '../utils/data';
import Day from './Day';

const Calendar = () => {
  return (
    <div>
      {/* Loop over all objects in data.js file */}
      {data.map((item, index) => (
        // Pass different objects as props to Day.jsx component
        <Day
          key={item.id}
          date={item.date}
          day={item.day}
          month={item.month}
          events={item.event}
          isFirstDay={index === 0}  // For checking first day of calendar
          isLastDay={index === data.length - 1}  // For checking last day of calendar
        />
      ))}
    </div>
  );
};

export default Calendar;
