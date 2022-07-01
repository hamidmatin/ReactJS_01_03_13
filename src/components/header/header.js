import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/tutorials">Tutorials</NavLink></li>
          <li><NavLink to="/calculator">Calculator</NavLink></li>
          
        </ul>
      </nav>
    </header>
  )
}
