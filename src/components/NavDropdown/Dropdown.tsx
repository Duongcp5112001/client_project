import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from '../../assets/defaultAva.jpg'
import './style.css'

function NavDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='cumstom-dropdown'>
        <div className='img-drop-container'>
          <img className='img-drop' src={Avatar} alt="defaultAvatar" />
          <p>Nguyen Hoang Duong</p>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className='custom-menu'>
        <Dropdown.Item href="" className='custom-item'>Detail informations</Dropdown.Item>
        <Dropdown.Item href="/login" className='custom-item'>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavDropdown;