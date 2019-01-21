import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import PhotoList from './component/photoList.js';
import {Switch, Route} from 'react-router-dom';
import PhotoDetails from './component/photoDetails.js';

class App extends Component {
 
  render() {  
    return (
      <div>
        <Switch>
          <Route exact path='/' component={PhotoList}></Route>
          <Route exact path='/:id' component={PhotoDetails}></Route>
        </Switch>
      </div>    
    );
  }
}


export default App;
