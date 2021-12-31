
import {Navigation} from './Navigation';
import React from 'react';;

export const Home = (UtilisateurUsername) => {
 
  return(
    <div className="mt-5 d-flex justify-content-left">
                This is HomePage

                <div>{UtilisateurUsername ? 'Bienvenue' + UtilisateurUsername : "Vous n'êtes pas connectés"}</div>
                <div className="container">
                <h3 className="m-3 d'flex justify-content-center">Blog Admin Panel</h3>
                <Navigation UtilisateurUsername={UtilisateurUsername}/>

</div>
            </div>
  );
    
}
