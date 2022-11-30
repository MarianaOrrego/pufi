import React from 'react'
import { Button, Card, } from 'react-bootstrap'

export default function BannerStyle({ boton }) {

    return (

        <>
            <Card.Body className='bg-img d-flex align-items-center justify-content-center'>
                {boton.state
                    ? <Button className='boton_card letter' variant="outline-info">{boton.name}</Button>
                    : false
                }
            </Card.Body>
        </>
    )
}