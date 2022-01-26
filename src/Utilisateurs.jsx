
import React, { Component} from 'react';
import { AddUtilisateur } from './components/AddUtilisateur';
import { EditUtilisateur } from './components/EditUtilisateur';
import {Button, ButtonToolbar, Table} from 'react-bootstrap';
import { Navigation } from './Navigation';

export class Utilisateurs extends Component {
    constructor(props){
        super(props);
        this.state={utilisateur:[], addModalShow: false, editModalShow: false, UtilisateurUsername: false};
    }
 
   refreshList(){

       fetch(process.env.REACT_APP_API+'utilisateurs')
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
               this.setState({utilisateur:data});
           })
           .catch(error => {
               console.error(error.message)
           }); 
   }

   componentDidMount(){
       this.refreshList();
   }

   deletePost(postid){
       if(window.confirm('Êtes vous sûr de vouloir supprimer ?')){
           fetch(process.env.REACT_APP_API + 'utilisateurs/' + postid, {
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
            const { utilisateur, utilisateurid, utilisateurname, utilisateuremailaddress, utilisateurpassword} = this.state;
            let addModalClose = () => this.setState({addModalShow:false});
            let editModalClose = () => this.setState({editModalShow:false});

            return(
             
                <div>
        <Navigation />
                    <div className="mt-5 d-flex justify-content-left">
                        This is Posts page
                        <Table className="mt-4" striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Utilisateur Id</th>
                                    <th>Utilisateur Name</th>
                                    <th>utilisarteur Email Adress</th>
                                    <th>Utilisateur Password </th>
                                </tr>
                            </thead>
                            <tbody>
                                {utilisateur.map(utilisateur=>
                                    <tr key={utilisateur.UtilisateurId}>
                                    <td>{utilisateur.UtilisateurId}</td>
                                    <td>{utilisateur.UtilisateurUsername}</td>
                                    <td>{utilisateur.UtilisateurEmailAddress}</td>
                                    <td>{utilisateur.UtilisateurPassword}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button 
                                                className="mr-2" 
                                                variant="info"
                                                onClick={() => this.setState({
                                                    editModalShow:true, utilisateurid: utilisateur.UtilisateurId, utilisateurname:utilisateur.UtilisateurUsername,
                                                    utilisateuremailaddress: utilisateur.UtilisateurEmailAddress, utilisateurpassword: utilisateur.UtilisateurPassword
                                                })}>Modifier
                                            </Button>

                                            <Button 
                                                className="mr-2" 
                                                variant="danger"
                                                onClick={() => 
                                                this.deletePost(utilisateur.UtilisateurId)
                                                }>Supprimer
                                            </Button>

                                            <EditUtilisateur
                                                show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                utilisateurid={utilisateurid}
                                                utilisateurname={utilisateurname}
                                                utilisateuremailaddress={utilisateuremailaddress}
                                                utilisateurpassword={utilisateurpassword}
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
                                    Ajouter un utilisateur
                                </Button>
                                <AddUtilisateur show={this.state.addModalShow}
                                    onHide={addModalClose} />
                        </ButtonToolbar>
                    </div>
                </div>   )
        }

    }

