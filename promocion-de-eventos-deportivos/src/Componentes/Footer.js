import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; 2024 Eventos Deportivos Bogotá. Todos los derechos reservados.
      </Typography>
    </Container>
  );
};

export default Footer;