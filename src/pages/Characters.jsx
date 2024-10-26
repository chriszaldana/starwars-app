
import { useContext, useEffect, useState } from "react"
import {SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, Box} from '@chakra-ui/react'
import { MyAppContext } from "../context/MyAppContext"



const Characters = () => {

  const[characters, setCharacters] = useState([])
  const {addFavorite} = useContext(MyAppContext)

  const getCharacters = async() => {
    let url = 'https://swapi.dev/api/people'
    let data = await fetch(url)
    let response = await data.json()
    setCharacters(response.results)
    console.log(response);
    
  }

  useEffect(() => {
    getCharacters()
  }, [])


  return (
      <Box padding={5}>
      <SimpleGrid  spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {characters.map((character, index) => (
            <Card key={index}>
            <CardHeader>
              <Heading size='md'>{character.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>Height: {character.height}</Text>
              <Text>Mass: {character.mass}</Text>
              <Text>Birth Year: {character.birth_year}</Text>
              <Text>Gender: {character.gender}</Text>
            </CardBody>
            <CardFooter>
              <Button>More Info</Button>
              <Button onClick={() => addFavorite(character)}>Add Favorites</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
    
  );
}

export default Characters

