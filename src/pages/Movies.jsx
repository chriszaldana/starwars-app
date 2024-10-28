import { useEffect, useState, useContext } from "react"
import {SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, Box, VStack, Stack} from '@chakra-ui/react'
import { MyAppContext } from "../context/MyAppContext";

const Movies = () => {
  const[movies, setMovies] = useState([])
  const { addFavorite } = useContext(MyAppContext);

  const getMovies = async() => {
    let url = 'https://swapi.dev/api/films'
    let data = await fetch(url)
    let response = await data.json()
    setMovies(response.results)
    
    
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Box padding={5}>
      <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {movies.map((movie, index) => (
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
              <Heading size="md" color="gray.700">{movie.title}</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm">Director: {movie.director}</Text>
                <Text fontSize="sm">Episode: {movie.episode_id}</Text>
                <Text fontSize="sm">Producer: {movie.producer}</Text>
                <Text fontSize="sm">Release Date: {movie.release_date}</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <Stack direction="column" spacing={2} width="100%">
              <Button size="lg" flex="1"  bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}>
                  More Info
                </Button>
                <Button
                  size="lg" flex="1" bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}
                  onClick={() => addFavorite(movie)}
                >
                  Add to 
                  Favorites
                </Button>
              </Stack>
              
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Movies

