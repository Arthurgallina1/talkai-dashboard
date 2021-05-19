import React from 'react'
import { ThemeProvider, Toolbar, AppBar, Typography } from '@material-ui/core/'
import Orders from 'components/Orders'
import { theme } from 'theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Typography variant="h6">Multi-Step Form</Typography>
          </Toolbar>
        </AppBar>
        <Orders />
      </div>
    </ThemeProvider>
  )
}

export default App
