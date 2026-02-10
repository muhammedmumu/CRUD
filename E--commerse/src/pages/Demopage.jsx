import React from 'react'

import useDataGridHooks from '../Components/Tabel/Hook/TableHook';
import DataGrid from '../Components/Tabel/GridTable/DataGrid';
import CardWrapper from '../Components/'

export default function Demopage() {
  const fields = ["ID", "Type", "Sq Ft"]
  const { handelFields, Row } = useDataGridHooks({ fields: fields });


  return (
    <>

    </>
  )
}
