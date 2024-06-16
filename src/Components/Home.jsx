import React from 'react'
import profimage from '../assets/h1.png'
import { Fade } from "react-awesome-reveal";

function Home() {

  return (
   <section id='about'>
      <Fade direction='down'>
      <div className='container w-100'>
        <div className=' row m-5 pt-5'>
       
          <div className="col-md-1"></div>
         
          <div className="col-md-5 ">
            
            <h4  className='pb-4 mt-5 pt-5'>Hi, I'm Haritha Vysakh</h4>
            <p style={{textAlign:'justify',color:'white'}}>I'm a MEARN Stack Web Developer, completed my MTech in computer science and engineering from APJ Abdul Kalam Technological University. I am eager to begin my software career and am excited about the opportunity to work with a company. While I may not have extensive experience in the field, I am a quick learner and have developed a strong set of skills through my studies and internships.  </p>

{/*              <button className='btn btn-outline-primary mt-3' >Contact Me</button>
 */}   
         </div>
       
          <div className="col-md-1"></div>
        
          <div className="col-md-5">
            <img className='mt-5' src={profimage} height={'380px'} width={'450px'} style={{borderRadius:'50%'}} alt="" />
          </div>
       
    
      </div>
      </div>
    </Fade>
   </section>
  )
}

export default Home