import React from 'react';
import { data } from '../utils/data';
import Day from './Day';

const Calendar = () => {
  return (
    <div>
      {data.map((item, index) => (
        <Day
          key={item.id}
          date={item.date}
          day={item.day}
          month={item.month}
          events={item.event} // Pass events as props to Day component
          isFirstDay={index === 0}
        />
      ))}
    </div>
  );
};

export default Calendar;
