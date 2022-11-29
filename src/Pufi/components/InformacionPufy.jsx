import React from 'react'
import { Container } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa';

export default function InformacionPufy({contenido}){
    return (
        <Container>
            <img src={contenido.img} className="img_descp" />
            <h3 className='letter_cont'>{contenido.titulo}</h3>
            <div className='d-flex justify-content-center'>
                <p className='letter_cont cl_w'>Descripción del producto, este es un texto simulado</p>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='letter_cont cl_w cursor'><FaAngleRight /> Ver más</p>
            </div>
        </Container>
    )
}