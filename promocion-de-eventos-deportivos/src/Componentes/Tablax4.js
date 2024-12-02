import React from 'react';
import { Grid, Container } from '@mui/material';

const Tablax4 = ({ ConstantePadre }) =>  {
   
    const Nombre = ConstantePadre;
  
  
    return (
    <Container>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ background: '#ececec', padding: '40px', textAlign: 'center',marginBlock:'10px' }}>{Nombre.items[0]}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ background: '#ececec', padding: '40px', textAlign: 'center',marginBlock:'10px' }}>{Nombre.items[1]}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ background: '#ececec', padding: '40px', textAlign: 'center',marginBlock:'10px'  }}>{Nombre.items[2]} </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ background: '#ececec', padding: '40px', textAlign: 'center',marginBlock:'10px'  }}>{Nombre.items[3]}</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Tablax4;
