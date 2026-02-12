import ReactDOM from 'react-dom/client'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import App from '~/App.jsx'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider >
  </React.StrictMode>
)
