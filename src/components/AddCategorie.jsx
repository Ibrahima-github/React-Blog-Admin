import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class AddCategorie extends Component  {

    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'categories', {method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                CategoryName: event.target.CategoryName.value})
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
                                    Ajouter une catégorie
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={6}>
                                        <Form  onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="CategoryName">
                                                <Form.Label>Nom de catégorie</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="CategoryName"
                                                required
                                                placeholder="Entrez une catégorie"
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Ajouter une catégorie
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