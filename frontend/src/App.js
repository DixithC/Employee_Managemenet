import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

import React, {Component} from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
//This solves the history.push issue, where url was changing but the page.

const history = createHistory();  

function App() {
  return (
    <div>
      <Router history={history}>
        <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path="/employees"  component={ListEmployeeComponent}></Route>
              <Route path="/add-employee"  component={CreateEmployeeComponent}></Route>
              <Route path="/update-employee/:id"  component={UpdateEmployeeComponent}></Route>
              <Route path="/view-employee/:id"  component={ViewEmployeeComponent}></Route>
              <Route path="/"  component={ListEmployeeComponent}></Route>
            </Switch>
          </div>
        <FooterComponent/>
      </Router>
    </div>

  );
}

export default App;
