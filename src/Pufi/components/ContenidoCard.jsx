import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import BannerStyle from './BannerStyle';
import umbrella from './../../assets/img/umbrella.png'
import puff from './../../assets/img/puff.png'
import InformacionPufy from './InformacionPufy';


export const ContenidoCard = () => {
    return (
        <Container>
            <Row>
                <Col md={6} className='p-0'>
                    <BannerStyle boton={{state:true, name:'SHOP'}}/>
                </Col>
                <Col md={6} className='p-0 d-flex align-items-center justify-content-center'>
                    <InformacionPufy contenido={{img: umbrella,titulo:'Pufi RAIN'}}/>
                </Col>
            </Row>
            <Row>
                <Col md={6} className='p-0 d-flex align-items-center justify-content-center'>
                    <InformacionPufy contenido={{img: puff,titulo:'Pufi PUFF'}}/>
                </Col>
                <Col md={6} className='p-0'>
                    <BannerStyle boton={{state:false, name:'SHOP'}}/>
                </Col>
            </Row>
            <Row>
                <Col md={6} className='p-0'>
                    <BannerStyle boton={{state:false, name:'SHOP'}}/>
                </Col>
                <Col md={6} className='p-0 d-flex align-items-center justify-content-center'>
                    <InformacionPufy contenido={{img: umbrella,titulo:'Pufi CART'}}/>
                </Col>
            </Row>
            <Row>
                <Col md={6} className='p-0 d-flex align-items-center justify-content-center'>
                    <InformacionPufy contenido={{img: umbrella,titulo:'Pufi NAP'}}/>
                </Col>
                <Col md={6} className='p-0'>
                    <BannerStyle boton={{state:false, name:'SHOP'}}/>
                </Col>
            </Row>
        </Container>
    )
}
