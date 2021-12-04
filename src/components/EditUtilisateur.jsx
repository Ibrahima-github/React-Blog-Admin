import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class EditUtilisateur extends Component  {

    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'utilisateurs', {method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                UtilisateurId: event.target.UtilisateurId.value,
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
                                    Modifier les infos d'un utilisateur
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={6}>
                                        <Form  onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="UtilisateurId">
                                                <Form.Label>ID de l'utilisateur</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="UtilisateurId"
                                                required
                                                disabled
                                                defaultValue={this.props.utilisateurid}
                                                />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="UtilisateurUsername">
                                                <Form.Label>Nom de l'utilisateur</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="UtilisateurUsername"
                                                required
                                                defaultValue={this.props.utilisateurname}
                                                />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="UtilisateurEmailAddress">
                                                <Form.Label>Adresse email de l'utilisateur</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="UtilisateurEmailAddress"
                                                required
                                                defaultValue={this.props.utilisateuremailaddress}
                                                />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="UtilisateurPassword">
                                                <Form.Label>Entrez un  mot de passe</Form.Label>
                                                <Form.Control 
                                                type="password" 
                                                name="UtilisateurPassword"
                                                required
                                                defaultValue={this.props.utilisateurpassword}
                                                />
                                                
                                            </Form.Group>
                                           
                                            <Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Mettre à jour
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

