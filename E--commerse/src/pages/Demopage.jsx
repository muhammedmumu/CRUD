import React from 'react'

import useDataGridHooks from '../Components/Tabel/Hook/TableHook';
import DataGrid from '../Components/Tabel/GridTable/DataGrid';
import CardWrapper from '../Components/Wrapper/Card'

export default function Demopage() {
  const fields = ["ID", "Type", "Sq Ft"]
  const { handelFields, Row } = useDataGridHooks({ fields: fields });


  return (
    <>
      <CardWrapper
        headerLeft={<h3>Header Left</h3>}
        headerRight={<h3>Header Right</h3>}
        content={(
          <DataGrid
            columns={handelFields}
            rows={Row}
          />
        )}
        actions={<button>Action</button>}
      />


    </>
  )
}
