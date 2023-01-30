import { ThemeOptions, createTheme } from '@mui/material';
import colors from './icheckinColors.json';

const { icheckin } = colors;
const customPalette = createTheme().palette;
const ColorTheme: ThemeOptions = {
    palette: {
        primary: {
            main: icheckin.custom.primary.value,
            contrastText: icheckin['white-colors']['white-01'].value,
        },
        secondary: {
            main: icheckin.custom.secondary.value,
            contrastText: icheckin['grey-colors']['grey-01'].value,
        },
        white: customPalette.augmentColor({
            color: {
                main: icheckin['white-colors']['white-01'].value,
            },
        }),
        grey_01: customPalette.augmentColor({
            color: {
                main: icheckin['grey-colors']['grey-01'].value,
            },
        }),
    },
};

export default ColorTheme;
