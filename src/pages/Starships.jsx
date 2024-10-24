import { useEffect, useState } from "react"
import {SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, Box} from '@chakra-ui/react'

const Starships = () => {
  const[starship, setStarship] = useState([])

  const getStarship = async() => {
    let url = 'https://swapi.dev/api/starships'
    let data = await fetch(url)
    let response = await data.json()
    setStarship(response.results)
    console.log(response);
    
  }

  useEffect(() => {
    getStarship()
  }, [])

  return (
    <Box padding={5}>
      <SimpleGrid content="center" spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {starship.map((starship, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size='md'>{starship.name}</Heading>
            </CardHeader>
            <CardBody>
              {/* <Text>Director: {movie.director} </Text>
              <Text>Producer: {movie.producer} </Text>
              <Text>Released date: {movie.release_date} </Text>
              <Text>Episode: {movie.episode_id} </Text> */}
            </CardBody>
            <CardFooter>
              <Button>More Info</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Starships