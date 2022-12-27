import { Components, Theme } from '@mui/material';

const RootTextFieldTheme: Components<Omit<Theme, 'components'>> = {
    MuiTextField: {
        styleOverrides: {
            root: {
                borderRadius: '4px',
                backgroundColor: '#fff'
             
            },
        },
    },
};

export default RootTextFieldTheme;