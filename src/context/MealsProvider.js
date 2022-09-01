import { useState } from "react";
//
import mealsContext from "./meals-context";
//
const MealsProvider = (props) => {
  const [items, setNewItem] = useState([]);
  //
  const numberOfMealsHandler = () => {
    let numberOfMeals = 0;
    items.forEach((element) => {
      numberOfMeals += element.mealsNumber;
    });
    return numberOfMeals;
  };
  //   //
  const addMealItemHandler = (newMeal) => {
    // first condition : if the items array empty or no repete any newMeal
    if (items.length === 0 || !items.find((item) => item.id === newMeal.id)) {
      setNewItem((prevState) => [...prevState, newMeal]);
    }
    // second condition : if the items array not empty and repete any newMeal again
    if (items.length > 0 && items.find((item) => item.id === newMeal.id)) {
      // console.log("Omar!");
      const newItems = items.filter((item, index, array) => {
        if (item.id === newMeal.id) {
          array[index].mealsNumber += newMeal.mealsNumber;
        }
        return array;
      });
      setNewItem((prevState) => newItems);
    }
    //
  };

  //
  const addOneMealHandler = (id) => {
    //
    const newItems = items.filter((meal, index, array) => {
      if (meal.id === id) {
        array[index].mealsNumber += 1;
      }
      return array;
    });
    setNewItem(newItems);
    //
  };
  //
  const removeOneMealHandler = (id) => {
    //
    const newItems = items.filter((meal, index, array) => {
      if (meal.id === id) {
        array[index].mealsNumber -= 1;
      }
      return array;
    });
    setNewItem(newItems);
    //
    // this condition when numberOfMeals === 0 we want clear Cart again.
    if (numberOfMealsHandler() === 0) {
      setNewItem((prevState) => []);
    }
  };
  //
  const clearCartHandler = () => {
    setNewItem((prevState) => []);
  };
  //

  return (
    <mealsContext.Provider
      value={{
        items: items,
        numberOfMeals: numberOfMealsHandler(),
        addMealItemHandler: addMealItemHandler,
        addOneMealToItem: addOneMealHandler,
        removeOneMealFromItem: removeOneMealHandler,
        clearCart: clearCartHandler,
      }}
    >
      {props.children}
    </mealsContext.Provider>
  );
};
//
export default MealsProvider;
