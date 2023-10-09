import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";

function NavDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="">Detail informations</Dropdown.Item>
        <Dropdown.Item href="/login">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavDropdown;