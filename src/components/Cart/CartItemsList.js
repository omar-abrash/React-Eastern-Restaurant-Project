import { useContext } from "react";
//
import Button from "../UI/Button";
//
import mealsContext from "../../context/meals-context";
//
import styles from "./Cart.module.css";
//
const CartItemsList = (props) => {
  // props.mealInformation
  // {id: 'food4', name: 'Yalangy', price: 20, mealsNumber: 1}
  const mealId = props.mealInformation.id;
  const mealName = props.mealInformation.name;
  const mealPrice = props.mealInformation.price;
  const mealsNumber = props.mealInformation.mealsNumber;

  const mealsCtx = useContext(mealsContext);
  //   console.log(props.mealInformation);
  const addOneMealHandler = () => {
    mealsCtx.addOneMealToItem(mealId);
    // console.log("omar");
  };
  const removeOneMealHandler = () => {
    mealsCtx.removeOneMealFromItem(mealId);
    // console.log("omar");
  };
  //
  return (
    <>
      {mealsNumber === 0 ? (
        ""
      ) : (
        <li>
          <div>
            <h4>{mealName}</h4>
            <span>${mealPrice} / Meal</span>
          </div>
          <div className={styles["meal-number"]}>
            <span>x {mealsNumber}</span>
            <div className={styles.btns}>
              <Button onClick={addOneMealHandler}>+</Button>
              <Button onClick={removeOneMealHandler}>-</Button>
            </div>
          </div>
          <div>
            <h4>Total Price</h4>
            <span>{mealPrice * mealsNumber} $</span>
          </div>
        </li>
      )}
    </>
  );
};
export default CartItemsList;
