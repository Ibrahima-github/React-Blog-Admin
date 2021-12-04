import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class EditPost extends Component  {

    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'posts', {method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                PostId: event.target.PostId.value,
                PostName: event.target.PostName.value,
                Category: event.target.Category.value,
                PostDescription: event.target.PostDescription.value,
                PostYoutubeHref: event.target.PostYoutubeHref.value,
                AdsTitle : event.target.AdsTitle.value,
                AdsImageFileName : this.photofilename,
                AdsLink : event.target.AdsLink.value})
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
                                                <Form.Label>ID du post</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="PostId"
                                                required
                                                disabled
                                                defaultValue={this.props.postid}
                                                />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="PostName">
                                                <Form.Label>Titre du post</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="PostName"
                                                required
                                                defaultValue={this.props.postname}
                                                />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="Category">
                                                <Form.Label>Categorie du post</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="Category"
                                                required
                                                defaultValue={this.props.postcategory}
                                                />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="PostDescription">
                                                <Form.Label>Description du post</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="PostDescription"
                                                required
                                                defaultValue={this.props.postdescription}
                                                />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="PostYoutubeHref">
                                                <Form.Label>Url de la vidéo</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="PostYoutubeHref"
                                                required
                                                disabled
                                                defaultValue={this.props.postyoutubehref}
                                                />
                                                
                                            </Form.Group>
                                            <Form.Group controlId="ImageFileName">
                                                <Form.Label>Nom de l'image publicitaire</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="ImageFileName"
                                                required
                                                defaultValue={this.props.postimagefilename}
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

