import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import compra from './../../assets/img/compra.png'

export function Footer() {
    return (
        <Container className="blurr mt-5">
            <Row className="align_text p-5">
                <Col md={3}>
                    <h1 className='pufiblack'>Pufi</h1>
                </Col>
                <Col md={2}>
                    <p className='cuentablack cursor'><b>PUFI PUFF</b></p>
                    <p className='cuentablack cursor'><b>PUFI RAIN</b></p>
                    <p className='cuentablack cursor'><b>PUFI CART</b></p>
                    <p className='cuentablack cursor'><b>PUFI NAP</b></p>
                </Col>
                <Col md={2}>
                    <p className='cuentablack cursor'><b>CONTACTO</b></p>
                    <p className='cuentablack cursor'><b>AYUDA</b></p>
                    <p className='cuentablack cursor'><b>CÓMO COMPRAR</b></p>
                    <p className='cuentablack cursor'><b>TÉRMINOS & CONDICIONES</b></p>
                </Col>
                <Col md={2}>
                    <p className='cuentablack cursor'><b>COMPRA 100% SEGURA</b></p>
                    <img src={compra} className='img-80'/>
                </Col>
                <Col md={3}>
                    <p className='cuentablack cursor'><b>SEGUINOS EN</b> <FaFacebookF /> <FaTwitter /> <FaInstagram /></p>
                </Col>
            </Row>
        </Container>
    );
}