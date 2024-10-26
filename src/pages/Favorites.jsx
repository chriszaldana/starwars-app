import {Box, SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button} from '@chakra-ui/react'
import { MyAppContext } from '../context/MyAppContext'
import { useContext } from 'react'


const Favorites = () => {

  const {favorites} = useContext(MyAppContext)
  console.log(favorites);
  

  return (
    <Box padding={5}>
      <SimpleGrid  spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {favorites.map((favorites, index) => (
            <Card key={index}>
            <CardHeader>
              <Heading size='md'>{favorites.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>Height: {favorites.height}</Text>
              <Text>Mass: {favorites.mass}</Text>
              <Text>Birth Year: {favorites.birth_year}</Text>
              <Text>Gender: {favorites.gender}</Text>
            </CardBody>
            <CardFooter>
              <Button>More Info</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Favorites