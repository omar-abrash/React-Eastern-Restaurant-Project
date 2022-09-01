import { useState, useRef, useContext } from "react";
//
import Button from "../UI/Button";
import Form from "../UI/Form";
import Input from "../UI/Input";
import mealsContext from "../../context/meals-context";
//
import styles from "./Cart.module.css";
//
const Ordering = (props) => {
  const selectCityRef = useRef("");
  const streetNameRef = useRef("");
  //
  const [cityName, setCityName] = useState("");
  const [cityNameValidity, setCityNameValidity] = useState(null);

  const [streetName, setStreetName] = useState("");
  const [streetNameValidity, setStreetNameValidity] = useState(null);

  //
  const selectCityHandler = (event) => {
    setCityName(event.target.value);
    setCityNameValidity(event.target.value.length > 0);
  };
  const selectCityNameBlurHandler = () => {
    setCityNameValidity(cityName.trim().length > 0);
  };

  const streetNameHandler = (event) => {
    setStreetName(event.target.value);
    setStreetNameValidity(event.target.value.trim().length > 0);
  };
  const streetNameBlurHandler = () => {
    setStreetNameValidity(streetName.trim().length > 0);
  };
  //

  const mealsCtx = useContext(mealsContext);
  //
  const submitOrderingHandler = (event) => {
    event.preventDefault();
    if (cityNameValidity && streetNameValidity) {
      const orderingItems = [...mealsCtx.items, cityName, streetName];
      console.log(orderingItems);
      return;
    }
  };

  return (
    <>
      {mealsCtx.numberOfMeals > 0 && (
        <div className={styles["ordering-form"]}>
          <Form onSubmit={submitOrderingHandler}>
            <div>
              <label htmlFor="city">Select Your City:</label>
              <select
                id="city"
                name="city"
                ref={selectCityRef}
                onChange={selectCityHandler}
                onBlur={selectCityNameBlurHandler}
              >
                <option value=""></option>
                <option value="Amman">Amman</option>
                <option value="Irbid">Irbid</option>
                <option value="Jarash">Jarash</option>
                <option value="Aqaba">Aqaba</option>
              </select>
              {cityNameValidity === false && <p>not valid</p>}
            </div>
            <Input
              type="text"
              lable="Street Name :"
              ref={streetNameRef}
              onChange={streetNameHandler}
              onBlur={streetNameBlurHandler}
            />
            {streetNameValidity === false && <p>not valid</p>}
            <Button type="submit">ordering ...</Button>
            <Button onClick={props.onCloseOrder}>Close</Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default Ordering;
