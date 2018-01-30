import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui/styles'

import App from './components/App/App'
import theme from '../modules/theme'

window.__memberDetail = {};

ReactDOM.hydrate((
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
),document.querySelector('#root'));