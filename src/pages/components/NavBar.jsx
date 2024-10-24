import { Box, Button, Flex, Image, Spacer,Text} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { MyAppContext } from "../../context/MyAppContext"
import SWLogo from '../../images/SWlogo.png'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import appFirebase from "../../firebase/config"

const auth = getAuth(appFirebase)



const NavBar = () => {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const {name} = useContext(MyAppContext)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged (auth, (user) => {
      if (user) {
        setUser(user)
      }else{
        setUser(null)
      }
    })

    return () => unsubscribe()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  const handleLogOut = () =>{
    signOut(auth).then(() => {
      navigate('/')
      setUser(null)
    })
  }
  

  return (  

    <>
    <Box display='flex' alignItems='center' justifyContent='center'>
     <Link to='/'>
      <Image boxSize='100px' src={SWLogo} alt='Star Wars Logo'/>
     </Link>
     
    
    </Box>
    {user ? (
      <Box  w='100%'p='5' bg='red'>
        <Flex alignItems="center" justifyContent='center'>
          <Box textAlign='center'>
            <Text>Bienvenido</Text>
            <Text as='b'> {name} </Text>
          </Box>
          <Spacer />
          <Box>
            <Button me='5' onClick={() => navigate('/characters')}>Characters</Button>
            <Button me='5'onClick={() => navigate('/movies')}>Movies</Button>
            <Button me='5' onClick={() => navigate('/planets')}>Planets</Button>
            <Button me='5' onClick={() => navigate('/starships')}>Starships</Button>
          </Box>
          <Spacer/>
          <Box><Button me='5'onClick={handleLogOut}>Log Out</Button></Box>
        </Flex>
      
    </Box>
    ): 
          <Box display='flex' alignItems='center' justifyContent='right' w='100%'p='5' bg='red'>
          <Button onClick={() => navigate('login')} me='5'>Log in</Button>
          <Button onClick={() => navigate('signup')} me='5'>Sign up</Button>
        </Box> 
  }
        
        <Outlet/>
    </>
  )
}

export default NavBar