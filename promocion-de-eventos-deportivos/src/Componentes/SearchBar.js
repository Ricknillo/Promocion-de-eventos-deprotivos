import React, { useState } from "react";
import { TextField, Button, Checkbox } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Manejar cambio en el input y filtrar los eventos
  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Llamar a la función del padre con el valor actualizado
  };

  // La función para manejar el clic en el botón de búsqueda (aunque ya no es esencial)
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px", width: "75%" }}>
      <TextField
        label="Buscar eventos"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange} // Actualizamos los eventos automáticamente cuando se cambia el input
        fullWidth
      />
      <Checkbox> 
        Futbol
      </Checkbox>  
      <Checkbox>  
       Baloncesto
      </Checkbox>
      <Checkbox>
        Natacion
      </Checkbox>
      <Checkbox>
        Tenis
      </Checkbox>
      <Checkbox>
       Running
      </Checkbox>
    </div>
  );
};

export default SearchBar;
