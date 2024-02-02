
'use client'
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Navigation from "@/components/Navigation";
import UpdateNote from "@/components/UpdateNote";
import { useRouter } from 'next/navigation'
import { useNoteContext } from '../../../contexts/NoteContext';


const EditNote = ({ params }) => {
    const router = useRouter();
    const { notes } = useNoteContext();
    console.log('EditNote params = ', params);
    console.log('EditNote params.id = ', params.id);
    console.log('EditNote notes = ', notes);

    // finding the object whose id is 'params.id'
    const note = notes.find((note) => note.id == params.id);
    console.log('EditNote note = ', note);

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
                        <UpdateNote note={note} />
                    </GridItem>
                </Grid>
            </div>
        </>
    )
}

export default EditNote