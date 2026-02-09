import {
  PrimaryMedium,
  PrimaryDark,
  PrimaryContrast,
  GreyDark,
  DrawerMainColor,
  Primary,
  PrimaryLight,
  Secondary,
  success,
  SecondaryDark,
  DataGridMain,
  DataGridAltRowColor,
} from "./constants";

const overrides = {
  MuiDataGrid: {
    styleOverrides: {
      root: {
        // Add custom styles for the DataGrid root
        backgroundColor: DataGridMain,
        border: `1px solid ${PrimaryDark}`,
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
      },
      columnHeaders: {
        // Style for column headers
        backgroundColor: PrimaryLight,
        color: PrimaryContrast,
        fontWeight: 'bold',
        fontSize: '14px',
        textTransform: 'uppercase',
      },
      row: {
        // Style for rows
        '&:nth-of-type(odd)': {
          backgroundColor: DataGridAltRowColor,
        },
        '&:hover': {
          backgroundColor: PrimaryMedium,
        },
      },
      cell: {
        // Style for individual cells
        color: GreyDark,
        fontSize: '13px',
        padding: '8px',
      },
    },
  },
};

export default overrides;