import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/login/Login'

const AppRoutes = createBrowserRouter([
    {
        path:'/',
        element:<Login />
    }
])

export default AppRoutes