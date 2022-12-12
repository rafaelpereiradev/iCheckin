import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import routes from './routes'

const AppRoutes = () => {
    // configurar theme
    return (
        // <ThemeProvider theme=''> 
            <RouterProvider router={routes} />
        // </ThemeProvider>
    )
}

export default AppRoutes