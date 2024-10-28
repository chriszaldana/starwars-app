import { useEffect, useState, useContext } from "react"
import {SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, Box, VStack, Stack} from '@chakra-ui/react'
import { MyAppContext } from "../context/MyAppContext";

const Planets = () => {
  const[planets, setPlanets] = useState([])
  const { addFavorite } = useContext(MyAppContext);

  const getPlanets = async() => {
    let url = 'https://swapi.dev/api/planets'
    let data = await fetch(url)
    let response = await data.json()
    setPlanets(response.results)
    
    
  }

  useEffect(() => {
    getPlanets()
  }, [])

  return (
    <Box padding={5}>
      <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {planets.map((planet, index) => (
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
              <Heading size="md" color="gray.700">{planet.name}</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm">Climate: {planet.climate}</Text>
                <Text fontSize="sm">Diameter: {planet.diameter}</Text>
                <Text fontSize="sm">Gravity: {planet.gravity}</Text>
                <Text fontSize="sm">Terrain: {planet.terrain}</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <Stack direction="column" spacing={2} width="100%">
              <Button size="lg" flex="1"  bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}>
                  More Info
                </Button>
                <Button
                  size="lg" flex="1" bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}
                  onClick={() => addFavorite(planet)}
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

export default Planets

