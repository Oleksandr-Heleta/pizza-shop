import React from 'react';
import PropTypes from 'prop-types';

import { Plus, Minus, Delete } from '../assets/svgComponents';

const CartItem = React.memo(function CartItem({
  id,
  name,
  imageUrl,
  price,
  type,
  size,
  totalPrice,
  totalCount,
  onAddPizza,
  onRemoveItem,
  onRemovePizza,
}) {
  const onClickAddPizza = () =>
    onAddPizza({
      id,
      name,
      imageUrl,
      price,
      type,
      size,
    });
  const onClickRemovePizza = () => {
    onRemovePizza({
      id,
      type,
      size,
    });
  };
  const onClickRemoveItem = () => {
    onRemoveItem({
      id,
      type,
      size,
    });
  };

  return (
    <div className="cart__item">
      <div className="cart__item-group">
        <div className="cart__item-img">
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </div>
        <div className="cart__item-info">
          <h3>{name}</h3>
          <p>
            {type}, {size} см.
          </p>
        </div>
      </div>
      <div className="cart__item-amount">
        <div className="cart__item-count">
          <div
            onClick={onClickRemovePizza}
            className="button button--outline button--circle cart__item-count-minus">
            <Minus />
          </div>
          <b>{totalCount}</b>
          <div
            onClick={onClickAddPizza}
            className="button button--outline button--circle cart__item-count-plus">
            <Plus />
          </div>
        </div>
        <div className="cart__item-price">
          <b>{totalPrice} uah</b>
        </div>
        <div onClick={onClickRemoveItem} className="cart__item-remove">
          <div className="button button--outline button--circle">
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
});

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onAddPizza: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onRemovePizza: PropTypes.func,
  totalPrice: PropTypes.number,
  totalCount: PropTypes.number,
};
CartItem.defaultProps = {
  name: '---',
  price: 0,
  type: 'slim',
  size: 26,
  totalPrice: 0,
  totalCount: 1,
};

export default CartItem;
