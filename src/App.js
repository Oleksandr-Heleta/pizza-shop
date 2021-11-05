import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


import {Home, Cart} from './pages';
import {Header} from './components';
import {setPizzas as setPizzasAction} from './redux/actions/pizzas';
 

function App(props) {
  const urlDb = 'http://localhost:3000/db.json';
  
  React.useEffect(()=>{
    axios.get(urlDb)
    .then(({data})=>{
      props.setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path='/' render={()=><Home items={props.items}/>}/>
        <Route exact path='/cart' component={Cart}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    items: state.pizzas.items
  } 
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
