import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const EventList = ({ events }) => {
  return (
    <Grid container spacing={2}>
      {events.map((event) => (
        <Grid item xs={12} sm={6} md={4} key={event.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={event.image || '/static/images/cards/default-image.jpg'} // Reemplaza con una imagen predeterminada si no hay imagen
              title={event.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {event.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Fecha: {event.date}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Ubicación: {event.location}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Requisitos: {event.requirements || 'Ninguno'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small">Más información</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EventList;
