import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './tutorials.css';

export const TutorialsPage = () => {
  return (
    <div className='tutorials-wrapper'>
      <aside>
        <ul>
          <li>
            <NavLink to='/tutorials'>Home</NavLink>
          </li>
          <li>
            <NavLink to='module-intro'>Module Intro</NavLink>
          </li>
          <li>
            <NavLink to='fc-component-intro'>Function Component Intro</NavLink>
          </li>
          <li>
            <NavLink to='cc-component-intro'>Class Component Intro</NavLink>
          </li>
          <li>
            <NavLink to='state-events'>State and Events</NavLink>
          </li>
          <li>
            <NavLink to='cc-lifecycle'>Class Component Lifecycle</NavLink>
          </li>
          <li>
            <NavLink to='fc-state-lifecycle'>Function Component Lifecycle</NavLink>
          </li>
          <li>
            <NavLink to='css-module'>CSS Module</NavLink>
          </li>
        </ul>
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
