
import React, { Component} from 'react';
import { AddCategorie } from './AddCategorie';
import { EditCategory } from './EditCategory';
import {Button, ButtonToolbar, Table} from 'react-bootstrap';

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

   componentDidUpdate(){
       this.refreshList();
   }
            


   
   render(){
            const { category, categoryId, categoryName} = this.state;
            let addModalClose = () => this.setState({addModalShow:false});
            let editModalClose = () => this.setState({editModalShow:false});

            return(
             
                <div>
        
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
                                                    editModalShow:true, categoryId: category.CategoryId, categoryName:category.CategoryName
                                                })}>Modifier</Button>
                                            <EditCategory
                                                show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                categoryId={categoryId}
                                                categoryName={categoryName}
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

