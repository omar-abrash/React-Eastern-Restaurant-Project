import { useState } from "react";
//
import Sign from "../Sign/Sign";
import Button from "../UI/Button";
import OverLaying from "../UI/OverLaying/OverLaying";
//
import styles from "./Header.module.css";
//
const SignUpIcon = (props) => {
  const [singUpClickState, setNewSingUpState] = useState(false);
  //
  const changeSignUpState = () => {
    setNewSingUpState(true);
  };
  //
  const removeOverLayingHandler = () => {
    setNewSingUpState(false);
  };
  //
  return (
    <>
      <div className={styles["sign-up"]} onClick={changeSignUpState}>
        Sign up
      </div>
      {singUpClickState && (
        <OverLaying onClick={removeOverLayingHandler}>
          <Sign />
          <Button
            onClick={removeOverLayingHandler}
            className={styles["closing-btn"]}
          >
            Close
          </Button>
        </OverLaying>
      )}
    </>
  );
};
export default SignUpIcon;
