import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class AddUtilisateur extends Component  {

    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'utilisateurs', {method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                UtilisateurUsername: event.target.UtilisateurUsername.value,
                UtilisateurEmailAddress: event.target.UtilisateurEmailAddress.value,
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

                return(
                    <div className="container">
                        <Modal 
                        {...this.props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header >
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Ajouter un utilisateur
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={6}>
                                        <Form  onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="Utilisateur">
                                                <Form.Label>Création d'un utilisateur</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="UtilisateurUsername"
                                                required
                                                placeholder="Entrez votre nom"
                                                />
                                                <Form.Control 
                                                type="email" 
                                                name="UtilisateurEmailAddress"
                                                required
                                                placeholder="Entrez votre adresse mail"
                                                />
                                                <Form.Control 
                                                type="password" 
                                                name="UtilisateurPassword"
                                                required
                                                placeholder="Entrez un mot de passe"
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Ajouter un utilisateur
                                                </Button>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={this.props.onHide}>Fermer</Button>
                            </Modal.Footer>
                        </Modal> 
                    </div>
            
            );
        }
}


//
//headers:{
 //   'Accept':'application/json',
 //   'Content-Type':'application/json',
 //   "Access-Control-Allow-Origin": "*"
//},