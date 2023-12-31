/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./styles.css"
import Logo from '../../assets/CMS.png'
import NavDropdown from '../NavDropdown/Dropdown';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className='navLogo'>
        <a href="/"><img src={Logo} alt="Image" className='custom-logo'/></a>
      </div>
      <div className='navDropdown'>
        <NavDropdown />
      </div>
    </div>
  );
};

export default Navbar;