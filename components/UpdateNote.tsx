'use client'
import React, { useState } from 'react';
import {
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useNoteContext } from '../contexts/NoteContext';
import { useRouter } from 'next/navigation'


const UpdateNote = ({note}) => {
  console.log('UpdateNote note = ', note);
  const { notes, updateNote } = useNoteContext();
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const router = useRouter();


  const handleUpdateNote = () => {
    console.log('UpdateNote handleUpdateNote : ENTER ');
    updateNote({
      id: note.id, 
      title,
      body,
      createdAt: new Date(),
    });
    setTitle('');
    setBody('');
    router.push('/notes');
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
    <FormControl>
      <FormLabel>Titre de la note</FormLabel>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
    </FormControl>
    <FormControl mt={2}>
      <FormLabel>Contenu de la note</FormLabel>
      <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
    </FormControl>
    <Button colorScheme="teal" mt={4} onClick={handleUpdateNote}>
      Mettre à jour la note
    </Button>
  </Box>
  );
};

export default UpdateNote;
