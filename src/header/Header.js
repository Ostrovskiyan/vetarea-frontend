import {Navbar, Nav} from "react-bootstrap" 
import { Link } from "react-router-dom";
import logo from './header-logo.svg';

function Header(props) {
    return (
        <Navbar bg="light">
            <Navbar.Brand href="#home">
                <img alt="Logo"
                     src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"/>
                Vetarea
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link>Main</Nav.Link>
                    <Nav.Link>About us</Nav.Link>
                    <Nav.Link>Facilities</Nav.Link>
                    <Nav.Link>Doctors</Nav.Link>
                    <Nav.Link>Contacts</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>Укр</Nav.Link>
                    <Nav.Link>Eng</Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;