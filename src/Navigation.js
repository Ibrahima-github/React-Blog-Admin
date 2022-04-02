import React, {Component} from 'react';
import {  Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


 export class Navigation extends Component {

     Logout (event){
        event.preventDefault();
         fetch(process.env.REACT_APP_API + 'utilisateurs/logout', {
            method: "POST",
            headers:{'Content-type': 'application/json',},
            credentials: 'include'
        })
    }

    render(){

        return(
            <nav id="nav-wrap">
              
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                Show navigation
              </a>
              <a className="mobile-btn" href="#home" title="Hide navigation">
                Hide navigation
              </a>
              
              <ul id="nav" className="nav">
                
                <li className="current">
                    <Link to="/posts">
                        Posts
                    </Link>
                </li>
    
                <li>
                <Link to="/categories">
                        Catégories
                    </Link>
                </li>
    
                <li>
                <Link to="/utilisateurs">
                        Utilisateurs
                    </Link>
                </li>
    
                <li>
                 <a href="https://ibrahimasall.com" target="_blank">
                    Réalisations
                  </a> 
                </li>
    
                <li>
                  <a  href="https://blog.ibrahimasall.com" target="_blank">
                    Blog
                  </a>
                </li>
    
                <li>
                  <Button onClick={this.Logout}>
                      Logout
                  </Button>
                </li>
              </ul>
              
            </nav>
        )
    }
}