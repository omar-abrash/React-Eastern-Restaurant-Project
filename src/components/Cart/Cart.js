//
import { useContext, useState } from "react";
import mealsContext from "../../context/meals-context";
//
import ContainerCard from "../UI/ContainerCard";
import CartItemsList from "./CartItemsList";
import Ordering from "./Ordering";
import Button from "../UI/Button";

//
import cartPhoto from "../Header/Photos/cart.png";
//
import styles from "./Cart.module.css";
//
const Cart = (props) => {
  //
  document.documentElement.scrollTop = 0;
  //
  const [orderingState, setOrderingState] = useState(false);
  //
  const mealsCtx = useContext(mealsContext);
  //
  // console.log(mealsCtx.items);
  //
  const itemsList = mealsCtx.items.map((meal) => (
    <CartItemsList key={meal.id} mealInformation={meal} />
  ));
  //
  const overAllPriceHandler = () => {
    let allMealsPrice = 0;
    mealsCtx.items.forEach((meal) => {
      allMealsPrice += meal.mealsNumber * meal.price;
    });
    return allMealsPrice;
  };
  //
  const clearCartHandler = () => {
    mealsCtx.clearCart();
  };
  //
  const orderingClickHandler = () => {
    setOrderingState(true);
  };
  const closeOrderingHandler = () => {
    setOrderingState(false);
  };
  //
  return (
    <ContainerCard className={styles.cart}>
      {mealsCtx.items.length === 0 && (
        <div className={styles["empty-cart"]}>
          <div>Your cart is empty! </div>
          <img src={cartPhoto} alt="CartPhoto!" />
          <Button onClick={props.onCloseCart}>Return</Button>
        </div>
      )}
      {mealsCtx.items.length > 0 && (
        <>
          <ul>{itemsList}</ul>
          <div className={styles.control}>
            <div className={styles.btns}>
              <Button onClick={props.onCloseCart}>Return</Button>
              <Button onClick={orderingClickHandler}>Ordering</Button>
              <Button onClick={clearCartHandler}>Clear Cart</Button>
            </div>
            <div>
              <h4>Overall Price</h4>
              {overAllPriceHandler()} $
            </div>
          </div>
        </>
      )}
      {orderingState && <Ordering onCloseOrder={closeOrderingHandler} />}
    </ContainerCard>
  );
};

export default Cart;
