import React, { Component } from 'react';
import Login from './componets/Login/Login'
import User from './componets/User/User'
import Test from './componets/Test/Test'
import Report from './componets/Report/Report'
import Admin from './componets/admin/admin'
import Modal from './componets/UI/Modal/Modal'

import  { 
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
     <Router>
       <Switch>
           <Route path="/" exact component={Login} />
           <Route path="/User" component={User} />
           <Route path="/Test" component={Test} />
           <Route path="/Report" component={Report} />
           <Route path="/admin" component={Admin}/>
           {/* <Route path="/Test" component={Modal}/> */}

        </Switch>

    </Router>
      </div>
    );
  }
}

export default App;
