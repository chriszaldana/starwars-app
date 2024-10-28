import { useEffect, useState, useContext } from "react"
import {SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, Box, VStack, Stack} from '@chakra-ui/react'
import { MyAppContext } from "../context/MyAppContext";

const Starships = () => {
  const[starship, setStarship] = useState([])
  const { addFavorite } = useContext(MyAppContext);

  const getStarship = async() => {
    let url = 'https://swapi.dev/api/starships'
    let data = await fetch(url)
    let response = await data.json()
    setStarship(response.results)
    
    
  }

  useEffect(() => {
    getStarship()
  }, [])

  return (
    <Box padding={1}>
      <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {starship.map((starship, index) => (
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
              <Heading size="md" color="gray.700">{starship.name}</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm">MGLT: {starship.MGLT}</Text>
                <Text fontSize="sm">Crew: {starship.crew}</Text>
                <Text fontSize="sm">Class: {starship.starship_class}</Text>
                <Text fontSize="sm">Manufacturer: {starship.manufacturer}</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <Stack direction="column" spacing={2} width="100%">
              <Button size="lg" flex="1"  bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}>
                  More Info
                </Button>
                <Button
                  size="lg" flex="1" bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}
                  onClick={() => addFavorite(starship)}
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

export default Starships

