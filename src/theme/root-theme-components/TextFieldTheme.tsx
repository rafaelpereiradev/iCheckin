import { Components, Theme, useTheme } from '@mui/material';
import TextFieldThemeVariants from '../variants/TextFieldThemeVariants';
import icheckinColors from '../icheckinColors.json'

const { palette } = icheckinColors
const TextFieldTheme: Components<Omit<Theme, 'components'>> = {
    MuiTextField: {
        variants: TextFieldThemeVariants,
        styleOverrides: {
            root: {
                '& .MuiOutlinedInput-root.Mui-focused': {
                    "& > fieldset": {
                        borderColor: palette.secondary.value
                    }
                },
                '& .MuiOutlinedInput-root':{
                    borderRadius:'8px',
                    height:'50px'
                }
            }
        }
    }
}
export default TextFieldTheme