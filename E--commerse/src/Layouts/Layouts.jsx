import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Demopage from '../pages/Demopage';
import CArd from '../pages/CArd';
export default function Layouts() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
        <Demopage />
        <CArd />
      </Box>
    </Container>
  )
}
