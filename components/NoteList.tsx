'use client'
import React, { useState } from 'react';
import { Stack, HStack, VStack, StackDivider, Box, Button, ButtonGroup, IconButton, Center } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { Flex, Spacer, AbsoluteCenter, Divider } from '@chakra-ui/react'
import {
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from '@chakra-ui/react'


interface NoteListProps {
  notes: Note[];
  onUpdateNote: (note: Note) => void;
  onDeleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onUpdateNote, onDeleteNote }) => {
  const router = useRouter();

  return (
    <>
      {notes.length === 0 ? (
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          <Divider />
          <Box boxSize='sm'>
            <Center >
              <Image src='/bookImage.png' alt="book-image" />
            </Center>
          </Box>
          <Box h='40px' bg='white.200'>
            <Center >
              Aucune note rédigée pour le moment
            </Center>
          </Box>
          <Box h='40px' bg='white.200'>
            <Flex>
              <Spacer />
              <ButtonGroup size='sm' isAttached variant='outline'>
                <IconButton aria-label='Add Note' onClick={() => router.push('/noteform')} icon={<AddIcon />} />
              </ButtonGroup>
            </Flex>
          </Box>
        </VStack >
      ) : (
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          <Box h='40px' bg='white.200'>
            <Flex>
              <Spacer />
              <ButtonGroup size='sm' isAttached variant='outline'>
                <IconButton aria-label='Add Note' onClick={() => router.push('/noteform')} icon={<AddIcon />} />
              </ButtonGroup>
            </Flex>
          </Box>
          <Box h='40px' bg='white.200'>
            <div>
              <ul>
                {notes.map((note) => (
                  <li key={note.id}>
                    <div>
                      <Flex>
                        <Box p='4' bg='white.400'>
                          {note.title}
                        </Box>
                        <Spacer />
                        <Box p='4' bg='white.400'>
                          {note.createdAt.toLocaleString()}
                        </Box>
                        <Box p='4' bg='white.400'>
                          <Menu>
                            <MenuButton >
                              <Image w='20px' h='20px' mr='5px' src='/choix.png' alt="plus" />
                            </MenuButton>
                            <MenuList>
                              <MenuItem as='a' onClick={() => router.push(`/edit/${note.id}`)}>Editer</MenuItem>
                              <MenuItem as='a' onClick={() => onDeleteNote(note.id)}>Supprimer</MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                      </Flex>
                      <Box bg='white' w='100%' p={4} color='black'>
                        {note.body}
                      </Box>
                      <Divider />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Box>
        </VStack>
      )}
    </>

  )
};

export default NoteList;

