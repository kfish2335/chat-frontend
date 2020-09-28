import React, {useEffect} from 'react';
import './App.css';
import Login from './Components/Login.js';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import {Provider, useDispatch} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import store from './store';
import {getChat} from './actions/chat';

function App() {


  

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/login" component = {Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
