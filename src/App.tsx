import { ThemeProvider } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppRoutes from './routes/provider'
import { DefaultTheme } from './theme/DefaultTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={DefaultTheme}>
    <AppRoutes />
    </ThemeProvider>
  )
}

export default App
