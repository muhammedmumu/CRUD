import Box from '@mui/material/Box';
import React from 'react'
import CardWrapper from '../Components/Wrapper/Card'
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography'
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import Buttons from '../Components/Buttons/Button';
import Card from '@mui/material/Card';
export default function KpiCards() {
  const left = <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
    <Box>
      <FilterVintageIcon />
    </Box>
    <Box>
      <Typography variant="h5" color="initial">
        Kpi Cards
      </Typography>
    </Box>
  </Box>;

  const right = <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
    <Box>
      <IconButton aria-label="" >
        <DeleteIcon />
      </IconButton>
    </Box>
    <Box>
      <IconButton >
        <AddIcon />
      </IconButton>

    </Box>
  </Box>

  const Body = <Card variant="outlined" sx={{ mt: 2 }}>
    <Typography variant="h6" color="initial">
      Body
    </Typography>
  </Card>

  const Footer = <Buttons
    variant="contained"
    color="primary"
    size="small"
  >Good</Buttons>







  return (
    <CardWrapper
      headerLeft={left}
      headerRight={right}
      content={Body}
      actions={Footer}
    />

  )
}
