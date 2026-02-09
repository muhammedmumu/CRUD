import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Buttons from '../Components/Buttons/Button';
import Fetch from '../hook/Fetch.jsx';

export default function CArd() {
  const data = Fetch();

  const content = (data.card || []).map((item) => (
    <Card key={item.id} variant="outlined">
      <CardContent>
        <h3>{item.propertyType}</h3>
        <p>{item.bedrooms}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Buttons variant="outlined" color="primary" size="small">Learn More</Buttons>
      </CardActions>
    </Card>
  ));
  return (
    <div style={{ display: 'flex', gap: '16px', height: '100%', alignItems: 'center' }}>
      {content}
    </div>

  )
}
