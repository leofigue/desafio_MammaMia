import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import cart from "/cart2.png"
import { PizzaContext } from '../context/PizzaContext';

const NavBar = () => {
  const {valortotal} =  useContext(PizzaContext);

  const navigate = useNavigate();

  const carro=()=>{
    navigate('/carro')
  }

  return (
    <Navbar className="navbar sticky-top" >
      <Container>
        <Link to="/" className='titleNavBar'>🍕 Pizzería Mamma Mia!</Link>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className='divCarroHeader' onClick={()=>carro()} style={{cursor:'pointer'}}>
            <img src={cart} alt='Carro de compra' className='imgCarro'></img> <span className='titleNavBar'>$ {valortotal.toLocaleString("es-MX")}</span>
            </div>
            
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar