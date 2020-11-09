import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserBalance from './containers/UserBalance';
import UserMovements from './containers/UserMovements';


export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Agile Engine Technical Task
        </Typography>
        <UserBalance/>
        <UserMovements/>
      </Box>
    </Container>
  );
}
