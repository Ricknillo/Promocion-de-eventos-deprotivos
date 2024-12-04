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
//import Peticion from "./ConsultaBBDD/fetchACT";
//import fetchJsonhttp from "./ConsultaBBDD/fetchJsonhttp"

function App() {
  const [respuestaDatos, setRespuestaDatos] = useState([]);
  const [events, setEvents] = useState([]);
  const [NoHayEventos, setNoHayEventos] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const switchStatesRef = useRef({});

  const [switchStates, setSwitchStates] = useState({});

  const initialSwitchStates = {
    Fútbol: true,
    Baloncesto: true,
    Tenis: true,
    Natación: true,
  };

  const estilosContainer = {
    margin: "1%",
    padding: "1%",
    borderRadius: "3px",
    border: "2px solid blue",
    width: "100%",
    boxSizing: "border-box",
  };

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

  //console.log("Datos de prueba:", allEvents);



  const fetchEvents = async (activeSports) => {
    try {
      // Si no hay deportes activos, no hacer la petición
      if (activeSports.length === 0) {
        setEvents([]);
        setNoHayEventos(true);
        return;
      }

      const response = await fetch("http://127.0.0.1:8000/json_events/");
      if (!response.ok) {
        throw new Error("Error en la petición: " + response.statusText);
      }

      const data = await response.json();
      console.log("respuesta de la primera petición, sin filtros", data);



      // Filtrar los eventos por los deportes activos
      const filteredBySport = data.filter((event) =>
        activeSports.includes(event.sport)
      );

      setEvents(filteredBySport);
      setNoHayEventos(filteredBySport.length === 0);
      setRespuestaDatos(data); // Guardamos todos los eventos para futuras búsquedas
    } catch (error) {
      console.error("Error:", error);
    }
  };





  // Filtrar eventos por búsqueda (nombre o deporte)
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setEvents(respuestaDatos); // Si no hay búsqueda, se muestran todos los eventos filtrados por deporte
      setNoHayEventos(false);
    } else {
      const filteredEvents = events.filter(
        (event) =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.sport.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setEvents(filteredEvents);
      setNoHayEventos(filteredEvents.length === 0);
    }
  };

  useEffect(() => {
    console.log("Datos recibidos del componente hijo:", switchStates);
  }, [switchStates]); // Observa el cambio en switchStates



  // Manejar cambios en los switches
  const handleSwitchChange = (switchState) => {
    switchStatesRef.current = switchState;

    const activeSports = Object.keys(switchState).filter(
      (sport) => switchState[sport] === true
    );

    // Realizar una nueva petición con los deportes activos
    fetchEvents(activeSports);
  };

  // Llamada inicial a la URL con todos los deportes activos
  useEffect(() => {
        switchStatesRef.current = initialSwitchStates;

    // Filtrar eventos por los deportes activos
    const activeSports = Object.keys(initialSwitchStates).filter(
      (sport) => initialSwitchStates[sport] === true
    );

    fetchEvents(activeSports);
  }, []); // Se ejecuta solo una vez cuando se carga la página

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
          <Grid size={6}>
            <SeleccionarDeporte switchStatesAttribute={handleSwitchChange} />
          </Grid>

          <Grid size={6}>
            <SearchBar onSearch={handleSearch} />
          </Grid>
        </Grid>
      </Box>
      {!NoHayEventos && (
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <IndividualCards events={events} />
        </Box>
      )}
      {NoHayEventos && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          <div>No se encontraron eventos.</div>
        </Box>
      )}{" "}
    </Grid>
  );
}

export default App;
