import React, { useState } from "react";
import { TextField, Button, Checkbox, Box, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid2";
import Paper from '@mui/material/Paper';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Manejar cambio en el input y filtrar los eventos
  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "3px",
        margin: "4%",
        marginTop: "2%",
        //padding: "16px",
        //height: "430px",
        justifyContent: "center", // Centra horizontalmente
        alignItems: "center", // Centra verticalmente
        padding: 0, // Elimina el padding que rodea al componente
      }}
    >
      <Grid size={6}>
        <Typography>Ingresa una palabra clave para realizar la busqueda</Typography>
      </Grid>
      <Grid size={6}>
        <Paper elevation={0}>square corners</Paper>
      </Grid>
      <Grid size={12}>
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
    </Box>
  );
};

export default SearchBar;
