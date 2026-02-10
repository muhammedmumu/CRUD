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
  DataGridAltRowColor, FilterTitle,
} from "./constents";


const Override = (theme) => ({
  MuiBox: {
    styelOverrides: {
      root: {
        "&.card-header": {
          background: "#f1f1f1",

        }
      }
    }
  },
  customStyles: {
    cardHeader: {
      padding: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardContent: {
      padding: 2,
    },
    cardActions: {
      padding: 2,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 1,
    },
  }

})

export default Override;