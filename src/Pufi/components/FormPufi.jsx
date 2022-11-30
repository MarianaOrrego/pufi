import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function FormPufi() {

    const [state, handleSubmit] = useForm("myyvqkzy");

    if (state.succeeded) {
        return <p>¡Gracias por suscribirte!</p>;
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                id="email"
                type="email"
                name="email"
                placeholder='Ingresa tu email'
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                <FaLongArrowAltRight />
            </button>
        </form>
    );
}
