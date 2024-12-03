import React from 'react';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const EventCard = ({ event }) => {
  return (
    <Card style={{ margin: '20px', gap: "10px", padding: "20px", width: "45%"  }}>
      {/* <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
      <MyCard /> </Grid> 
      <Grid item xs={12} sm={6}> <MyCard /> </Grid> </Grid> */}
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
