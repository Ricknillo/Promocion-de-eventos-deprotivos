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
        border: "2px solid blue",
        borderRadius: "3px",
        margin: "4%",
        marginTop: "2%",
       
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
      }}
    >
      <Grid size={12}>
        <Typography variant="h5" component="h1" m={1}>
          Ingresa una palabra clave para realizar la busqueda
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "4%",
            marginBottom: "4%",
          }}
        >
          <ContentPasteSearchIcon />
          <ScoreboardIcon />
          <GolfCourseIcon />
          <RollerSkatingIcon />
          <SurfingIcon />
        </Box>
      </Grid>

      <Grid size={8} m={2}>
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
