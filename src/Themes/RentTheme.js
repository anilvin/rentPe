
import {  createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const RentTheme = createTheme({
    palette: {
        primary: {main:"#009bdf"},
        secondary: purple,
      },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '0.5rem',
          },
        },
      },
    },
  });

  export default RentTheme;