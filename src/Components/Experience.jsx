import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import './Experience.css'
import { Fade } from "react-awesome-reveal";



function Experience() {
const [experiences] = useState(
  [
    {
      cname: "Luminar Technolab",
      post: "MEARN Full Stack Developer intern",
      duration: "(NOV 2023 - MAY 2023)",
      description: "Collaborated effectively with members of MEARN full stack development team. Developed different projects using React, Node and express",
      image:"https://cdn.pixabay.com/photo/2022/05/27/11/17/coding-7224945_1280.png"
    },
    {
      cname: "Alnoor International School , Bahrain",
      post: " Computer science Teacher",
      duration: "(MAR 2021 - JUNE 2022)",
      description: "Mentored students in the use of HTML, CSS, and basic programming concepts.Teach students python programming language and basic programs",
      image:'https://static.vecteezy.com/system/resources/previews/024/281/533/original/school-illustration-blue-book-icon-free-png.png'
      
    }
  ]
)

 

  return (
    <div id='experience' >
      <div className='row ms-3'>
        <div className="col-md-2"></div>

        <div className='col-md-9 mb-5 '>
          <h3 className='text-center ' style={{ marginTop: '90px' }}>My <span className='text-primary'>Experiences</span></h3>
          <div className='row row-cols-1 row-cols-md-3 '>

            {experiences.map((exp,index) => (
             <div className='col me-5 mt-5' key={index}>
                              <Fade cascade={false} delay={index * 200} direction='up' /* triggerOnce={true} */>

                <Card className='cards' style={{height:'450px'}} >
                <Card.Img variant="top" src={exp.image} height={'220px'} />
                <Card.Body className='card__info'>
                    <Card.Title>
                      <h6 >{exp.cname}</h6>
                      <h6 style={{fontSize:'15px'}}>{exp.post}<span style={{ fontSize: '12px' }}> {exp.duration}</span>  </h6>
                    </Card.Title>
                    <Card.Text>
                      <p className="mt-4">{exp.description}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Fade>
             </div>
            ))
            }
           
          </div>
        </div>
        
       <div className="col-md-1"></div>
    </div>
    </div>
  )
}

export default Experience