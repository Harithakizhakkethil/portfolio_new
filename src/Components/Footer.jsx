
import React from 'react'
import './Footer.css'
import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <>

      <div className="row d-flex justify-content-center align-items-center  mt-2 p-4 w-100" style={{ backgroundImage: 'linear-gradient(rgb(7, 46, 62),rgb(3, 47, 60))', height: '300px' }} id='contact'>
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <Fade direction='left'><h3>Contact </h3>
          <p style={{ color: 'white', fontSize: '18px' }}>Fell free to reach out!</p>
          </Fade>
        </div>
        <div className="col-md-4 d-flex flex-column " >

       
            <ul class="social-icons">
              <li><a href="#"><i class="fa-solid fa-envelope"><span className='ms-3'>harithakizhakkethil0@gmail.com</span></i></a></li>
              <li><a href="#"><i class="fa-brands fa-linkedin"><span className='ms-3'>www.linkedin.com/in/haritha-vysakh</span></i></a></li>
              <li><a href="#"><i class="fa-brands fa-github"><span className='ms-3'>https://github.com/Harithakizhakkethil</span></i></a></li>
              <li><a href="#"><i class="fa-solid fa-phone"><span className='ms-3'>9656792881</span></i></a></li>
            </ul>
     
          
        </div>
        <div className="col-md-2"></div>

      </div>

    </>
  )
}

export default Footer