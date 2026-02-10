import Box from '@mui/material/Box';
import React from 'react'
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
export default function CardWrapper({ headerLeft, headerRight, content, actions }) {
  return (
    <Card component={Paper}>
      <Box className="card-header" sx={(theme) => theme.customStyles.cardHeader} >
        {headerLeft}
        {headerRight}
      </Box>
      <Divider />
      <Box className="card-content" sx={(theme) => theme.customStyles.cardContent} >
        {content}
      </Box>
      <Divider />
      <Box className="card-actions" sx={(theme) => theme.customStyles.cardActions} >
        {actions}
      </Box>
    </Card >
  )
} 
