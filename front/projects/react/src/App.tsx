import React, { useState } from 'react';
import { Button, MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import themesObject from './themes';
import store from './store';
import TestComponent from './components/TestComponent';


const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  return (
    <MuiThemeProvider theme={themesObject[theme as keyof typeof themesObject]}>
      <Provider store={store}>
        <Button
          color={'primary'}
          variant={'outlined'}
        >
          {'Сменить тему'}
        </Button>
        <TestComponent />
      </Provider>
    </MuiThemeProvider>
  );
};


export default App;
