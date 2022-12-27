import { ThemeProvider } from '@mui/material'
import './App.css'
import AppRoutes from './routes/provider'
import { DefaultTheme } from './theme/DefaultTheme'

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
    <AppRoutes />
    </ThemeProvider>
  )
}

export default App
