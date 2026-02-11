import { extendTheme } from '@mui/material/styles'

//import { lightGreen } from '@mui/material/colors';

const APP_BAR_HEIGHT = '58px'
const PROBLEMS_BAR_HEIGHT = '60px'
const PROBLEM_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${PROBLEMS_BAR_HEIGHT})`
// const COLUMN_HEADER_HEIGHT = '50px'
// const COLUMN_FOOTER_HEIGHT = '56px'
// Create a theme instance.
const theme = extendTheme({
  codesapces: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: PROBLEMS_BAR_HEIGHT,
    boardContentHeight: PROBLEM_CONTENT_HEIGHT,
    // columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    // columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fafafa',
          contrastText: '#222526'
        },
        secondary: {
          main: '#56d1f7',
          contrastText: '#ffffff'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#222526',
          contrastText: '#fafafa'
        },
        secondary: {
          main: '#77e656',
          contrastText: '#ffffff'
        }
      }
    }
  },
  colorSchemeSelector: 'class',
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: 'var(--mui-palette-primary-contrastText)'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'var(--mui-palette-primary-contrastText)',
          fontSize: '0.875rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.dark,
          fontSize: '0.875rem',
          // '.MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.contrastText
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline': {
          //     borderColor: theme.palette.primary.contrastText
          //   }
          //},
          //khong bold vien khi nhap vao input
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important' }
        })
      }
    }
  }
})

export default theme