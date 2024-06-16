import React from 'react'
import Card from 'react-bootstrap/Card';
import { Fade } from "react-awesome-reveal";



function Skills() {

  const skills = [
    {
      skill: 'HTML',
      image: 'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png'
    },
    {
      skill: 'CSS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png'
    },
    {
      skill: 'JS',
      image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'
    },
    {
      skill: 'React',
      image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
    },
    {
      skill: 'Angular',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
    },
    {
      skill: 'Mongo DB',
      image: 'https://hackolade.com/img/mongodb.png'
    },
    {
      skill: 'Node',
      image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
    },
    {
      skill: 'Bootstrap',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png'
    },
    ,
    {
      skill: 'python',
      image: 'https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png'
    },


  ]
  const certificates = [
    {
      image: "",
      name: " REACT Basics - HackerRank"
    }
  ]

  return (

    <div id='skills' className='row mb-5 ms-4 '>
      <div className="col-md-1"></div>

      <div className="col-md-5">
        <h4 className='mt-5 text-center mb-5'>SKILLS</h4>
        <div className="row row-cols-2 row-cols-md-3 ">
          <Fade  direction='left' /* triggerOnce={true} */>
            {skills.map((skill, index) => (
              <div className="col" key={index} >
                <div className='skill'>
                  <img src={skill.image} alt="" height={'100px'} />
                  <div>
                    <p className='ms-4 mt-2'>{skill.skill}</p>
                  </div>
                </div>
              </div>
            ))
            }
            </Fade>
        </div>
      </div>

      <div className="col-md-5">
        <h4 className='mt-5 text-center mb-5'>CERTIFICATION</h4>
        <div className='row ' >
        <Fade  direction='right' /* triggerOnce={true} */>
         {certificates.map((cer,index)=>(
          <div className="col w-100" key={index} >
          <Card style={{ height: '100px', backgroundImage: 'linear-gradient(rgb(57, 85, 72),rgb(3, 47, 60))' }} >
{/*           <Card.Img variant="top" src={cer.image} height={'320px'} width={'580px'} />
 */}            <Card.Body >
              <Card.Title>
                <h6 className='mt-3 text-center'>{cer.name}</h6>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
         ))
          }
          </Fade>
        </div>
      </div>

      <div className="col-md-1"></div>

    </div>


  )
}

export default Skills