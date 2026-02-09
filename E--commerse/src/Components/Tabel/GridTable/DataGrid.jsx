import React from 'react';
import PropTypes from "prop-types";
import { DataGrid } from '@mui/x-data-grid';
import useDataGridHooks from '../Hook/TableHook';

export default function DataTable({
  columns,
  rows,
  height = 400,
  onSort,
  onFilter,
  onPageChange,
  pagination,
  paginationMode = 'client',
  sortingMode = 'client',
  rowsPerPageOptions = [10, 25, 50],
  disableColumnFilter = false,
  disableColumnMenu = true,
  sortingOrder = ['asc', 'desc'],
  onSelectionModelChange,
  outerStyles = {},
  ...rests
}) {
  const { handleSortModelChange, handleFilterModelChange } = useDataGridHooks(
    { onSort, onFilter, onPageChange, sortingMode, columns }
  );
  return (
    <div style={{ height: height || 400, width: '100%', ...outerStyles }}>
      <DataGrid
        columns={columns}
        rows={rows}
        onSortModelChange={handleSortModelChange}
        onFilterModelChange={handleFilterModelChange}
        onPageChange={onPageChange}
        paginationMode={paginationMode}
        sortingMode={sortingMode}
        rowsPerPageOptions={rowsPerPageOptions}
        onSelectionModelChange={onSelectionModelChange}
        disableColumnFilter={disableColumnFilter}
        disableColumnMenu={disableColumnMenu}
        sortingOrder={sortingOrder}
        {...rests}
      />
    </div>
  );
}

DataTable.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  rowCount: PropTypes.number,
  rowLimit: PropTypes.number,
  rowHeight: PropTypes.number,
  pagination: PropTypes.bool,
  onPageChange: PropTypes.func,
  onSort: PropTypes.func,
  onFilter: PropTypes.func,
  onChecked: PropTypes.func,
  showCellRightBorder: PropTypes.bool,
  showColumnRightBorder: PropTypes.bool,
  disableColumnFilter: PropTypes.bool,
  disableColumnMenu: PropTypes.bool,
  loading: PropTypes.bool,
}
DataTable.defaultProps = {
  rowsPerPageOptions: [10, 25, 50],
  sortingOrder: ["asc", "desc"],
  rowHeight: 32,
  sortingMode: "server",
  disableColumnMenu: true,
  paginationMode: "server",
  showColumnRightBorder: true
};
