import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { Categories, Sort, PizzaBlock } from '../components';
import {setCategory} from '../redux/actions/filters';

const categories = ['Meat', 'Vagetarian', 'Gril', 'Hot', 'Calsone'];
const sortItems = [
  {name:'popular', type: 'popular'},
  {name:'price', type: 'price'},
  {name:'alphabet', type: 'alphabet'}
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas})=> pizzas.items);

  const onSelectCategory = React.useCallback((index) =>{
    dispatch(setCategory(index));
  }, []) ;

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categories}
        />
        <Sort items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        
        {
          items && items.map((obj)=><PizzaBlock 
            key={obj.id}
            {...obj}/>)
          }
        
      </div>
    </div>
  );
}

export default Home;
