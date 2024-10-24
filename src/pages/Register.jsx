/* eslint-disable no-unused-vars */
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {FormControl, Input, FormLabel, FormHelperText, Button, Text, Container} from '@chakra-ui/react'
import appFirebase from '../firebase/config'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { MyAppContext } from '../context/MyAppContext'


const auth = getAuth(appFirebase)

const Register = () => {

  const {setName} = useContext(MyAppContext)
  const navigate = useNavigate()
  const {register, handleSubmit, formState} = useForm()
  const {errors} = formState

  const functRegister = async(data) =>{
 
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.pass)
      setName(data.email)
      Swal.fire({
        title: "Custom width, padding, color, background.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "url(../images/jediorderbadge.svg)",
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
        title: "Custom width, padding, color, background.",
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
    
    <form onSubmit={handleSubmit(functRegister)} noValidate>
    <Container>
    <FormControl>
        <FormLabel mt="5">Email address</FormLabel>
        <Input type='email' id='email' {...register('email', {required:{value: true, message: 'El correo es necesario para ingresar'}, pattern:{value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Correo invalido'}})} />
        <Text color='red.400' mt='3'>{errors.email?.message}</Text>
        <FormLabel mt="5">Password</FormLabel>
        <Input type='password' id='pass'{...register('pass', {required:{value: true, message: 'Necesita ingresar la contraseña'}, minLength:{value: 8, message:'The password needs to be with 8 digits'}})}/>
        <Text color='red.400' mt='3'>{errors.pass?.message}</Text>
        <Button type='submit' colorScheme="yellow" mt="5">Sign Up</Button>
      </FormControl>
    </Container>
      
    </form>
      
    </>
  )
}

export default Register