import { Box } from '@chakra-ui/react'
import '../src/css/App.css'
import AppRouter from './router/AppRouter'
import bgsw from './images/bgsw.jpg'

function App() {
  

  return (
    <>
    <Box 
    bgImage={`url(${bgsw})`}
    bgSize='cover'
    bgPosition='center'
    bgRepeat='no-repeat'
    minHeight="100vh" 
    color="white">
      <AppRouter />
    </Box>
      
    </>
  )
}

export default App
