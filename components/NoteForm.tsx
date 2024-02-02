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


const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { notes, addNote } = useNoteContext();
  const router = useRouter();


  const handleAddNote = () => {
    console.log('NoteForm handleAddNote : ENTER ');
    addNote({
      id: Math.floor(Math.random() * 101), 
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
    <Button colorScheme="teal" mt={4} onClick={handleAddNote}>
      Ajouter la note
    </Button>
  </Box>
  );
};

export default NoteForm;
