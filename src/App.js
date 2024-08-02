import React from "react";
import "./scss/app.scss";
import  Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort"
import PizzaBlock from "./Components/PizzaBlock";









function App() {
  return (
    <div class="wrapper">
     <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
           <Categories/>
          <Sort/>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
 <PizzaBlock tittle ="Мексииканская" price={500}/>
 <PizzaBlock/>
 <PizzaBlock/>
 <PizzaBlock/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
