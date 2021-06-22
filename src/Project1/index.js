import { useState } from 'react';
import './index.css';

const Project1 = () => {
  const [collapse, setCollapse] = useState(false);

  const toggleMenu = () => {
    setCollapse(!collapse);
  };

  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-light bg-dark'>
        <a href='#' className='navbar-brand'>
          <i className='fas fa-child text-warning fa-2x' />
        </a>
        <button
          type='button'
          className='navbar-toggler bg-light'
          onClick={toggleMenu}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={
            'collapse navbar-collapse justify-content-between' +
            (collapse ? ' show' : '')
          }
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                className='nav-link text-light text-uppercase font-weight-bold px-3'
                href='#'
              >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-light text-uppercase font-weight-bold px-3'
                href='#'
              >
                Skills
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link text-light text-uppercase font-weight-bold px-3 dropdown-toggle'
                href='#'
              >
                Projects
              </a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href=''>
                  Project 1
                </a>
                <a className='dropdown-item' href=''>
                  Project 2
                </a>
                <a className='dropdown-item' href=''>
                  Project 3
                </a>
                <a className='dropdown-item' href=''>
                  Project 4
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-light text-uppercase font-weight-bold px-3'
                href='#'
              >
                Team
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-light text-uppercase font-weight-bold px-3'
                href='#'
              >
                Contact
              </a>
            </li>
          </ul>
          <form className='form-inline ml-3'>
            <div className='input-group'>
              <input
                type='text'
                placeholder='Search'
                className='form-control'
              />
              <div className='input-group-append'>
                <button type='button' className='btn'>
                  <i className='fas fa-search text-muted' />
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Project1;
