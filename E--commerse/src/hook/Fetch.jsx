import { useState, useEffect } from 'react';
import {
  rowData as mockRowData,
  colomunData as mockColomunData,
  cardData as mockCardData,
  listData as mockListData
} from '../Mock/MOCK_DATA';

export default function useFetch() {
  const [data, setData] = useState({
    colomun: [],
    row: [],
    card: [],
    list: []
  });

  const fetchWithFallback = async (url, fallbackData) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      return fallbackData;
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      const [colomunData, rowData, cardData, listData] =
        await Promise.all([
          fetchWithFallback('http://localhost:4000/colomunData', mockColomunData),
          fetchWithFallback('http://localhost:4000/rowData', mockRowData),
          fetchWithFallback('http://localhost:4000/cardData', mockCardData),
          fetchWithFallback('http://localhost:4000/listData', mockListData),
        ]);

      setData({
        colomun: colomunData,
        row: rowData,
        card: cardData,
        list: listData
      });
    };

    fetchAll();
  }, []);

  return data;
}
