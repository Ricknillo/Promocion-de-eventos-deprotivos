import React, { useState } from "react";
import { TextField, Button, Checkbox, Box, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import RollerSkatingIcon from "@mui/icons-material/RollerSkating";
import SurfingIcon from "@mui/icons-material/Surfing";

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
      <Grid size={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginBottom: "3%",
            marginTop: "1%",
          }}
        >
          <Paper
            sx={{
              width: "90%",
            }}
            elevation={3}
          >
            <Typography variant="h5" component="h1">
              Ingresa una palabra clave para realizar la busqueda
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent:"space-around",
            marginTop: "4%",
            marginBottom: "4%"
          }}
        >
          <ContentPasteSearchIcon />
          <ScoreboardIcon />
          <GolfCourseIcon />
          <RollerSkatingIcon />
          <SurfingIcon />
        </Box>
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
