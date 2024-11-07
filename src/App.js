import React, { useState } from 'react';
import "./App.css"
import { Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const App = () => {

  const navigate = useNavigate()

  const Home = () => {
    navigate('./Home', {
      state: formData
    })
  }



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
          <p className="title">Registrate!!!</p>
          <p className="message">Ayudanos con tus datos</p>
          <div className="flex">
            <label>
              <input
                className="input"
                type="text"
                name="firstName"
                placeholder=""
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <span>Nombre</span>
            </label>

            <label>
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder=""
                required
                value={formData.lastName}
                onChange={handleChange}
              />
              <span>Apellido</span>
            </label>
          </div>

          <label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder=""
              required
              value={formData.email}
              onChange={handleChange}
            />
            <span>Correo</span>
          </label>

          <label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder=""
              required
              value={formData.password}
              onChange={handleChange}
            />
            <span>Contraseña</span>
          </label>

          <label>
            <input
              className="input"
              type="password"
              name="confirmPassword"
              placeholder=""
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span>Confirmar Contraseña</span>
          </label>
          <button className="submit" type="submit" onClick={Home}>Registrar</button>
          <p className="signin">
            ¿Ya tienes una cuenta? <a href='./Login'>Iniciar sesion</a>
          </p>
        </Form>
      </Card>
    </Container>
  );
};



export default App;