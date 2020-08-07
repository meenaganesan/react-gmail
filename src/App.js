import React from 'react';
import './App.css';
import '../src/App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from '../src/Login/Login'
import Dashboard from '../src/Dashboard/Dashboard';



class App extends React.Component{
  render() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </Router>
  )
}
}

export default App;
 