import React, {useState, useEffect} from 'react';
import {Posts} from './Posts';
import {Categories} from './Categories';
import {Utilisateurs} from './Utilisateurs';
import {Home} from './Home';
import {Login} from './Login';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { AddCategorie } from './components/AddCategorie';

function App() {

    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
      (
        async () => {
            
          const response = await fetch(process.env.REACT_APP_API + 'utilisateurs/user', {
            headers: { 'Content-type': 'application/json' },
            credentials: 'include'
          });

          console.log(response);
          
           const content = await response.json();
            
          console.log(content.title);

          if(content.title === 'Unauthorized'){
            setRedirect(true);
          }else{
            alert(content.message);
          }
        }
      )()
    })
    return (
        <BrowserRouter>
        {redirect ? <Redirect to="/" /> : <Redirect to="/home" />}
            

            
                <Switch>
                    <Route path='/' component={() => <Login  />} exact />
                    <Route path="/home" component={Home} />
                    <Route path='/posts' component={() => <Posts />} />
                    <Route path='/categories' component={() => <Categories />} />
                    <Route path='/utilisateurs' component={() => <Utilisateurs  />} />
                    <Route path='/addCategorie' component={() => <AddCategorie  />} />
                </Switch>
           
        </BrowserRouter>
    )
}

export default App;
