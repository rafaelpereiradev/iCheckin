import { createTheme } from "@mui/material";
import textTheme from "./TextTheme";
import ColorTheme from './ColorTheme'
import RootTextFieldTheme from './root-theme/RootTextField';

const {palette} = ColorTheme
const { MuiTextField } = RootTextFieldTheme;

export const DefaultTheme = createTheme({
    palette,
    components:{
        MuiTextField,
    }
})
