import {Box, SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, VStack, Stack} from '@chakra-ui/react'
import { MyAppContext } from '../context/MyAppContext'
import { useContext } from 'react'


const Favorites = () => {

  const {favorites} = useContext(MyAppContext)
 
  

  return (
    <Box padding={5}>
      <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {favorites.map((favorites, index) => (
          <Card
            key={index}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            bg="whiteAlpha.800"
            boxShadow="lg"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <CardHeader>
              <Heading size="md" color="gray.700">{favorites.name}</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm">Height: {favorites.height}</Text>
                <Text fontSize="sm">Mass: {favorites.mass}</Text>
                <Text fontSize="sm">Birth Year: {favorites.birth_year}</Text>
                <Text fontSize="sm">Gender: {favorites.gender}</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <Stack direction="column" spacing={2} width="100%">
              <Button size="lg" flex="1"  bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}>
                  More Info
                </Button>
              </Stack>
              
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Favorites

