import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '~/App.jsx'
import theme from './theme'
import { ToastContainer } from 'react-toastify'

import { Provider } from 'react-redux'
import { store } from '~/redux/store'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persitor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter basename='/'>
    <Provider store={store}>
      <PersistGate persistor={persitor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
          <ToastContainer autoClose={2000} theme="colored" />
        </ThemeProvider >
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
