export const addPizzaToCart = (pizzaObj) =>({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
});

export const clearCart = () =>({
    type: 'CLEAR_CART',
   
});
export const removePizzaToCart = (pizzaObj) =>({
    type: 'REMOVE_PIZZA_CART',
    payload: pizzaObj
});
export const removeCartItem = (pizzaObj) =>({
    type: 'REMOVE_CART_ITEM',
    payload: pizzaObj
});