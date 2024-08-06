import React from 'react'
import Categories from "../Components/Categories";
import Sort from "../Components/Sort"
import PizzaBlock from "../Components/PizzaBlock";
import { useState } from 'react';



 const Home = () => {
    const [items, setItems] = useState(['']);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState(0);

    React.useEffect(() => {
      fetch('https://66ae7351b18f3614e3b7bda6.mockapi.io/items?category' + categoryId)
      .then(res => {return res.json()})
      .then((data) => {
        setItems(data);
      } );
      window.scrollTo(0,0);
    },[categoryId]);



  return (
    
      <>
       <div className="content__top">
          <Categories categoryId={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
          <Sort sortType={sortType} onClickSort={() =>setSortType()}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              {
               items.map((value) => 
                  <PizzaBlock
                  key={value.id}
                  tittle={value.title}
                  price={value.price}
                  image={value.imageUrl}
                  sizes={value.sizes}
                  types={value.types}
                  />
               
                )
              
              }

          </div>
      </>
    
  )
}

export default Home;
