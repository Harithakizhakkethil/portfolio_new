import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Fade } from "react-awesome-reveal";
import './Header.css'



function Header() {

  const [show,setShow] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })

  return (
    <div>
      <Navbar expand="lg" style={{fontStyle:'italic',zIndex:'1'}} className=' px-5 py-4 position-fixed w-100 top-0'  >
        <Container>
          <Navbar.Brand  href="#home" /* className='fs-4  ' */ className={`${show && 'nav-black'} nav fs-4`}  style={{color:'white'}}> <FontAwesomeIcon className='me-3' icon={faUserTie} />PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto " >
           <Fade cascade damping={0.2}> 
              <Nav.Link  href="#about" style={{color:'white'}}>About</Nav.Link>
              <Nav.Link href="#experience"  style={{color:'white'}}>Experience</Nav.Link>
              <Nav.Link href="#skills" style={{color:'white'}}>Skills & Certification</Nav.Link>
              <Nav.Link href="#projects" style={{color:'white'}}>Projects</Nav.Link>
              <Nav.Link href="#contact" style={{color:'white'}}>Contact</Nav.Link>
        </Fade> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header