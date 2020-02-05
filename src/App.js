import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Head from './Head'
function App() {

  return (
    <div>
      <Head/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Redirect to="/home"/>
      </Switch>
    </div>
  );
}

export default App;
