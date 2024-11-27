// focus: CRUD, REACT hooks
// create: add new data (adding a new song to setlist)
// read: view or retrieve data (displaying the list of songs)
// update: modify existing data (editing song title)
// delete: remove data (deleting song from setlist)
"use client";

import {
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
  Divider,
  Text,
  Box,
  Stack,
  Input,
  Button,
  Center,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useState } from "react";

// hardcoded data for now
// array of objects
// each object has id, title, artist, duration
const initialSongs = [
  { id: 1, title: "Shape of You", artist: "Ed Sheeran", duration: "4:24" },
  { id: 2, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { id: 3, title: "Rolling in the Deep", artist: "Adele", duration: "3:48" },
];

// define setlist page
export default function SetlistPage() {
  // define the state of songs
  const [songs, setSongs] = useState(initialSongs);

  // States for input fields
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [duration, setDuration] = useState("");

  // function to handle adding a new song
  const addSong = () => {

    // handle edge case: what if all fields are empty? 
    if (!title || !artist || !duration) {
      alert('Please fill everything out')
      return; // stop here 
    }
    // create new song object
    const newSong = {
      id: Date.now(),
      title,
      artist,
      duration,
    };

    // update songs state by adding the new song
    // SPEAD OPERATION (...) takes all elements of an array and
    // "spreads" them into a new array or object

    // ...songs --> creates shallow copy of the existing songs array --> original array remains unchanged
    // and newSong added to the end of new array
    setSongs([...songs, newSong]);

    // clear input fields
    setTitle("");
    setArtist("");
    setDuration("");
  };

  // function to handle deleting a song
  const deleteSong = (id) => {
    
    setSongs(songs.filter(song=>song.id != id));

  }

  return (
    <>
      <Container p={7}>
        <Center>
          <Heading>Setlist</Heading>
        </Center>
      </Container>

      <Center>
        <Stack spacing={3}>
          <Input
            placeholder="Song Title"
            size="md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Artist"
            size="md"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <Input
            placeholder="Duration 00:00"
            size="md"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <Button colorScheme="green" onClick={addSong}>
            Add Song
          </Button>
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
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song) => (
              <Tr key={song.id}>
                <Td>{song.title}</Td>
                <Td>{song.artist}</Td>
                <Td>{song.duration}</Td>
                <Td>
                  <ButtonGroup spacing={2}>
                    <Button colorScheme="blue" size="sm">Edit</Button>
                    <Button colorScheme="red" size="sm" onClick={()=>deleteSong(song.id)}>Delete</Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
}
