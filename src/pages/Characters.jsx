import { useContext, useEffect, useState } from "react";
import {
  SimpleGrid,
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  VStack,

  Stack,
} from "@chakra-ui/react";
import { MyAppContext } from "../context/MyAppContext";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { addFavorite } = useContext(MyAppContext);

  const getCharacters = async () => {
    let url = "https://swapi.dev/api/people";
    let data = await fetch(url);
    let response = await data.json();
    setCharacters(response.results);
    
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Box padding={5}>
      <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {characters.map((character, index) => (
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
              <Heading size="md" color="gray.700">{character.name}</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm">Height: {character.height}</Text>
                <Text fontSize="sm">Mass: {character.mass}</Text>
                <Text fontSize="sm">Birth Year: {character.birth_year}</Text>
                <Text fontSize="sm">Gender: {character.gender}</Text>
              </VStack>
            </CardBody>
            <CardFooter>
              <Stack direction="column" spacing={2} width="100%">
              <Button size="lg" flex="1"  bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}>
                  More Info
                </Button>
                
                <Button
                  size="lg" flex="1" bgColor='black' color='yellow' _hover={{bg: 'yellow', color: 'black'}}
                  onClick={() => addFavorite(character)}
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
};

export default Characters;
