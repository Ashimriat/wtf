import { createMuiTheme } from '@material-ui/core';
import generalTheme from './general';


export default createMuiTheme({
  palette: {
    primary: {
      main: '#3d7bff',
    },
    secondary: {
      main: '#12ab95',
    },
  },
}, generalTheme);
