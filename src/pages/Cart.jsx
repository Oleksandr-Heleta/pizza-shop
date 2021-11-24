import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CartEmpty, CartItem } from '../components';
import { TrashBasket, CartIcon, Arrow } from '../assets/svgComponents';
import {
  clearCart,
  removePizzaToCart,
  removeCartItem,
  addPizzaToCart,
} from '../redux/actions/cart';

function Cart() {
  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();
  const allPizza = Object.values(items).flat();

  const onClearCart = () => {
    if (window.confirm('Do you want to claer Cart?')) {
      dispatch(clearCart());
    }
  };

  const onAddPizza = React.useCallback((pizzaObj) => {
    dispatch(addPizzaToCart(pizzaObj));
  }, []);

  const onRemovePizza = React.useCallback((pizzaObj) => {
    dispatch(removePizzaToCart(pizzaObj));
  }, []);

  const onRemoveItem = React.useCallback((pizzaObj) => {
    dispatch(removeCartItem(pizzaObj));
  }, []);

  const onPay = () => {
    window.alert('This site is for portfolio. Your order does not exist.');
  };

  return (
    <div className="container container--cart">
      {allPizza.length !== 0 ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <CartIcon />
              The cart
            </h2>
            <div className="cart__clear" onClick={onClearCart}>
              <TrashBasket />
              <span>Clear the cart</span>
            </div>
          </div>
          <div className="content__items">
            {allPizza.map((item, index) => (
              <CartItem
                key={index}
                {...item}
                onAddPizza={onAddPizza}
                onRemovePizza={onRemovePizza}
                onRemoveItem={onRemoveItem}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Amount: <b>{totalCount}</b>
              </span>
              <span>
                Payable: <b>{totalPrice} uah</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link to="/" className="button button--outline button--add go-back-btn">
                <Arrow />
                <span>Go back</span>
              </Link>
              <div onClick={onPay} className="button pay-btn">
                <span>Pay now</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}

export default Cart;
