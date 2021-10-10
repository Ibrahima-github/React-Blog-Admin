import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

export const Utilisateurs = () => {

    const [utilisateurs, setUtilisateurs] = useState([]);

    
    useEffect(() => {
        fetch(process.env.REACT_APP_API+'utilisateurs', {mode: 'no-cors', method: 'GET'})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUtilisateurs(data);
            })
            .catch(error => {
                console.error(error)
            }); 

    }, []);
    return(
        <div className="mt-5 d-flex justify-content-left">
            This is Users page
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Users Id</th>
                        <th>Users Username</th>
                        <th>Users Email Adresse</th>
                    </tr>
                </thead>
                <tbody>
                    {utilisateurs.map(user=>
                        <tr key={user.UtilisateurId}>
                        <td>{user.UtilisateurId}</td>
                        <td>{user.UtilisateurUsername}</td>
                        <td>{user.UtilisateurEmailAddress}</td>
                        <td>Edit/ Delete</td>
                        </tr>)}
                </tbody>
                
            </Table>
       
        </div>
    )
}
