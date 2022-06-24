import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/module-intro">Module Intro</NavLink></li>
          <li><NavLink to="/fc-component-intro">Function Component Intro</NavLink></li>
          <li><NavLink to="/cc-component-intro">Class Component Intro</NavLink></li>
          <li><NavLink to="state-events">State and Events</NavLink></li>
          <li><NavLink to="cc-lifecycle">Class Component Lifecycle</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
