import { Box } from '@chakra-ui/react'
import '../src/css/App.css'
import AppRouter from './router/AppRouter'

function App() {
  

  return (
    <>
    <Box bg="black" minHeight="100vh" color="white">
      <AppRouter />
    </Box>
      
    </>
  )
}

export default App
