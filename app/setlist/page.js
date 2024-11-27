// focus: CRUD, REACT hooks
// create: add new data (adding a new song to setlist) 
// read: view or retrieve data (displaying the list of songs)
// update: modify existing data (editing song title)
// delete: remove data (deleting song from setlist)

import { Thead, Tr, Th, Tbody, Td, Table, Divider, Text, Box, Stack, Input, Button, Center, Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

// hardcoded data for now
// array of objects
// each object has id, title, artist, duration
const songsDB = [
  { id: 1, title: "Shape of You", artist: "Ed Sheeran", duration: "4:24" },
  { id: 2, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { id: 3, title: "Rolling in the Deep", artist: "Adele", duration: "3:48" },
];

// define setlist page
export default function SetlistPage() {

  // define the state of songs 
  // define the state for title input field value 
  // define the state for artist input field value 
  // define the state for duration input field value 
  
  // function to handle adding a song 

  // function to handle updating a song 

  // function to handle deleting a song 

  return (
    <>
      <Container p={7}>
        <Center>
          <Heading>Setlist</Heading>
        </Center>
      </Container>

      <Center>
        <Stack spacing={3}>
          <Input placeholder="Song Title" size="md" />
          <Input placeholder="Artist" size="md" />
          <Input placeholder="Duration 00:00" size="md"/>
          <Button colorScheme="blue">Add Song</Button>

        </Stack>
      </Center>
      <Container>
        <Box mt={12} b={4}>
         
          <Divider />
        </Box>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Artist</Th>
              <Th>Duration</Th>
            </Tr>
          </Thead>
          <Tbody>
            {songsDB.map((song) => (
              <Tr key={song.id}>
                <Td>{song.title}</Td>
                <Td>{song.artist}</Td>
                <Td>{song.duration}</Td>
                <Td><Button colorScheme="red">Delete</Button></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      

    </>
  );
}
