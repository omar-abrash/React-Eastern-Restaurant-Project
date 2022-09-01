import React, { useContext, useEffect, useState } from "react";
import mealsContext from "../../context/meals-context";
//
import cartPhoto from "./Photos/cart.png";
import styles from "./Header.module.css";
//
//
const CartIcon = (props) => {
  //
  const [cartState, setCartStat] = useState(false);
  //
  const mealsCtx = useContext(mealsContext);
  //
  useEffect(() => {
    //
    const timer = setTimeout(() => {
      if (mealsCtx.numberOfMeals > 0) {
        setCartStat(true);
      }
    }, 100);
    // return value
    return () => {
      clearTimeout(timer);
      setCartStat(false);
    };
  }, [mealsCtx.numberOfMeals]);

  return (
    <div className={`${styles.cart}`} onClick={props.onClick}>
      <span>Cart</span>
      <div className={cartState ? styles.animation : ""}>
        <img src={cartPhoto} alt="cartPhoto" />
      </div>
      {mealsCtx.numberOfMeals !== 0 && (
        <span className={styles.number}>{mealsCtx.numberOfMeals}</span>
      )}
    </div>
  );
};
export default CartIcon;
