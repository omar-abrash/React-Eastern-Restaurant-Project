import React from "react";

const mealsContext = React.createContext({
  items: [],
  numberOfMeals: 0,
  addMealItemHandler: (newMeal) => {},
  addOneMealToItem: (id) => {},
  removeOneMealFromItem: (id) => {},
  clearCart: () => {},
});

export default mealsContext;
