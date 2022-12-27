import { createTheme, ThemeOptions } from '@mui/material/styles';
import tokens from './tokens.json';

const { colors } = tokens;
const customPalette = createTheme().palette;
const theme: ThemeOptions = {
    palette: {
        primary: {
            main: colors.custom.primary.value,
            contrastText: colors.shades.white.value,
        },
        secondary: {
            main: colors.custom.secondary.value,
            contrastText: colors.greys.grey.value,
        },
        error: {
            main: colors.custom.error.value,
        },
        info: {
            main: colors.custom.info.value,
        },
        success: {
            main: colors.custom.success.value,
        },
        warning: {
            main: colors.custom.warning.value,
        },
        // accent_one: customPalette.augmentColor({
        //     color: {
        //         main: colors.custom['accent-one'].value,
        //     },
        // }),
        // accent_two: customPalette.augmentColor({
        //     color: {
        //         main: colors.custom['accent-two'].value,
        //     },
        // }),
        // accent_three: customPalette.augmentColor({
        //     color: {
        //         main: colors.custom['accent-three'].value,
        //     },
        // }),
        // black: customPalette.augmentColor({
        //     color: {
        //         main: colors.shades.black.value,
        //     },
        // }),
        // lighten_1: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys['lighten-1'].value,
        //     },
        // }),
        // lighten_2: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys['lighten-2'].value,
        //     },
        // }),
        // lighten_3: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys['lighten-3'].value,
        //     },
        // }),
        // lighten_4: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys['lighten-4'].value,
        //     },
        // }),
        // lighten_5: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys['lighten-5'].value,
        //     },
        // }),
        // grey_1: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys.grey.value,
        //     },
        // }),
        // darken_1: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys['darken-1'].value,
        //     },
        // }),
        // darken_2: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys['darken-2'].value,
        //     },
        // }),
        // darken_3: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys['darken-3'].value,
        //     },
        // }),
        // darken_4: customPalette.augmentColor({
        //     color: {
        //         main: colors.greys['darken-4'].value,
        //     },
        // }),
    },
};

export default theme;
