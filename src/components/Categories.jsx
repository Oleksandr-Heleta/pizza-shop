import React from "react";

function Categories({items, onClick}){
  const [activeItem, setActiveItem] = React.useState('All');
    return(
        <div className="categories">
        <ul>
          <li 
            className={activeItem === 'All' ? 'active' : ''}
            onClick={()=>setActiveItem('All')}
            >
              All
          </li>
          {items &&
            items.map((name)=>(
            <li
              className={activeItem === name ? 'active' : ''}
              onClick={()=>setActiveItem(name)}
              key={name}>
               {name}
            </li>))
          }
        </ul>
      </div>
    )
}

export default Categories;