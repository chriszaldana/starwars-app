/* eslint-disable no-unused-vars */
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {FormControl, Input, FormLabel, FormHelperText, Button, Alert, AlertIcon, AlertTitle, AlertDescription} from '@chakra-ui/react'
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
  const {register, handleSubmit} = useForm()

  const functRegister = async(data) =>{
 
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.pass)
      setName(data.name)
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
      <FormControl>
        <FormLabel mt="5">Name</FormLabel>
        <Input type='text' id='name' {...register('name')} />
        <FormLabel mt="5">Email address</FormLabel>
        <Input type='email' id='email' {...register('email')} />
        <FormLabel mt="5">Password</FormLabel>
        <Input type='password' id='pass' {...register('pass')}/>
        <FormHelperText>Well never share your email.</FormHelperText>
        <Button type='submit' colorScheme="yellow" mt="5">Sign Up</Button>
      </FormControl>
    </form>
      
    </>
  )
}

export default Register