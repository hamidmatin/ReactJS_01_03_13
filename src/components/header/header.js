import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToggleSwitch } from '../toggle-switch';
import './header.css';

export const Header = ({ onThemeChange }) => {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/tutorials'>Tutorials</NavLink>
          </li>
          <li>
            <NavLink to='/calculator'>Calculator</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
        </ul>
        <div className='right-side'>
          <ToggleSwitch onLable='dark' offLable='light' onToggleSwitch={onThemeChange} />
        </div>
      </nav>
    </header>
  );
};
