import { useState, useContext } from "react";
//
import mealsContext from "../../context/meals-context";
//
import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
//
import styles from "./LandingPage.module.css";
//
import cartPhoto from "./Photos/cart.png";
//
const FoodItemLi = (props) => {
  const foodId = props.mealData.id;
  const foodName = props.mealData.name;
  const foodDesc = props.mealData.description;
  const foodPrice = props.mealData.price;
  //
  const [mealsNumber, setMealsNumber] = useState(1);
  //
  const mealsCtx = useContext(mealsContext);
  //
  const mealsNumberChangeHandler = (event) => {
    setMealsNumber(Number(event.target.value));
  };
  //
  const submitHandler = (event) => {
    event.preventDefault();
    //
    let newItem = {
      id: foodId,
      name: foodName,
      price: foodPrice,
      mealsNumber: mealsNumber,
    };
    //
    mealsCtx.addMealItemHandler(newItem);
    //
  };
  //
  return (
    <li>
      <h3>{foodName}</h3>
      <p>{foodDesc}</p>
      <span>${foodPrice}/Meal</span>
      <Form onSubmit={submitHandler}>
        <Input
          // ref={mealsRef}
          lable="Meals Number :"
          id={foodName}
          type="number"
          onChange={mealsNumberChangeHandler}
          value={mealsNumber}
          max="5"
          min="1"
        />
        <Button type="submit" className={styles.btn}>
          <img src={cartPhoto} alt="cartPhoto" />
        </Button>
      </Form>
    </li>
  );
};
export default FoodItemLi;
