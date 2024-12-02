import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const EventCard = ({ event }) => {
  return (
    <Card style={{ margin: '20px' }}>
      
      <CardContent>
        <Typography variant="h5">{event.name}</Typography>
        <Typography color="textSecondary">{event.date}</Typography>
        <Typography>{event.location}</Typography>
        <Typography>{event.requirements}</Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
