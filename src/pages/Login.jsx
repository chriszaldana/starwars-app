/* eslint-disable no-unused-vars */
import { FormControl, FormLabel,Input, FormHelperText, Button, Text, Container } from "@chakra-ui/react"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import appFirebase from "../firebase/config"
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { MyAppContext } from "../context/MyAppContext"


const auth = getAuth(appFirebase)

const Login = () => {
  const navigate = useNavigate()
  const {register, handleSubmit, formState} = useForm()
  const {errors} = formState
  const {setName} = useContext(MyAppContext)

  const functLogin = async(data) =>{

    
    
    try {
    await signInWithEmailAndPassword(auth, data.email, data.pass)
    setName(data.email)
    Swal.fire({
      title: "Welcome, the force may be with you",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });
    navigate('/')
    } catch (error) {
      Swal.fire({
        title: "Something is wrong and the force may not be with you",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
    }

  }
  return (
    <>
    <form onSubmit={handleSubmit(functLogin)} noValidate>
      <Container>
      <FormControl>
        <FormLabel mt="5">Email address</FormLabel>
        <Input type='email' id="email" {...register('email', {required:{value: true, message: 'El correo es necesario para ingresar'}, pattern:{value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Correo invalido'}})} />
        <Text color='red.400' mt='3'>{errors.email?.message}</Text>
        <FormLabel mt="5">Password</FormLabel>
        <Input type='password' id="pass" {...register('pass', {required:{value: true, message: 'Necesita ingresar la contraseña'}})} />
        <Text color='red.400' mt='3'>{errors.pass?.message}</Text>
        <Button type="submit" colorScheme="yellow" mt="5">Sign in</Button>
      </FormControl>
      </Container>
      
    </form>
      
    </>
  )
}

export default Login