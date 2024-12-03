import React from 'react';
import Grid from '@mui/material/Grid';
import EventCard from './EventCard';

const EventList = ({ events }) => {
  return (
    <Grid container spacing={2}>
      {events.map((event) => (
        <Grid item xs={12} sm={6} key={event.id}>
          <EventCard event={event} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventList;
