import React from 'react'
import Box from '@mui/material/Box';
import useDataGridHooks from '../Components/Tabel/Hook/TableHook';
import DataGrid from '../Components/Tabel/GridTable/DataGrid';


export default function Demopage() {
  const fields = ["ID", "Type", "Sq Ft"]
  const { handelFields, Row } = useDataGridHooks({ fields: fields });


  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <DataGrid
          rows={Row}
          columns={handelFields}
        />
      </Box >
    </>
  )
}
