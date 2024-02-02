'use client'
import React from 'react'
import { Menu, MenuItem, MenuDivider, MenuGroup } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { Image } from '@chakra-ui/react'

const Navigation = () => {
  const router = useRouter();
  return (
    <div>
      <Menu>
        <MenuItem> <Image w='20px' h='20px' mr='5px' src='./logo.png' alt="logo" /> maBible</MenuItem>
        <MenuItem as='a' onClick={() => router.push('/')}> <Image w='20px' h='20px' mr='5px' src='./accueil.png' alt="accueil" />Accueil</MenuItem>
        <MenuItem as='a' > <Image w='20px' h='20px' mr='5px' src='./bible.png' alt="bible" /> Bible</MenuItem>
        <MenuItem as='a' > <Image w='20px' h='20px' mr='5px' src='./youtube.png' alt="youtube" /> Médias</MenuItem>
        <MenuItem as='a' > <Image w='20px' h='20px' mr='5px' src='./plan.png' alt="plan" /> Plan</MenuItem>
        <MenuDivider />
        <MenuGroup title='Mes activités'>
          <MenuItem as='a' onClick={() => router.push('/notes')}> <Image w='20px' h='20px' mr='5px' src='./note.png' alt="note" /> Notes</MenuItem>
          <MenuItem as='a' > <Image w='20px' h='20px' mr='5px' src='./favori.png' alt="favori" /> Favoris</MenuItem>
          <MenuItem as='a' > <Image w='20px' h='20px' mr='5px' src='./liste.png' alt="liste" /> Listes</MenuItem>
          <MenuItem as='a' > <Image w='20px' h='20px' mr='5px' src='./etiquette.png' alt="etiquette" /> Étiquettes</MenuItem>
          <MenuItem as='a' > <Image w='20px' h='20px' mr='5px' src='./signet.png' alt="signet" /> Signets</MenuItem>
          <MenuItem as='a' > <Image w='20px' h='20px' mr='5px' src='./plus.png' alt="plus" /> Plus</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem as='a' >Profil</MenuItem>
      </Menu>
    </div>
  )
}

export default Navigation