import React, { useDebugValue, useEffect, useState } from 'react';
import "./App.css"
import { Card, Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const App = () => {

  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuarios = async ()=>{
    try {
      const reponse = await fetch ('/api/db')
      if(!reponse.ok){
        throw new Error('Error al obtener los datos del servidor!!')
      }
      const data = await reponse.json()
      setUsuarios(data)
    }catch(error){
      console.log("Error al obtener los usuarios!!")
    }
  }
  
  useEffect (()=>{
    fetchUsuarios();
  }, [])

  const navigate = useNavigate()

  const Welcome = () => {
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
          <p className="title" >Registrate!!!</p>
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
          <Button className="success" variant="success" type="submit" onClick={Welcome}>Registrar</Button>
          <p className="signin">
            ¿Ya tienes una cuenta? <a href='./Login'>Iniciar sesion</a>
          </p>
        </Form>
      </Card>
    </Container>
  );
;
}


export default App;