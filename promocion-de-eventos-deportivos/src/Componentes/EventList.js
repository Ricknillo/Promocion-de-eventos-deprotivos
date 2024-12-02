import React from 'react';
import EventCard from './EventCard';


const EventList = ({ events }) => {
    return (
      <div>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    );
  };
  
  export default EventList;