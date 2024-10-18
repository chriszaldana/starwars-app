import { Box, Button, Image} from "@chakra-ui/react"
import { useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { MyAppContext } from "../../context/MyAppContext"
import Jedi from '../../images/jediorderbadge.svg'



const NavBar = () => {

  const navigate = useNavigate()
  const {name} = useContext(MyAppContext)

  return (  

    <>
    <Box display='flex' alignItems='center' justifyContent='center'>
    <Image boxSize='100px' src={Jedi} />
    </Box>
        <Box display='flex' alignItems='center' justifyContent='right' w='100%'p='5' bg='red'>
          <p>Bienvenido {name}</p>
          <Button onClick={() => navigate('login')} me='5'>Log in</Button>
          <Button onClick={() => navigate('signup')} me='5'>Sign up</Button>
        </Box>
        <Outlet/>
    </>
  )
}

export default NavBar