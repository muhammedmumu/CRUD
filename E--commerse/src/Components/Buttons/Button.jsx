import Button from '@mui/material/Button';
import React, { Children } from 'react'
import ButtonConfig from './Hook/ButtonConfig';

export default function Buttons({ children, variant, color, size, onClick }) {
  const { variants, colors, sizes } = ButtonConfig(variant, color, size) || {};
  return (
    <>
      <Button
        variant={variants}
        color={colors}
        size={sizes}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  )
}
