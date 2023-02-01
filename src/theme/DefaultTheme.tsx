import { createTheme } from "@mui/material";
import ColorTheme from "./ColorTheme";
import TextFieldTheme from "./root-theme-components/TextFieldTheme";

const { palette } = ColorTheme
const { MuiTextField } = TextFieldTheme

const DefaultTheme = createTheme({
    palette,
    components: {
        MuiTextField
    }
})

export default DefaultTheme