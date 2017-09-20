import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import DashBoard from '../src/containers/dashboard.js';
import ManageQuestion from '../src/containers/managequestions.js';
//import ManageQuestion from './src/containers/managequestions.js';
import ManageUser from '../src/containers/manageuser.js';
import ViewAudit from '../src/containers/viewaudit.js';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
      <Route exact path="/" component={DashBoard}/>
      <Route path="/managequestion" component={ManageQuestion}/>
      <Route path="/manageview" component={ViewAudit}/>
      <Route path="/manageuser" component={ManageUser}/>
     
      </div>
      </Router>
    );
  }
}

export default App;
