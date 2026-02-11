import ReactDOM from 'react-dom/client'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import App from '~/App.jsx'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider >
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </React.StrictMode>
)
