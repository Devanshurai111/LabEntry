import React from 'react'
import Li from '../IMGSonL/Li'
import './LeftDoor.css';
const LeftDoor = (props) => {
  return (
    <div className={`LeftDoor ${props.login?'cot':''}`}>
      <div className='head'>
        <h2>
          Java
        </h2>
        <p>Something was meant to be here</p>
      </div>
      <div className='img' >
      <Li image='https://www.pexels.com/photo/person-sitting-on-bench-under-tree-1280162/' heading='Total Users' number='1000'/>
      <Li image='https://www.pexels.com/photo/person-sitting-on-bench-under-tree-1280162/' heading='Total Users' number='1000'/>
      <Li image='https://www.pexels.com/photo/person-sitting-on-bench-under-tree-1280162/' heading='Total Users' number='1000'/>
      </div>
    </div>
  )
}

export default LeftDoor