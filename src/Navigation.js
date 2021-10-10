import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


export const Navigation = () => {

    return(
        <Navbar>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/posts">Posts</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/categories">Catégories</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/utilisateurs">Utilisateurs</NavLink>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}
