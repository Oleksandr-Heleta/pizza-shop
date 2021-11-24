import React from 'react';
import { Link } from 'react-router-dom';
import emptyCartiImg from '../assets/img/empty-cart.png';

function CartEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>
        The cart is empty <span>😕</span>
      </h2>
      <p>
        You have not ordered any pizzas.
        <br />
        To order pizzas go to main page.
      </p>
      <img src={emptyCartiImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Go back</span>
      </Link>
    </div>
  );
}

export default CartEmpty;
