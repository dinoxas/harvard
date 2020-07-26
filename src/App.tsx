import React from 'react';
import { Typography } from '@material-ui/core';
import Images from './components/Images';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg' style={{ marginTop: '3rem' }}>
        <Typography variant='h4' align='center' component='h1'>
          Harvard Art Museum
        </Typography>
        <Typography variant='subtitle1' align='center'>
          Check out these awesome collections!
        </Typography>

        <Images />
      </Container>
    </>
  );
};

export default App;
