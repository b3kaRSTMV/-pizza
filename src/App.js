import React, { useCallback, useEffect, useState } from "react";
import "./scss/app.scss";
import  Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort"
import PizzaBlock from "./Components/PizzaBlock";
import Pizzas from "./Assets/pizza.json"







function App() {
  const [items, setItems] = useState([]);

React.useEffect(() => {
  fetch('https://66ae7351b18f3614e3b7bda6.mockapi.io/items')
  .then(res => {return res.json()})
  .then((data) => {
    setItems(data);
  });
},[]);



  
  return (
    <div className="wrapper">
     <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
           <Categories/>
          <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              {
                items.map(value => 
                  <PizzaBlock
                  key={Pizzas}
                  tittle={value.title}
                  price={value.price}
                  image={value.imageUrl}
                  sizes={value.sizes}
                  types={value.types}
                  />
                )
              }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
