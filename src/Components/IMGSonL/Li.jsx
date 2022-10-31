import React from 'react'
import './Li.css';
const Li = (props) => {
  return (
    <div className="card mb-3 Li" >
  <div className="row no-gutters">
    <div className="col-md-4">
    <img src={props.image}  alt='img'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <p className="card-text"><small className="text-muted">{props.heading}</small></p>
        <h2 className="card-title">{props.number}</h2>
        
      </div>
    </div>
  </div>
</div>
  )
}

export default Li