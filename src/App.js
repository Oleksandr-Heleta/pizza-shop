import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch} from 'react-redux';


import {Home, Cart} from './pages';
import {Header} from './components';
import {setPizzas} from './redux/actions/pizzas';
 

function App() {
  const urlDb = 'http://localhost:3001/pizzas';

  const dispatch = useDispatch();

  
  React.useEffect(()=>{
    axios.get(urlDb)
    .then(({data})=>{
      dispatch(setPizzas(data));
    });
  }, []);

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
