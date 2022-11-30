import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cat from './../../assets/img/cat.jpg'
import chair from './../../assets/img/chair.jpg'
import city from './../../assets/img/city.jpg'

export const InstagramInfo = () => {
    return (
        <div className='mt-5'>
            <p className='cuentablack m-0 gray'>INSTAGRAM</p>
            <h2 className='cuentablack'>#ESPUFI</h2>
            <Container className='mt-5'>
                <Row className='justify-content-md-center'>
                    <Col className='p-0' xs md={2}>
                        <img src={cat} className='img-100' />
                    </Col>
                    <Col className='p-0' xs md={2}>
                        <img src={chair} className='img-100' />
                    </Col>
                    <Col className='p-0' xs md={2}>
                        <img src={city} className='img-100' />
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col className='p-0' xs md={2}>
                        <img src={chair} className='img-100' />
                    </Col>
                    <Col className='p-0' xs md={2}>
                        <img src={city} className='img-100' />
                    </Col>
                    <Col className='p-0' xs md={2}>
                        <img src={cat} className='img-100' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}