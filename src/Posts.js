import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

export const Posts = () => {

    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        fetch(process.env.REACT_APP_API+'posts', {mode: 'no-cors'})
            .then(response => {
                if(response.status === 200){
                   return response.json()
                }
                console.log(response.status);
                throw response;
            }    )
            .then(data => {
                console.log(data);
                setPosts(data);
            })
            .catch(error => {
                console.error(error.message)
            }); 

    }, []);
    
   

    return(
        <div className="mt-5 d-flex justify-content-left">
            This is Posts page

            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Post Id</th>
                        <th>Post Title</th>
                        <th>Post Description</th>
                        <th>Post Vidéo</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>
                        <tr key={post.PostId}>
                        <td>{post.PostName}</td>
                        <td>{post.PostDescription}</td>
                        <td>{post.PostYoutubeIframe}</td>
                        <td>Edit/ Delete</td>
                        </tr>)}
                </tbody>
                
            </Table>
        </div>
    )
}