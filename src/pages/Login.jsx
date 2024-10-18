/* eslint-disable no-unused-vars */
import { FormControl, FormLabel,Input, FormHelperText, Button } from "@chakra-ui/react"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import appFirebase from "../firebase/config"
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

const auth = getAuth(appFirebase)

const Login = () => {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()

  const functLogin = async(data) =>{
    
    try {
    await signInWithEmailAndPassword(auth, data.email, data.pass)
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
    <form onSubmit={handleSubmit(functLogin)} noValidate>
      <FormControl>
        <FormLabel mt="5">Email address</FormLabel>
        <Input type='email' id="email" {...register('email')} />
        <FormLabel mt="5">Password</FormLabel>
        <Input type='password' id="pass" {...register('pass')} />
        <FormHelperText>Well never share your email.</FormHelperText>
        <Button type="submit" colorScheme="yellow" mt="5">Sign in</Button>
      </FormControl>
    </form>
      
    </>
  )
}

export default Login