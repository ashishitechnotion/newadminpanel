import React from 'react';
import {Router, Route,Switch} from 'react-router';

import DashBoard from '../src/containers/Dashboard/Dashboard';
import ManageQuestion from '../src/containers/Questions/ManageQuestions.js';
import ManageUser from '../src/containers/Users/ManageUser.js';
import ViewAudit from '../src/containers/Audit/ViewAudit.js';
import Login from '../src/containers/login.js';
import MasterLayout from '../src/masterLayout.js';
import Layout from '../src/containers/Layout/Layout.js';


const Routes = (props) => (
    <div>
    <Route  component={Layout}/>
    <Switch>
    <Route exact path="/dashboard" component={DashBoard} />
      <Route path="/audit" component={ViewAudit}/>
      <Route path="/user" component={ManageUser}/>
      <Route path="/question" component={ManageQuestion}/>
    </Switch>
    </div>
  );
  /*
const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Layout}>
            <Route path="/audit" component={ViewAudit}/>
            <Route path="/user" component={ManageUser}/>
            <Route path="/question" component={ManageQuestion}/>
        </Route>
    </Router>

);*/

export default Routes;