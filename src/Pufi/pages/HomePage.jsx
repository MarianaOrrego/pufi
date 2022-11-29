import React from 'react'
import { Carrousel } from '../components/Carrousel'
import { ContenidoCard } from '../components/ContenidoCard'
import { PufiLayout } from '../layout/PufiLayout'

const HomePage = () => {
  return (
    <PufiLayout>
      <Carrousel />

      <ContenidoCard/>
    </PufiLayout>
  )
}

export default HomePage
