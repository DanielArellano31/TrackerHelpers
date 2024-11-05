import React, { useState } from 'react';
import "./Login.css"
import { Button, Card, Container, Form } from 'react-bootstrap';

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form data submitted:', formData);
    };

    return (
        <Container className='container'>
            <Card >
                <Form className="form" onSubmit={handleSubmit}>
                    <p className="form-title">Inicia sesion</p>
                    <Card className="input-container">
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo Electronico"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <span></span>
                    </Card>
                    <Card className="input-container">
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Card>
                    <Button type="submit" className="submit">
                        Iniciar Sesion
                    </Button>
                    <p className="signup-link">
                        No tienes cuenta? <a href='./'>Registrate</a>
                    </p>
                </Form >
            </Card >
        </Container >

    );
};

