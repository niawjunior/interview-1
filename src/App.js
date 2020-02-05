import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Head from './Head'
import Users from './Users'
import UserDetail from './UserDetail'
function App() {

  return (
    <div>
      <Head/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/users/:id" component={UserDetail}/>
        <Redirect to="/home"/>
      </Switch>
    </div>
  );
}

export default App;
