import React, {  useState } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";

export const Login = () => {

  const [UtilisateurEmailAddress, setUtilisateurEmailAddress] = useState('');
  const [UtilisateurPassword, setUtilisateurPassword] = useState('');
  const [redirection, setRedirection] = useState(false);

  const submit = async(e) => {
    e.preventDefault();

    const response = await fetch(process.env.REACT_APP_API + 'utilisateurs/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        UtilisateurEmailAddress,
        UtilisateurPassword
      })
    });

    const content = await response.json();
    
    if(content.message === 'success'){
      setRedirection(true);
    }else{
      alert(content.message);
    }
    console.log(content);
  }
  if(redirection){
    return <Redirect to="/home" />
  }
  

 

    return (
      <div className="Login">
        <main className="form-signin">
          <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input 
                type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="name@example.com" 
                onChange={e => setUtilisateurEmailAddress(e.target.value)} />
              <label >Email address</label>
            </div>
            <div className="form-floating">
              <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password" 
                onChange={e => setUtilisateurPassword(e.target.value)}  />
              <label >Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

          </form>
        </main>
      </div>

    );
 
}