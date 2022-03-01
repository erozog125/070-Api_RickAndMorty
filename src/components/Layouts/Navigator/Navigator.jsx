import React from 'react'
import { NavLink } from 'react-router-dom';      

export const Navigator = () => {
  return (
    <div className='buttons'>
      <NavLink className="btn-nav" to="/">Home</NavLink>
      <NavLink to="/allcharacters">Get EveryBody</NavLink>
      <NavLink to="/customcharacters">Get custom Character</NavLink>
    </div>
  )
}
