import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, Sort, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categories = ['Meat', 'Vegetarian', 'Gril', 'Hot', 'Calzone'];
const sortItems = [
  { name: 'popular', type: 'rating', order: 'desc' },
  { name: 'price', type: 'price', order: 'desc' },
  { name: 'alphabet', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const onAddPizza = React.useCallback((pizzaObj) => {
    dispatch(addPizzaToCart(pizzaObj));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          activeCategory={category}
          items={categories}
        />
        <Sort onClickSortType={onSelectSortType} activeSortType={sortBy.type} items={sortItems} />
      </div>
      <h2 className="content__title">Pizzas:</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onAddPizza={onAddPizza}
                addedCount={
                  cartItems[obj.id] &&
                  cartItems[obj.id].reduce((sum, obj) => obj.totalCount + sum, 0)
                }
                key={obj.id}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
