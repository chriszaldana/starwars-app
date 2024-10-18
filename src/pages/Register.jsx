import {FormControl, Input, FormLabel, FormHelperText, Button} from '@chakra-ui/react'

const Register = () => {
  return (
    <>
      <FormControl>
        <FormLabel mt="5">Email address</FormLabel>
        <Input type='email' />
        <FormLabel mt="5">Password</FormLabel>
        <Input type='password' />
        <FormHelperText>Well never share your email.</FormHelperText>
        <Button colorScheme="yellow" mt="5">Register</Button>
      </FormControl>
    </>
  )
}

export default Register