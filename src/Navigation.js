import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';


export const Navigation = (UtilisateurUsername) => {

    const logout = async () =>{
        await fetch(process.env.REACT_APP_API + 'utilisateurs/logout', {
            method: "POST",
            headers:{'Content-type': 'application/json'},
            credentials: 'include'
        })
    }

    let menu;

    if(UtilisateurUsername === ''){
        menu = (
            <Nav>

                <NavLink className="d-inline p-2 bg-dark text-white" to="/home">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/posts">Posts</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/categories">Catégories</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/utilisateurs">Utilisateurs</NavLink>
                        <Link className="nav-link" to="/">Login</Link>
            </Nav>
        );
    }else(
        menu = (
            <Nav>

                <NavLink className="d-inline p-2 bg-dark text-white" to="/Home">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/posts">Posts</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/categories">Catégories</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/utilisateurs">Utilisateurs</NavLink>
                        <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
            </Nav>
        )
    )
    
    return(
        <Navbar>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
               
                    {menu}
                

            </Navbar.Collapse>
        </Navbar>
    )
}
