import { MuiThemeProvider, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from '../store';
import AppComponent from '../App';
import { lightTheme, darkTheme } from './theme';



const App = () => {
  const [theme, setTheme] = useState({});

  const switchTheme = () => {
    const newTheme = theme === 'light' ? darkTheme : lightTheme;
    setTheme(newTheme);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <AppComponent />
      </Provider>
      <Button
        color={'primary'}
        variant={'outlined'}
        onClick={switchTheme}
      >
        {'Сменить тему'}
      </Button>
    </MuiThemeProvider>
  );
};

render(<App />, document.querySelector('#app'));
