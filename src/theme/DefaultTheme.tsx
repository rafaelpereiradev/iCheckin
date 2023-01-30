import { createTheme } from '@mui/material';
import ColorTheme from './ColorTheme';
const { palette } = ColorTheme;

export const DefaultTheme = createTheme({
  palette,
  components: {
  }
});


export default DefaultTheme