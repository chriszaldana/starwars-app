import { useEffect, useState } from "react"
import {SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, Box} from '@chakra-ui/react'

const Movies = () => {
  const[movies, setMovies] = useState([])

  const getMovies = async() => {
    let url = 'https://swapi.dev/api/films'
    let data = await fetch(url)
    let response = await data.json()
    setMovies(response.results)
    console.log(response);
    
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Box padding={5}>
      <SimpleGrid content="center" spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {movies.map((movie, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size='md'>{movie.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>Director: {movie.director} </Text>
              <Text>Producer: {movie.producer} </Text>
              <Text>Released date: {movie.release_date} </Text>
              <Text>Episode: {movie.episode_id} </Text>
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

export default Movies