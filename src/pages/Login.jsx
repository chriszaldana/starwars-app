import { FormControl, FormLabel,Input, FormHelperText, Button } from "@chakra-ui/react"
// import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
// import appFirebase from "../firebase/config"

// const auth = getAuth(appFirebase)

const Login = () => {

  // const functLogin = async(data) =>{
  //   await signInWithEmailAndPassword(auth, email, password)


    
  // }
  return (
    <>
      <FormControl>
        <FormLabel mt="5">Email address</FormLabel>
        <Input type='email' />
        <FormLabel mt="5">Password</FormLabel>
        <Input type='password' />
        <FormHelperText>Well never share your email.</FormHelperText>
        <Button colorScheme="yellow" mt="5">Sign in</Button>
      </FormControl>
    </>
  )
}

export default Login