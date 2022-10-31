import React from 'react';
import './Circle.css';
const Circle = (props) => {
  const [pass,setPass]=React.useState("");

  return (
    <div class={`circle ${props.login?'cat':''}`}>
      <img src="https://cdn-icons-png.flaticon.com/512/2313/2313448.png" alt="" />
      <p>Enter password</p>
      <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" />
      <button className='btn' 
      onClick={()=>props.Login(pass)}
      >Enter</button>
    </div>
  )
}

export default Circle