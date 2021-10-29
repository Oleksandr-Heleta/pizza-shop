import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import {Home, Cart} from './pages';
import {Header} from './components';


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path='/' component={Home}/>
        <Route exact path='/cart' component={Cart}/>
      </div>
    </div>
  );
}

export default App;
