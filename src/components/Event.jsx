import React from 'react';
import './Event.css';

const Event = ({ events }) => {
  return (
    <div className='event'>
      {events.map((event, index) => (
        <div className='event-item' key={index}>
          <div className='event-details'>
            <p className='event-time'>{event.time}</p>
            <img className='event-task-icon' src={event.taskIcon} alt='task' />
            <p className='event-task-name'>{event.taskName}</p>
          </div>
          
          <div className='event-user'>
            <img className='event-user-photo' src={event.userPhoto} alt='user' />
            <p className='event-user-name'>{event.userName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
