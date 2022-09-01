import { useEffect, useState } from "react";
//
import FoodItemLi from "./FoodItemLi";
import ContainerCard from "../UI/ContainerCard";
//
import styles from "./LandingPage.module.css";
//
const FoodItems = () => {
  const [meals, setMeals] = useState([]);
  //
  const [loadingMeals, setLoadingMeals] = useState(false);
  //
  useEffect(() => {
    const fetchingData = async () => {
      setLoadingMeals(true);
      try {
        const response = await fetch(
          "https://food-order-app-825fc-default-rtdb.firebaseio.com/foodItems.json"
        );
        if (!response.ok) {
          throw new Error("...some thing is Wrong!");
        }
        const data = await response.json();
        // console.log(data);
        //
        let meals = [];
        //
        for (const meal in data) {
          let mealData = {
            id: meal,
            name: data[meal].name,
            description: data[meal].description,
            price: data[meal].price,
          };
          meals.push(mealData);
        }
        setMeals(meals);
        //
      } catch (e) {
        console.log(e.message);
      }
      setLoadingMeals(false);
    };
    fetchingData();
    //
  }, []);
  //
  const foodItemsList = meals.map((meal) => (
    <FoodItemLi key={meal.id} mealData={meal} />
  ));

  return (
    <ul className={styles["food-items"]}>
      {loadingMeals && (
        <ContainerCard>
          <li>...Loading Meals</li>
        </ContainerCard>
      )}
      {foodItemsList}
    </ul>
  );
};
export default FoodItems;
