import React from 'react';
import './Event.css';

const Event = ({ events, isFirstEventOfDay }) => {
  return (
    <div className='event'>
      {events.map((event, index) => (
        // Render time, taskIcon, taskName, userPhoto and userName
        <div className='event-item' key={index}>
          <div className='event-details'>
            <p className='event-time'>{event.time}</p>
            <img className='event-task-icon' src={event.taskIcon} alt='task' />
            {/* // Apply custom css to first event of the day */}
            <p className={`event-task-name ${isFirstEventOfDay && index === 0 ? 'first-event' : ''}`}>{event.taskName}</p>
          </div>

          <div className='event-user'>
            <img className='event-user-photo' src={event.userPhoto} alt='user' />
            <p className='event-user-name'>{event.userName}</p>
          </div>
        </div>
      ))}
    </div >
  );
};

export default Event;
