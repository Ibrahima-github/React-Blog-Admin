
import {Home} from './Home';
import {Posts} from './Posts';
import {Categories} from './Categories';
import {Utilisateurs} from './Utilisateurs';

import {Navigation} from './Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AddCategorie } from './AddCategorie';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d'flex justify-content-center">Blog Admin Panel</h3>
      

      <Navigation />

      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/posts' component={Posts}/>
        <Route path='/categories' component={Categories}/>
        <Route path='/utilisateurs' component={Utilisateurs}/>
        <Route path='/addCategorie' component={AddCategorie} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
