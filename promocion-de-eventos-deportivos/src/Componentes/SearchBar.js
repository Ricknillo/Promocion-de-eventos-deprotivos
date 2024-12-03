import React, { useState } from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';


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
    <div style={{ display: "flex", gap: "10px", padding: "20px", width: "95%" }}>
      <TextField
        label="Buscar eventos"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange} // Actualizamos los eventos automáticamente cuando se cambia el input
        fullWidth
      />
      <FormControlLabel control={<Checkbox style={{ color: "#3393FF" }} />} label="Futbol" />
      <FormControlLabel control={<Checkbox style={{ color: "#3393FF" }} />} label="Baloncesto" />
      <FormControlLabel control={<Checkbox style={{ color: "#3393FF" }} />} label="Tenis" />
      <FormControlLabel control={<Checkbox style={{ color: "#3393FF" }} />} label="Running" />
      <FormControlLabel control={<Checkbox style={{ color: "#3393FF" }} />} label="Natacion" />
      {/* <div style={{borderColor: "2px solid red"}}>
      <Checkbox> 
      </Checkbox> 
      </div>
      
      <div>
      <Checkbox> 
      </Checkbox> 
      </div>
    
      <div>
      <Checkbox> 
      </Checkbox> 
      </div>
    
      <div>
      <Checkbox> 
      </Checkbox> 
      </div>
    
      <div>
      <Checkbox> 
      </Checkbox> 
      </div> */}

    </div>
  );
};

export default SearchBar;
