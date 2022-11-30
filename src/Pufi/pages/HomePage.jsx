import React from 'react'
import { Carrousel } from '../components/Carrousel'
import { ContenidoCard } from '../components/ContenidoCard'
import { InstagramInfo } from '../components/InstagramInfo'
import { SuscripcionOp } from '../components/SuscripcionOp'
import { PufiLayout } from '../layout/PufiLayout'

const HomePage = () => {
  return (
    <PufiLayout>
      <Carrousel />
      <ContenidoCard/>
      <InstagramInfo/>
      <SuscripcionOp/>
    </PufiLayout>
  )
}

export default HomePage
