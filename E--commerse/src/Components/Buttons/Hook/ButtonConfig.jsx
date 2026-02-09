import React from 'react'

export default function ButtonConfig(Variant, Color, Size) {

  const variants = ["contained", "outlined", "text"]
  const colors = ["primary", "secondary", "success", "error", "info", "warning"]
  const sizes = ["small", "medium", "large"]

  if (variants.includes(Variant) && colors.includes(Color) && sizes.includes(Size)) {
    return {
      variants: Variant,
      colors: Color,
      sizes: Size,
    };
  } else {
    console.error("Invalid button configuration. Please check the variant, color, and size values.");
    return null;
  }
  return {
    variants,
    colors,
    sizes,
  }
}
