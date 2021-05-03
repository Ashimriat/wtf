import { createMuiTheme } from '@material-ui/core';
import generalTheme from './general';


export default createMuiTheme({
  palette: {
    primary: {
      main: '#09348f',
    },
    secondary: {
      main: '#07564a',
    },
  },
}, generalTheme);
