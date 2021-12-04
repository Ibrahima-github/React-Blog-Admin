import React, { Component } from 'react';
import {Modal, Button, Row, Col, Form, Image} from 'react-bootstrap';


export class AddPost extends Component  {

    constructor(props){
        super(props);
        this.state={category:[]};
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }
    
    photofilename = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

    componentDidMount(){
        fetch(process.env.REACT_APP_API+'categories' )
        .then(response=> response.json())
        .then(data => {
            this.setState({category:data});
        })
        
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'posts', {method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                PostName: event.target.PostName.value,
                Category: event.target.Category.value,
                PostDescription: event.target.PostDescription.value,
                PostYoutubeHref: event.target.PostYoutubeHref.value,
                AdsTitle : event.target.AdsTitle.value,
                AdsImageFileName : this.imagesrc,
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

    handleFileSelected(event){
        event.preventDefault();
        this.photofilename=event.target.files[0].name;
        const formData = new FormData();

        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API+'Posts/SaveFile', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then((result) => {
            this.imagesrc=process.env.REACT_APP_PHOTOPATH+result
            console.log({result})
        },
        (error) => {
            alert('Failed');
        })
        
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
                                    Ajouter un Post
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={6}>
                                        <Form  onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="Post">
                                                <Form.Label>Création d'un post</Form.Label>
                                                <Form.Control 
                                                type="text" 
                                                name="PostName"
                                                required
                                                placeholder="Entrez un titre"
                                                />
                                                <Form.Control as='select' name='Category'>
                                                    {this.state.category.map(category=>
                                                        <option key={category.CategoryId}>
                                                            {category.CategoryName}
                                                        </option>)}
                                                </Form.Control>
                                                <Form.Control 
                                                type="text" 
                                                name="PostDescription"
                                                required
                                                placeholder="Entrez une description"
                                                />
                                                <Form.Control 
                                                type="text" 
                                                name="PostYoutubeHref"
                                                required
                                                placeholder="Entrez l'url youtube de la vidéo"
                                                />
                                                <Form.Control 
                                                type="text" 
                                                name="AdsTitle"
                                                required
                                                placeholder="Entrez le titre de votre pub"
                                                />
                                                <Form.Control 
                                                type="text" 
                                                name="AdsLink"
                                                required
                                                placeholder="Entrez l'url de votre pub"
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Ajouter un Post
                                                </Button>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col sm={6}>
                                        <Image 
                                            width="200px"
                                            height="200px"
                                            src={this.imagesrc}
                                        />
                                        <input 
                                            onChange={this.handleFileSelected}
                                            type="File"
                                        />
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