/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Header from "./Componentes/Header";
import SearchBar from "./Componentes/SearchBar";
import EventList from "./Componentes/EventList";
//import Footer from "./Componentes/Footer";
//import RecipeReviewCard from "./Componentes/Tarjeta";
//import Tablax4 from "./Componentes/Tablax4";
//import Scroll from "./Componentes/Scroll";

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

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      // Si no hay término de búsqueda, restauramos todos los eventos
      setEvents(allEvents);
      setNoHayEventos(false);  // Restauramos el estado de "No hay eventos"
    } else {
      // Filtramos los eventos según el término de búsqueda
      const filteredEvents = allEvents.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setEvents(filteredEvents);
      setNoHayEventos(filteredEvents.length === 0); // Si no hay resultados, mostramos el mensaje
    }
  };



  return (
    <div style={{
      borderRadius: '3px',
      border: '1px solid black',
      margin: '1%',
    }}>
      <Header style={{ display: "flex", justifyContent: "center", alignItems: "center" }}/>
      <SearchBar onSearch={handleSearch} />
      {/* Mostrar eventos solo si NoHayEventos es falso */}
      {!NoHayEventos && <EventList events={events} />}
      {NoHayEventos && <div>No se encontraron eventos.</div>} {/* Mensaje cuando no hay eventos */}
    </div>
  );
}


export default App;