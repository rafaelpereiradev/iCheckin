import { ThemeOptions, createTheme } from '@mui/material';
import icheckinColors from './icheckinColors.json';

const { palette } = icheckinColors;
const customPalette = createTheme().palette;
const ColorTheme: ThemeOptions = {
    palette: {
        primary: {
            main: palette.primary.value,
            contrastText: palette.primary.contrastText
        },
        secondary: {
            main: palette.secondary.value,
            contrastText: palette.secondary.contrastText
        },
        white: customPalette.augmentColor({
            color: {
                main: palette.whites.white,
            },
        }),
    },
};

export default ColorTheme;