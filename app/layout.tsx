'use client'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { NoteProvider } from '../contexts/NoteContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <NoteProvider>
            {children}
          </NoteProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}

