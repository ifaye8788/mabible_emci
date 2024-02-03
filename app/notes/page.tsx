'use client'
import React, { useState } from 'react';
import NoteList from '../../components/NoteList';
import Header from '../../components/Header';
import { Grid, GridItem } from '@chakra-ui/react'
import Navigation from "@/components/Navigation";
import { useNoteContext } from '../../contexts/NoteContext';

const NotesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { notes, deleteNote, updateNote } = useNoteContext();

  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateNote = (updatedNote: Note) => {
    console.log('NotesPage : handleUpdateNote ENTER ');
    console.log('NotesPage : handleUpdateNote updatedNote = ', updatedNote);
  };

  const handleDeleteNote = (id: number) => {
    if (window.confirm('Confirmez-vous la demande de suppression?')) {
      deleteNote(id);
    }
  };

  return (
    <>
      <div>
        <Grid
          templateAreas={`
                  "nav main header"
                  "nav footer header"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h='600px'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='white.300' area={'header'}>

          </GridItem>
          <GridItem pl='2' bg='white.300' area={'nav'}>
            <Navigation />
          </GridItem>
          <GridItem pl='2' bg='white.300' area={'main'}>
            <Header title="Notes" onSearchChange={setSearchTerm} />
          </GridItem>
          <GridItem pl='2' bg='white.300' area={'footer'}>
            <NoteList notes={filteredNotes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default NotesPage;