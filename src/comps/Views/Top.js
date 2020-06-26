import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Top(props) {
  return (
    <div className="bg-dark text-light">
        <bs.Navbar fixed="top" bg="dark" expand="lg" variant="dark">
        <bs.Navbar.Brand>
            <Link to="/" className="text-light">Kandin's Place</Link>
        </bs.Navbar.Brand>
        <bs.Navbar.Toggle aria-controls="basic-bs.Navbar-bs.Nav" />
        <bs.Navbar.Collapse id="basic-bs.Navbar-bs.Nav" className="text-light">
            <bs.Nav className="mr-auto text-light">
                <Link to='/Shop' className="nav-link text-light">
                    Shop
                </Link>
                <Link to='/' className="nav-link text-light">
                    About
                </Link>
                <Link to='/Contact' className="nav-link text-light">
                    Contact
                </Link>
            </bs.Nav>
            <bs.Nav>
                <bs.NavDropdown title="User" id="basic-bs.Nav-dropdown" className="text-light" alignRight>
                    <bs.NavDropdown.Item href="#action/3.1">Action</bs.NavDropdown.Item>
                    <bs.NavDropdown.Item href="#action/3.2">Another action</bs.NavDropdown.Item>
                    <bs.NavDropdown.Item href="#action/3.3">Something</bs.NavDropdown.Item>
                    <bs.NavDropdown.Divider />
                    <bs.NavDropdown.Item href="#action/3.4">
                        <Link to="/Authenticate">
                            Sign in
                        </Link>
                    </bs.NavDropdown.Item>
                    <bs.NavDropdown.Item href="#action/3.4">
                        <Link to="/Authenticate" className="text-danger">
                            Sign out
                        </Link>
                    </bs.NavDropdown.Item>
                </bs.NavDropdown>
            </bs.Nav>
        </bs.Navbar.Collapse>
        </bs.Navbar>
    </div>
  );
}

export default withFirebase(Top);
