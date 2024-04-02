import React from 'react';
import './NavBarHome.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

const Home = () => {
  return <h1>Home page</h1>
}


const Notes = () => {
  return <h1> Notes page</h1>
}

const User = () => {
  return <h1> Users page</h1>
}

const NavBarHome = () => {
  return (
    <div className='NavBar'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Notes' element={<Notes />} />
        <Route path='/User' element={<User />} />
      </Routes>

      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/Notes' className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            Notes
          </NavLink>
        </li>
        <li>
          <NavLink to='/User' className={({ isActive }) => (isActive ? 'active-link' : undefined)}>
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBarHome;