import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack';
import routes from './routes'
import DefaultTheme from '../theme/DefaultTheme';

const AppRoutes = () => {
    return (
        <ThemeProvider theme={DefaultTheme}> 
            <RouterProvider router={routes} />
       </ThemeProvider>
    )
}

export default AppRoutes