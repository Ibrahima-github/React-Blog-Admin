import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export class Login extends Component{

    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        var jwt = require('jsonwebtoken');
        
        var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

        fetch(process.env.REACT_APP_API+'utilisateurs', {method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                UtilisateurUsername: event.target.UtilisateurUsername.value,
                UtilisateurPassword: event.target.UtilisateurPassword.value})
        })
        .then(response => 
            response.json()
        )
        .then((result) => {
            alert(result);
        })
        .catch(error => {
            console.error(error.message)
        }); 
    }

    render(){

        return (
          <div className="Login">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  
                  type="text"
                  name="UtilisateurName"
             
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="UtilisateurPassword"
                  
                />
              </Form.Group>
              <Button block size="lg" type="submit" >
                Login
              </Button>
            </Form>
            
          </div>
          
        );
    }
}