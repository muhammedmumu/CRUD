import Box from '@mui/material/Box';
import React from 'react'
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
export default function CardWrapper({ headerLeft, headerRight, content, actions }) {
  return (
    <Card component={Paper}>
      <Box
        className="card-header"
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#0da9eb0f',
          borderBottom: '1px solid #D5D6D8',
        }}
      >
        {headerLeft}
        {headerRight}
      </Box>
      <Divider />
      <Box
        className="card-content"
        sx={{
          p: 2,
        }}
      >
        {content}
      </Box>
      <Divider />
      <Box
        className="card-actions"
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 1,
          borderTop: '1px solid #D5D6D8',
        }}
      >
        {actions}
      </Box>
    </Card >
  )
} 
