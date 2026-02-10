import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Demopage from '../pages/Demopage';
import CArd from '../pages/CArd'

export default function Layouts() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Box sx={{ flex: 1, display: "flex", gap: 3, flexWrap: "wrap", backgroundColor: "yellow", }}>
          <Box sx={{ width: "300px", backgroundColor: "black", height: "400px" }}>
            <Demopage />
          </Box>
          <Box sx={{ width: "100px", backgroundColor: "white", height: "400px" }}>
            <Demopage /> </Box>
          <Box sx={{ width: "300px", backgroundColor: "red", height: "400px" }}>
            <Demopage /></Box>
        </Box>
        <Box flex={1}
          sx={{
            backgroundColor: "gray",
            height: "600px",

          }}>
          <CArd />
        </Box>

      </Box>

    </Container>
  )
}
