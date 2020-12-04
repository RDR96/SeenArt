import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: "#E6B802"
    },
    secondary: {
      main: "#07435E"
    },
    text: {
      primary: colors.common.black,
      secondary: colors.common.white   
    }
  },
  shadows,
  typography
});

export default theme;
