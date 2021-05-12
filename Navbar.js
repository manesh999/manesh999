import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import estore from '../estore.jpg'
import {useHistory} from'react-router-dom'


function NavbarComponent() {
    const user = localStorage.getItem('username');
    const history = useHistory();
    const logout =()=>{
        localStorage.clear();
        let path = "/";
        history.push(path);
    }

    return (
        <>
            <Navbar bg="dark" className="navabr-height" variant="dark">
                <Navbar.Brand href="">
                    <img className="logo" src={estore} />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title={user} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default NavbarComponent