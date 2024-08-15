import React from 'react'
import Categories from "../Components/Categories";
import Sort from "../Components/Sort"
import PizzaBlock from "../Components/PizzaBlock";
import { useState } from 'react';



 const Home = () => {
    const [items, setItems] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({name: 'популярности', sortProperty: 'rating'});


    React.useEffect(() => {
      fetch(`https://66ae7351b18f3614e3b7bda6.mockapi.io/items?${categoryId > 0 ?`category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=desc`)
      .then(res => res.json())
      .then((data) => {
        setItems(data);
        
      } );
      window.scrollTo(0,0);
    },[categoryId, sortType]);



  return (
      <>
       <div className="content__top">
          <Categories categoryId={categoryId} onChangeCategory={(i) => setCategoryId(i)}/>
          <Sort sortType={sortType} onChangeSort={(obj) =>setSortType(obj)}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              {
              items.map((value) => 
                <PizzaBlock key={value.id} tittle={value.title} price={value.price} image={value.imageUrl} sizes={value.sizes} types={value.types}/>)
              }

          </div>
      </>
    
  )
}

export default Home;
