import { Card, Nav, Navbar, NavDropdown, Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from 'react-router-dom';
import vaca1 from './imagenes/vaca1.jpeg'
import vaca2 from './imagenes/vaca2.jpeg'
import vaca3 from './imagenes/vaca3.jpeg'
import vaca4 from './imagenes/vaca4.jpeg'
import mapa from "./imagenes/mapa.png"
import { Image } from "react-bootstrap";
import "./Home.css"
export const Home = () => {

  const { state } = useLocation()

  return (


    <>
      <Navbar expand="lg" className="bg-success" variant='warning' >

        <Navbar.Brand  style={{color:"white"}}variant="warning" /* href="#home" */>  <i class="bi bi-person"></i>{` Bienvenido, ${state.firstName} ${state.lastName}`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant='primary'>
            <Nav.Link /* href="#home" */> <i class="bi bi-house-fill"></i> Home</Nav.Link>
            <Nav.Link /* href="#link" */>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item /* href="#action/3.1" */>Action</NavDropdown.Item>
              <NavDropdown.Item /* href="#action/3.2" */>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Navbar >
      <Card className="p-3" style={{ maxWidth: '0 auto', margin: '0 auto' }}>
        <Card.Body>
          <Row className="mb-3">
            <Col xs={6} className="d-flex justify-content-center mb-3">
              <Image src={vaca1} fluid rounded style={{ margin: '5px' }} />
            </Col>
            <Col xs={6} className="d-flex justify-content-center mb-3">
              <Image src={vaca2} fluid rounded style={{ margin: '5px' }} />
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="d-flex justify-content-center mb-3">
              <Image src={vaca3} fluid rounded style={{ margin: '5px' }} />
            </Col>
            <Col xs={6} className="d-flex justify-content-center mb-3">
              <Image src={vaca4} fluid rounded style={{ margin: '5px' }} />
            </Col>
          </Row>
          <Button variant="success" className='text-center ' href=''> Geolocalizacion de sensores</Button>
        </Card.Body>
      </Card>
      <Card className='shadow'>
        <Image src={mapa}></Image>
      </Card>
      <DropdownButton
          className='mt-3'
          align={{ lg: 'end' }}
          title="Ubicaciones de sensores"
          id="dropdown-menu-align-responsive-1"
          variant='success'
        >
          <Dropdown.Item eventKey="1">21.82247-102.74788 Sin novedades</Dropdown.Item>
          <Dropdown.Item eventKey="2" className='text-color-red'>21.82257-102.74733 Presencia detectada</Dropdown.Item>
        </DropdownButton>,
    </>
  )
}