import React, { useState } from 'react'
import './projects.css'
import proimage1 from '../assets/media.png'
import proimage2 from '../assets/bmi.png'
import proimage3 from '../assets/projectfair.png'
import proimage4 from '../assets/Amazon_clone.png'
import { Fade } from "react-awesome-reveal";
import Card from 'react-bootstrap/Card';

/* import { useCollapse } from 'react-collapsed'
 */import ProjectCards from './ProjectCards'



function Projects() {
 /*  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded }) */


  const projects =
    [
      {
        proimage: proimage3,
        project_name: 'Project Fair',
        description: ' Created a Full Stack Project Using React, Node.js, Mongodb. Users can access different website project. Add project features are also includes. ',
      },

      {
        proimage: proimage1,
        project_name: 'Media Player',
        description: 'Developed a music Player web application using React. That offers users an interface to play, pause, and manage their music collection.  ',
      },
      {
        proimage: proimage4,
        project_name: 'Amazon Clone',
        description: ' Clone amazon website using React',
      },

      {
        proimage: proimage2,
        project_name: 'BMI Calculator',
        description: 'Developed a BMI Calculator using HTML CSS and JavaScript. It will take the input values required to make the BMI calculation and then return the BMI along with a short message in an HTML element displayed on the screen.',
      },

    ]

 /*  const backimage = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Graukarte.svg',
      description: ' Created a Full Stack Project Using React, Node.js, Mongodb. Users can access different website project. Add project features are also includes. ',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Graukarte.svg',
      description: 'Developed a music Player web application using React. That offers users an interface to play, pause, and manage their music collection.  ',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Graukarte.svg',
      description: ' Clone amazon website using React',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Graukarte.svg',
      description: 'Developed a BMI Calculator using HTML CSS and JavaScript. It will take the input values required to make the BMI calculation and then return the BMI along with a short message in an HTML element displayed on the screen.',
    }
  ]
 */

  return (
    <div id='projects'>
      <div className="row">
        <h3 className='text-center '>My <span className='text-primary'>Projects</span></h3>
        <div className="col-md-12 me-5 flip-card " >
          <div className="row flip-card-inner  "  >
            {projects.map((item, index) => (
              
              <div className="col-md-3 m-5  " /* key={index} item={proj} */>
                 
                <Fade cascade={false} delay={index * 200} direction='up' /* triggerOnce={true} */>


                  <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={item.proimage} height={'320px'} width={'580px'} />
                    <Card.Body>
                      <Card.Title >{item.project_name}</Card.Title>
                      {/* <Card.Text {...getCollapseProps()}> {proj.description}</Card.Text> */}

               

                    {/*   <div>
                        <Button variant="outline-primary"
                          {...getToggleProps({
                            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                          })}
                        >
                          {isExpanded ? 'Collapse' : 'Expand'}
                        </Button>

                      </div> */}

                    </Card.Body>
                    <ProjectCards key={index} item={item}/>
                  </Card>
                 

                </Fade>
                
              </div>
            ))
            }
          </div>

        </div>
      </div>
   
    </div>

    /*  <div>
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}> 
         <div className="row pro_card"  >
           <h3 className='text-center '>My <span className='text-primary'>Projects</span></h3>
           <div className="col-md-12 me-5 " >
             <div className="row"  >
               {projects.map((proj, index) => (
                 <div className="col-md-3 m-5  " key={index}>
                   <img  src={proj.proimage} height={'320px'} width={'400px'} alt="" style={{ borderRadius: '30px' }} />
                   <h5 className='text-center'>{proj.project_name}</h5>
                 </div>
               ))
               }
             </div>
           </div>
         </div>
 
         <div className="row card-back ">
 
           <div className="col-md-12 me-5"  >
             <div className="row " >
               {backimage.map((des, index) => (
                 <div className="col-md-3 m-5 " key={index}>
                   <img src={des.img} height={'320px'} width={'400px'} alt="" style={{ borderRadius: '30px' }} />
                   <p style={{ textAlign: 'justify' }}>sdfghvbcfghbnbvcghbb vc</p>
                 </div>
               ))
               }
             </div>
           </div>
         </div>
        </ReactCardFlip>
  
 
 
 
     </div>
  */


  )
}

export default Projects