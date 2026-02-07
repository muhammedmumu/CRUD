import React, { useState, useEffect } from 'react'
import MOCK_DATA from '../Mock/MOCK_DATA'

export default function Fetch() {
  const [data, setData] = useState([])

  useEffect(() => {
    // Use MOCK_DATA directly since it's already an array
    if (MOCK_DATA && Array.isArray(MOCK_DATA)) {
      setData(MOCK_DATA)
      console.log(MOCK_DATA)
    }
  }, [])

  return data;
}