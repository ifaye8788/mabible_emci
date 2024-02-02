'use client'
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Navigation from "@/components/Navigation";
import NoteForm from "@/components/NoteForm";

const NoteFormPage = () => {

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
                        <NoteForm />
                    </GridItem>
                </Grid>
            </div>
        </>
    )
}

export default NoteFormPage

