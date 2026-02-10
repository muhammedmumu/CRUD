import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import React from 'react'
import CardWrapper from '../Components/Wrapper/Card';

export default function Demo() {
  const left =
    <Box className="left">
      <Typography variant="body1" color="initial">Hey </Typography>
      <IconButton aria-label="" >
        <MenuBookOutlinedIcon />
      </IconButton>
    </Box>

  const right = <Box className="right">
    <Typography variant="body1" color="initial">Hey </Typography>
    <IconButton aria-label="" >
      <MenuBookOutlinedIcon />
    </IconButton>
    <IconButton aria-label="" >
      <MenuBookOutlinedIcon />
    </IconButton>
    <IconButton aria-label="" >
      <MenuBookOutlinedIcon />
    </IconButton>

  </Box>




  return (
    <div>Demo

      <CardWrapper
        headerLeft={left}
        headerRight={right}
      />





    </div>
  )
}
