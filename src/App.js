import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';

import {Home, Cart} from './pages';
import {Header} from './components';


function App() {
  const urlDb = 'http://localhost:3000/db.json';
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(()=>{
    axios.get(urlDb)
    .then(({data})=>{
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path='/' render={()=><Home items={pizzas}/>}/>
        <Route exact path='/cart' component={Cart}/>
      </div>
    </div>
  );
}

export default App;
