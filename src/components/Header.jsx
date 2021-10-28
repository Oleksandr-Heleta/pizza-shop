import React from 'react';
import logo from '../assets/img/pizza-logo.svg';
import {Button, ButtonCart}  from './index';


function Header (){
    return (
        <div className="header">
        <div className="container">
          <div className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className="header__cart">
            <Button 
              onClick={()=>{alert(123)}}
              className="button--cart"
            >
              <ButtonCart/>
            </Button> 
          </div>
        </div>
        </div>
  
    );
}

export default Header;