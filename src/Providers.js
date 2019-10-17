import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App'

const theme = createMuiTheme();

function Providers() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

export default Providers;