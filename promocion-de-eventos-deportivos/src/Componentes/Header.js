import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h4" component="div" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          Eventos Deportivos Bogotá
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
