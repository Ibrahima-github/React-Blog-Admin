import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class EditCategory extends Component  {

    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'categories', {method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                CategoryId: event.target.CategoryId.value,
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
                                    Modifier une catégorie
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={6}>
                                        <Form  onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="CategoryId">
                                                <Form.Label>ID de catégorie</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="CategoryId"
                                                required
                                                disabled
                                                defaultValue={this.props.categoryid}
                                                />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="CategoryName">
                                                <Form.Label>Nom de catégorie</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="CategoryName"
                                                required
                                                defaultValue={this.props.categoryname}
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

