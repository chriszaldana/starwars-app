import {  Box, Button, Flex, Image, Spacer, Menu, MenuItem, MenuList, MenuGroup,MenuButton, Heading, ButtonGroup, Modal,ModalBody,ModalCloseButton,ModalContent, ModalOverlay, ModalHeader, Avatar, AvatarBadge} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { MyAppContext } from "../../context/MyAppContext"
import SWLogo from '../../images/SWlogo.png'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import appFirebase from "../../firebase/config"
import Login from "../Login"
import Register from "../Register"
import charaIcon from '../../images/charaIcon.png'
import moveIcon from '../../images/movIcon.png'
import planIcon from '../../images/planIcon.png'
import shipIcon from '../../images/shipsIcon.png'


const auth = getAuth(appFirebase)



const NavBar = () => {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const {name, setFavorites} = useContext(MyAppContext)
  const [isOpen, setIsOpen] = useState(false);
  const [typeForm, setTypeForm] = useState('login')

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
      setFavorites([])
    })
  }

  const onOpen = (type) =>{
    setTypeForm(type)
    setIsOpen(true);
  } 
  const onClose = () => setIsOpen(false);
  

  return (  

    <>
    
    {user ? (
      <Box  w='100%'p='5'>
        <Flex alignItems="center" justifyContent="center" >
        <Box display='flex' alignItems='center' justifyContent='center' mb={4}>
     <Link to='/'>
      <Image boxSize='125px' src={SWLogo} alt='Star Wars Logo'/>
     </Link>
    </Box>
          <Spacer />
          <Box>
            <Button  bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}} leftIcon={<Image boxSize='20px' src={charaIcon}/>} me='5' onClick={() => navigate('/characters')}>Characters</Button>
            <Button bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}} leftIcon={<Image boxSize='20px' src={moveIcon}/>} me='5'onClick={() => navigate('/movies')}>Movies</Button>
            <Button bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}} leftIcon={<Image boxSize='20px' src={planIcon}/>} me='5' onClick={() => navigate('/planets')}>Planets</Button>
            <Button bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}} leftIcon={<Image boxSize='20px' src={shipIcon}/>} onClick={() => navigate('/starships')}>Starships</Button>
          </Box>
          <Spacer/>
          <Menu>
  <MenuButton>
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Avatar bgColor='yellow.600' boxSize='60px' name={name}>
        <AvatarBadge boxSize='1em' bg='green.500' /> 
      </Avatar>
       
    </Box>
  </MenuButton>
  <MenuList bgColor='black' color='white' textAlign='center'>
    <MenuGroup title={name}>
      <MenuItem as={Button} bgColor='black' onClick={() => navigate('/favorites')} color='yellow' _hover={{bg: 'yellow', color: 'black'}}>
        Favorites
      </MenuItem>
      <MenuItem as={Button} onClick={handleLogOut} bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}>
        Log Out
      </MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
        </Flex>
    </Box>
    ): 
          <Flex display='flex' alignItems='center' justifyContent='center' w='100%'p='5'>
            <Box display='flex' alignItems='center' justifyContent='center' mb={4}>
     <Link to='/'>
      <Heading>
        <Image boxSize='100px' src={SWLogo} alt='Star Wars Logo' />
      </Heading>
     </Link>
    </Box>
    <Spacer/>
    <ButtonGroup gap='2'>
      <Button onClick={() => onOpen('login')} variant='ghost' color='yellow' _hover={{bg: 'yellow', color: 'black'}}>Log in</Button>
      <Button onClick={() => onOpen('signup')} variant='ghost' color='yellow' _hover={{bg: 'yellow', color: 'black'}}>Sign up</Button>
    </ButtonGroup>

    {/* Aqui se muestra los formularios superpuestos*/}
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor='black' color='yellow'>
        <ModalHeader>{typeForm === 'login' ? 'Login' : 'Sign Up'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb='5'>
          {typeForm === 'login' ? <Login/> : <Register/>}
        </ModalBody>
      </ModalContent>
    </Modal>
        </Flex> 


  }
        
        <Outlet/>
    </>
  )
}

export default NavBar