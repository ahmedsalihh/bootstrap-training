/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

const Navbar = ({ onSignOut }) => {
  const [collapse, setCollapse] = useState(false);

  const toggleMenu = () => {
    setCollapse(!collapse);
  };
  return (
    <nav className='navbar navbar-expand-md navbar-light'>
      <button
        className='navbar-toggler ml-auto mb-2 bg-light'
        type='button'
        onClick={toggleMenu}
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className={`collapse navbar-collapse ${collapse ? 'show' : ''}`}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-2 col-lg-3 col-md-4 sidebar fixed-top'>
              <Sidebar />
            </div>
            <div className='col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar'>
              <Nav onSignOut={onSignOut} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
