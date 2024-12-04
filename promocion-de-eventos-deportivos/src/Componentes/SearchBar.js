import React, { useState } from "react";
import {  TextField, Button, Checkbox } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import {InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from '@mui/material/Grid2';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Manejar cambio en el input y filtrar los eventos
  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  return (
    <Grid
    container
    spacing={2}
    sx={{
      width: "100%",  // Asegura que ocupe todo el ancho disponible
      justifyContent: "center",  // Centra horizontalmente
      alignItems: "center",  // Centra verticalmente
      padding: 0,  // Elimina el padding que rodea al componente
    }}
  >
    <Grid item xs={12} sm={10} md={8} lg={6}>
      <TextField
        label="Buscar eventos"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  </Grid>
);
};

export default SearchBar;