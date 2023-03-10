import { createTheme, makeStyles } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux/es/exports';
// import store from './Components/store';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CombinedReducers from './Components/Reducers/CombinedReducers';
import { FireBaseContext } from './Components/FireBaseContext/FireBaseContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#920e8e',
    },
    secondary: {
      main: '#00ab55',
    },
    error: {
      main: '#ff4842',
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      // 'sans-serif',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
});

const store: any = configureStore({ reducer: CombinedReducers });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
