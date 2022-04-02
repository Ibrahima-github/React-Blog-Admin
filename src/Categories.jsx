
import React, { Component} from 'react';
import { AddCategorie } from './components/AddCategorie';
import { EditCategory } from './components/EditCategory';
import {Button, ButtonToolbar, Table} from 'react-bootstrap';
import { Navigation } from './Navigation';

export class Categories extends Component {
    constructor(props){
        super(props);
        this.state={category:[], addModalShow: false, editModalShow: false};
    }
 
    
   refreshList(){

    
    
       fetch(process.env.REACT_APP_API+'categories')
           .then(response => {
               console.log(response);
               if(response.status === 200){
                  return response.json()
               }
               console.log(response.status);
               throw response;
           }    )
           .then(data => {
               console.log(data);
               this.setState({category:data});
           })
           .catch(error => {
               console.error(error.message)
           }); 
   }

   componentDidMount(){
       
       this.refreshList();
   }

   deleteCategory(categoryid){
       if(window.confirm('Êtes vous sûr de vouloir supprimer ?')){
           fetch(process.env.REACT_APP_API + 'categories/' + categoryid, {
               method: 'DELETE',
               header: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               }
           })
           .then(response => response.json())
           .then(result => {
               alert(result);
           })
       }
   }

   
   render(){
            const { category, categoryid, categoryname} = this.state;
            let addModalClose = () => this.setState({addModalShow:false});
            let editModalClose = () => this.setState({editModalShow:false});
        
            return(
             
                <div>
        <Navigation />
                    <div className="mt-5 d-flex justify-content-left">
                        This is Categories page
                        <Table className="mt-4" striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Category Id</th>
                                    <th>Category Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map(category=>
                                    <tr key={category.CategoryId}>
                                    <td>{category.CategoryId}</td>
                                    <td>{category.CategoryName}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button 
                                                className="mr-2" 
                                                variant="info"
                                                onClick={() => this.setState({
                                                    editModalShow:true, categoryid: category.CategoryId, categoryname:category.CategoryName
                                                })}>Modifier
                                            </Button>

                                            <Button 
                                                className="mr-2" 
                                                variant="danger"
                                                onClick={() => 
                                                this.deleteCategory(category.CategoryId)
                                                }>Supprimer
                                            </Button>

                                            <EditCategory
                                                show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                categoryid={categoryid}
                                                categoryname={categoryname}
                                            />
                                        </ButtonToolbar>
                                    </td>
                                    </tr>)}
                            </tbody>
                        </Table>
    
                        <ButtonToolbar>
                            <Button 
                                variant='primary'
                                onClick={() => this.setState({addModalShow:true})}>
                                    Ajouter une catégorie
                                </Button>
                                <AddCategorie show={this.state.addModalShow}
                                    onHide={addModalClose} />
                        </ButtonToolbar>
                    </div>
                </div>   )
        }

    }

