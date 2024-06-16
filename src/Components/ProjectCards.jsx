import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import Button from 'react-bootstrap/Button';


function ProjectCards({item}) {
   
    const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded }) 

  return (
    <div>
    <Button variant="outline-primary" className='ms-2 mb-2'
      {...getToggleProps({
        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
      })}
    >
      {isExpanded ? 'View Less' : 'View More'}
    </Button>
    <p className='p-2' {...getCollapseProps()}>{item.description}</p>
  </div>
  )
}

export default ProjectCards

