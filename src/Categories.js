import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


export const Categories = () => {

    const [categories, setCategories] = useState([]);

    
    useEffect(() => {
        fetch(process.env.REACT_APP_API+'categories', {mode: 'no-cors', method: 'GET'})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
            .catch(error => {
                console.error(error)
            }); 

    }, []);
    return(
        <div className="mt-5 d-flex justify-content-left">
            This is Categiories page
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Category Id</th>
                        <th>Category Name</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category=>
                        <tr key={category.CategoryId}>
                        <td>{category.CategoryId}</td>
                        <td>{category.CategoryName}</td>
                        <td>Edit/ Delete</td>
                        </tr>)}
                </tbody>
                
            </Table>
        </div>
    );
}
