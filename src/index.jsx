import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './components/App';

const red = '#F00';

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        color: red,
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: red,
        color: 'white',
      },
    },
    MuiFormLabel: {
      root: {
        color: red,
        '&$focused': {
          color: red,
        },
      },
      focused: {},
    },
    MuiOutlinedInput: {
      root: {
        '&$focused': {
          borderColor: red,
        },
      },
      focused: {},
      notchedOutline: {
        borderColor: red,
      },
    },
  },
  palette: {
    text: {
      primary: red,
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
