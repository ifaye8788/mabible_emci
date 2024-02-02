'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Note {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
}

interface NoteContextType {
  notes: Note[];
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: number) => void;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteContext must be used within a NoteProvider');
  }
  return context;
};

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    
  }, []);

  const addNote = (note: Note) => {
    // Post new note to JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        userId: 1, 
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('NoteProvider addNote : notes = ', notes);
        console.log('NoteProvider addNote : data = ', data);
        const newNote = {
          id: data.id + note.id, //data.id toujours égal à 101
          title: data.title,
          body: data.body,
          createdAt: new Date(data.createdAt),
        };
        setNotes([...notes, newNote]);
      })
      .catch(error => console.error('Error adding note:', error));
  };

  const updateNote = (updatedNote: Note) => {
    // Update note on JSONPlaceholder API
    //fetch(`https://jsonplaceholder.typicode.com/posts/${updatedNote.id}`, {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: 'PUT',
      body: JSON.stringify({
        id: updatedNote.id,
        title: updatedNote.title,
        body: updatedNote.body,
        userId: 1, 
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(() => {
        setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
      })
      .catch(error => console.error('Error updating note:', error));
  };

  const deleteNote = (id: number) => {
    // Delete note on JSONPlaceholder API
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setNotes(notes.filter(note => note.id !== id));
      })
      .catch(error => console.error('Error deleting note:', error));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};