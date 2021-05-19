import React from 'react'
import { Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/'
import { theme } from 'styles/theme'
import GlobalStyle from 'styles/global'
import Routes from 'routes'
import history from 'services/history'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App
