import React from 'react';
import Meal from './Meal';
/* eslint-disable */

const renderMeal = (currentMeal) => (
  currentMeal.map(meal => <Meal meals={meal} key={meal.id} />)
);

const Menus = ({ match, data }) => {
  const menus = data.find(meals => meals.date === match.params.date);
  let mainMeal;
  let firstAccompaniment;
  let secondAccompaniment;
  if (menus) {
    mainMeal = menus.meal.main;
    firstAccompaniment = menus.meal.accompaniment1;
    secondAccompaniment = menus.meal.accompaniment2;
  }

  return (
    <div>
      <div className="menus-container">
        <div className="main-meal">
          <h3> Main Meal</h3>
         <form>
           <ul>
           { (mainMeal) ? renderMeal(mainMeal) : '' }
          </ul>
         </form>
        </div>
        <div className="main-meal">
          <h3>Accompaniment 1</h3>
          <form>
            <ul>
            { (firstAccompaniment) ? renderMeal(firstAccompaniment) : '' }
            </ul>
          </form>
        </div>
        <div className="main-meal">
          <h3>Accompaniment 2</h3>
          <form>
            <ul>
              { (secondAccompaniment) ? renderMeal(secondAccompaniment) : '' }
            </ul>
          </form>
        </div>
        <div className="cta">
        <div className="float-left"></div>
        <div className="float-right">
          <div className="btn reset-order">reset order</div>
          <div className="btn submit-order">submit order</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Menus;
