import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { formSubmit } from '../../store/slices';
import { v4 as uuid } from 'uuid';

const emailVal = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/);

export default function FormPufi() {

    const [state, handleSubmit] = useForm("myyvqkzy");

    const [suscrito, setSuscrito] = useState({
        email: ''
    });

    const dispatch = useDispatch()

    const handleChange = e => {
        setSuscrito({
            ...suscrito,
            [e.target.name]: e.target.value,
        });
    };

    function handleBlur() {
        const hasError = !emailVal.test(suscrito.value);
        setSuscrito((prevState) => ({ ...prevState, hasError }));
    }

    const handleSub = (e) => {
        e.preventDefault();
        dispatch(formSubmit({
            ...suscrito,
            id: uuid()
        }))
    }

    if (state.succeeded) {
        return <p>¡Gracias por suscribirte!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                id='email'
                className='forminput'
                type='email'
                name='email'
                placeholder='Ingresa tu email'
                onChange={handleChange}
                onBlur={handleBlur}
                aria-errormessage='emailErrorID'
                aria-invalid={suscrito.hasError}
            />
            <button 
                className='rightarrow' 
                type='submit' 
                disabled={state.submitting}
                onClick={handleSub}
            >
                <FaLongArrowAltRight />
            </button>
            <ValidationError
                className='cuentablack'
                prefix='Email'
                field='email'
                errors={state.errors}
            />
            <p
                id='msgID'
                className='cuentablack'
                aria-live='assertive'
                style={{ visibility: suscrito.hasError ? "visible" : "hidden" }}
            >
                Por favor, ingrese un email valido
            </p>
        </form>
    );
}
