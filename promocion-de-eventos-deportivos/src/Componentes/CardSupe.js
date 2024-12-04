import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';

export default function BasicCard() {
  return (
    <Card
      sx={{
        border: "2px solid blue",
        borderRadius: "3px",
        marginTop: "3%",
        padding: "16px",
        maxHeight: "430px",
        margin:"2%",
      }}
    >
      <CardContent
        sx={{
          maxHeight: "300px", // Establece un máximo para el alto del contenido
          overflowY: "auto", // Habilita el scroll vertical
        }}
      >
        
        <Typography gutterBottom sx={{ color: "black", fontSize: 20 }}>
        <SportsHandballIcon/> "El deporte es una poderosa herramienta para crecer no solo
          físicamente, sino también mental y emocionalmente. Participar en
          diferentes disciplinas te enseña a superar desafíos, trabajar en
          equipo, y mejorar tu disciplina y enfoque. Más allá de los beneficios
          para la salud, el deporte te brinda la oportunidad de descubrir tu
          potencial, hacer nuevos amigos y aprender lecciones valiosas sobre
          esfuerzo y perseverancia. Inscribirte en un deporte es abrir la puerta
          a nuevas experiencias, aumentar tu confianza y formar parte de una
          comunidad que te apoya mientras persigues tus sueños. ¡Anímate a
          unirte, porque cada paso en el deporte te acerca más a ser la mejor
          versión de ti mismo!"<SportsFootballIcon/>
        </Typography>
      </CardContent>
      <CardActions>
        <a
          href="https://www.mindeporte.gov.co/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Más información / Ministerio de deporte
        </a>
      </CardActions>
    </Card>
  );
}
