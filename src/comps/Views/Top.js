import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Toggle from '../Tools/Toggle';
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
                
                <Toggle>{tog=><>
                    <div onMouseEnter={tog.toggle} onMouseLeave={tog.toggle}>
                        <Link to='/Shop' className="nav-link text-light">
                            Shop
                        </Link>
                        <bs.Collapse in={tog.value} timeout={200}>
                            <div>
                                <div className="pl-3 my-over-flow">
                                    <p>Lorem Ipsum</p>
                                    <p>Sit Emit</p>
                                    <p>Hello World</p>
                                </div>
                            </div>
                        </bs.Collapse>
                    </div>
                </>}</Toggle>
                
                <Link to='/' className="nav-link text-light">
                    About
                </Link>
                <Link to='/Contact' className="nav-link text-light">
                    Contact
                </Link>
                <Link to='/FAQ' className="nav-link text-light">
                    FAQ
                </Link>
                <Link to='/Admin/defualt' className="nav-link text-light">
                    Admin
                </Link>
            </bs.Nav>
            <bs.Nav>
                <bs.NavDropdown title="User" id="basic-bs.Nav-dropdown" className="text-light" alignRight>
                    <bs.NavDropdown.Item>Action</bs.NavDropdown.Item>
                    <bs.NavDropdown.Item>Another action</bs.NavDropdown.Item>
                    <bs.NavDropdown.Item>Something</bs.NavDropdown.Item>
                    <bs.NavDropdown.Divider />
                    <bs.NavDropdown.Item>
                        <Link to="/Authenticate">
                            Sign in
                        </Link>
                    </bs.NavDropdown.Item>
                    <bs.NavDropdown.Item >
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
