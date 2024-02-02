'use client'
import React from 'react'
import { Grid, GridItem, Center } from '@chakra-ui/react'
import Navigation from "@/components/Navigation";
import { useRouter } from 'next/navigation'

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <Grid
          templateAreas={`
                  "nav footer main"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h='600px'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='white.300' area={'nav'}>
            <Navigation />
          </GridItem>
          <GridItem pl='2' bg='white.300' area={'main'}>
            
          </GridItem>
          <GridItem pl='2' bg='white.300' area={'footer'}>
            <Center bg='white' h='100px' color='black'>
              Bienvenue sur votre plateforme maBible
            </Center>
            <Center bg='white' h='100px' color='black'>
              <button onClick={() => router.push('/notes')}>Cliquez ICI pour gérer vos notes</button>
            </Center>
          </GridItem>
        </Grid>
      </div>
    </>
  )
}

export default Home