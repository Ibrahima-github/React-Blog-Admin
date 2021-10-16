
import React, { Component } from 'react';
import { AddCategorie } from './AddCategorie';
import {Button, ButtonToolbar, Table} from 'react-bootstrap';

export class Categories extends Component {
 
    constructor(props){
        super(props);
        this.state={cats:[], addModalShow:false};
    };
 
    refreshList(){
        fetch(process.env.REACT_APP_API+'categories', {method: 'GET'})
        .then(response =>   {if(response.status === 200){
            console.log(response);
            return response.json();}
                            })
        .then(data =>
            {this.setState({cats:data});
        });
    }
    
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();
    }

    
    render(){
        const {cats} = this.state;
        let addModalClose = () => this.setState({addModalShow:false});
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
                            {cats.map(category=>
                                <tr key={category.CategoryId}>
                                <td>{category.CategoryId}</td>
                                <td>{category.CategoryName}</td>
                                <td>Edit/ Delete</td>
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
