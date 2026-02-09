import { useMemo } from "react";
import Fetch from '../../../hook/Fetch';






const useDataGridHooks = ({ onSort, onFilter, onPageChange, sortingMode, fields }) => {

  const data = Fetch();
  const colomuns = data.colomun;
  const Row = data.row;


  const handleSortModelChange = (sortModel) => {
    if (onSort) {
      onSort(sortModel);
    }
  };
  const handleFilterModelChange = (filterModel) => {
    if (onFilter) {
      onFilter(filterModel);
    }
  };


  const handelFields = useMemo(() => {
    if (fields) {
      return colomuns.filter(col => fields.includes(col.headerName))

    }
    if (fields === "Half") {
      const half = Math.ceil(colomuns.length / 2)
      return colomuns.slice(0, half)
    }
    else {
      return colomuns
    }
  }, [fields, colomuns]);

  return {
    handleSortModelChange,
    handleFilterModelChange,
    handelFields,
    Row
  };
};

export default useDataGridHooks;