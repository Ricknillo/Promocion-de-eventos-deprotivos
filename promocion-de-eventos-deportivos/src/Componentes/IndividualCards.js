import React from "react";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import PoolIcon from "@mui/icons-material/Pool";
import Box from "@mui/material/Box";


const EventList = ({ events }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {events.map((event) => (
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Card sx={{ width: "auto", maxHeight: 400 }}>
            <CardMedia
              sx={{
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              {event.sport === "Fútbol" && (
                <SportsSoccerIcon sx={{ fontSize: 60 }} />
              )}
              {event.sport === "Baloncesto" && (
                <SportsBasketballIcon sx={{ fontSize: 60 }} />
              )}
              {event.sport === "Tenis" && (
                <SportsTennisIcon sx={{ fontSize: 60 }} />
              )}
              {event.sport === "Natación" && <PoolIcon sx={{ fontSize: 60 }} />}
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {event.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Fecha del evento: {event.date}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Ubicación: {event.location}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Requisitos: {event.requirements || "Ninguno"}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Fecha máxima de inscripción: {event.limit_date || "Ninguno"}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Edad mínima: {event.min_age || "Ninguno"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Más información
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EventList;
