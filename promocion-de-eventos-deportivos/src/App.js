import React, { useState, useRef, useEffect } from "react";
import "../src/App.css";
import Grid from "@mui/material/Grid2";
import SearchBar from "./Componentes/SearchBar";
import IndividualCards from "./Componentes/IndividualCards";
import SearchBarHeader from "./Componentes/SearchBarHeader";
import SeleccionarDeporte from "./Componentes/SwitchSports";
import HeaderBar from "./Componentes/HeaderBar";
import CardSupe from "./Componentes/CardSupe";
import deportesImage from "./Img/Deportes.jpg";
import Box from "@mui/material/Box";

function App() {
  const [allEvents, setAllEvents] = useState([
    {
      name: "Carrera 5K",
      date: "2023-09-10",
      location: "Parque Simón Bolívar",
      requirements: "Inscripción previa",
      deporte: "Correr",
    },
    {
      name: "Torneo de Fútbol Amateur",
      date: "2024-01-10",
      location: "Estadio Nacional",
      requirements: "Inscripción de equipos",
      deporte: "Fútbol",
    },
    {
      name: "Copa Fútbol Sala",
      date: "2024-02-20",
      location: "Cancha Cubierta La 30",
      requirements: "Jugadores registrados",
      deporte: "Fútbol",
    },
    {
      name: "Partido Benéfico Fútbol",
      date: "2024-03-05",
      location: "Campo Municipal",
      requirements: "Entrada gratuita",
      deporte: "Fútbol",
    },
    {
      name: "Liga de Fútbol Juvenil",
      date: "2024-04-15",
      location: "Complejo Deportivo Los Olivos",
      requirements: "Edad de 15 a 18 años",
      deporte: "Fútbol",
    },
    {
      name: "Torneo Nacional de Baloncesto",
      date: "2024-02-01",
      location: "Polideportivo Sur",
      requirements: "Equipos de 5 jugadores",
      deporte: "Baloncesto",
    },
    {
      name: "Campeonato de Baloncesto 3x3",
      date: "2024-03-22",
      location: "Parque de la 93",
      requirements: "Inscripción en línea",
      deporte: "Baloncesto",
    },
    {
      name: "Clínica de Baloncesto para jóvenes",
      date: "2024-04-05",
      location: "Cancha Parque Central",
      requirements: "Edad entre 10 y 16 años",
      deporte: "Baloncesto",
    },
    {
      name: "Competencia Universitaria de Baloncesto",
      date: "2024-05-10",
      location: "Gimnasio Universitario",
      requirements: "Estudiantes universitarios",
      deporte: "Baloncesto",
    },
    {
      name: "Campeonato Nacional de Natación",
      date: "2024-01-15",
      location: "Piscina Olímpica",
      requirements: "Nadadores federados",
      deporte: "Natación",
    },
    {
      name: "Maratón Acuático",
      date: "2024-02-25",
      location: "Lago de Xochimilco",
      requirements: "Nadadores mayores de 18 años",
      deporte: "Natación",
    },
    {
      name: "Copa de Natación Infantil",
      date: "2024-03-12",
      location: "Centro Acuático Municipal",
      requirements: "Menores de 12 años",
      deporte: "Natación",
    },
    {
      name: "Competencia de Estilos de Natación",
      date: "2024-04-01",
      location: "Piscina Olímpica",
      requirements: "Nadadores de nivel avanzado",
      deporte: "Natación",
    },
    {
      name: "Torneo Internacional de Tenis",
      date: "2024-02-10",
      location: "Club de Tenis Los Pinos",
      requirements: "Jugadores profesionales",
      deporte: "Tenis",
    },
    {
      name: "Copa de Tenis Juvenil",
      date: "2024-03-05",
      location: "Cancha de Tenis El Retiro",
      requirements: "Niños y adolescentes de 12 a 18 años",
      deporte: "Tenis",
    },
    {
      name: "Torneo Abierto de Tenis",
      date: "2024-04-01",
      location: "Estadio de Tenis Central",
      requirements: "Inscripción por grupos de edad",
      deporte: "Tenis",
    },
    {
      name: "Competencia de Dobles de Tenis",
      date: "2024-05-10",
      location: "Club Deportivo de Tenis",
      requirements: "Jugadores en pareja",
      deporte: "Tenis",
    },
  ]);

  const [events, setEvents] = useState(allEvents);
  const [NoHayEventos, setNoHayEventos] = useState(false);
  const switchStatesRef = useRef({});
  const [switchStates, setSwitchStates] = useState({});

  useEffect(() => {
    // Monitorizamos los cambios en switchStatesRef
    const interval = setInterval(() => {
      if (
        JSON.stringify(switchStates) !== JSON.stringify(switchStatesRef.current)
      ) {
        setSwitchStates({ ...switchStatesRef.current });
        console.log(
          "Datos recibidos del componente hijo:",
          switchStatesRef.current
        );
      }
    }, 100);

    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar
  }, [switchStates]);

  const estilosContainer = {
    margin: "1%",
    padding: "1%",
    borderRadius: "3px",
    border: "1px solid black",
    width: "100%",
    boxSizing: "border-box",
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setEvents(allEvents);
      setNoHayEventos(false); // Restauramos el estado de "No hay eventos"
    } else {
      const filteredEvents = allEvents.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setEvents(filteredEvents);
      setNoHayEventos(filteredEvents.length === 0); // Si no hay resultados, mostramos el mensaje
    }
  };

  return (
    <Grid container sx={{ ...estilosContainer, overflowX: "hidden" }}>
      <Grid
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <HeaderBar sx={{ width: "70%" }} />
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid size={12}>
            <CardSupe />
          </Grid>
          <Grid size={6} >
              <SeleccionarDeporte switchStatesAttribute={switchStatesRef} />
            </Grid>

          <Grid size={6}>
            <SearchBar onSearch={handleSearch} />
          </Grid>
        </Grid>
      </Box>
      
      {!NoHayEventos && <IndividualCards events={events} />}
      {NoHayEventos && <div>No se encontraron eventos.</div>}{" "}
      {/* Mensaje cuando no hay eventos */}
    </Grid>
  );
}

export default App;
