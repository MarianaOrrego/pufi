import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

export const PufiLayout = ({children}) => {
  return (
    <Container fluid="md">

        <NavBar/>

        {children}

        <Footer/>

    </Container>
  )
}