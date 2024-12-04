import React, { useState } from "react";
import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import PoolIcon from "@mui/icons-material/Pool";

const SeleccionarDeporte = ({ switchStatesAttribute }) => {
  const [switchStates, setSwitchStates] = useState({
    Futbol: { isActive: true, icon: <SportsSoccerIcon /> },
    Baloncesto: { isActive: true, icon: <SportsBasketballIcon /> },
    Tenis: { isActive: true, icon: <SportsTennisIcon /> },
    Natacion: { isActive: true, icon: <PoolIcon /> },
  });

  const handleSwitchChange = (name) => (event) => {
    const newState = {
      ...switchStates,
      [name]: { ...switchStates[name], isActive: event.target.checked },
    };
    setSwitchStates(newState);

    if (switchStatesAttribute) {
      const simplifiedState = Object.keys(newState).reduce((acc, key) => {
        acc[key] = newState[key].isActive;
        return acc;
      }, {});
      switchStatesAttribute.current = simplifiedState;
    }
  };

  return (
    <Box  sx={{
      border: "1px solid black",
      borderRadius: "3px",
      margin: "4%",
      marginTop: "2%",
      padding: "16px",
      maxHeight: "500px",
      
    }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 6, md: 12 }}
        alignItems="center"
        justifyContent="center"
       
      >
        <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" component="h1">
            Selecciona tu deporte
          </Typography>
        </Grid>

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {Object.keys(switchStates).map((key) => (
            <Grid
              item
              xs={3}
              key={key}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography>{key}</Typography>

              {switchStates[key].icon}
              <Switch
                checked={switchStates[key].isActive}
                onChange={handleSwitchChange(key)}
              />
            </Grid>
          ))}
        </Grid>

        {/* <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" component="h2">
          Current States:
        </Typography>
        <pre>{JSON.stringify(switchStates, null, 2)}</pre>
      </Grid> */}
      </Grid>
    </Box>
  );
};

export default SeleccionarDeporte;
