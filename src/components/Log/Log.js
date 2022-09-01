import { useEffect, useRef, useState } from "react";
//
import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
import ContainerCard from "../UI/ContainerCard";
//
import styles from "./Log.module.css";
//
const Log = (props) => {
  //
  document.documentElement.scrollTop = 0;
  //
  const emailRef = useRef("");
  const passWordRef = useRef("");
  //
  useEffect(() => {
    emailRef.current.focus();
  }, [emailRef]);
  //
  const [email, setEmail] = useState("");
  const [emailTotched, setEmailTotched] = useState(false);
  const [passWord, setPassWord] = useState("");
  const [passWordTotched, setPassWordTotched] = useState(false);
  //
  const emailValidity =
    email.trim().includes("@") && email.trim().includes(".");
  const passWordValidity =
    passWord.trim().length > 5 && passWord.trim().includes("&");
  //
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const emailBlurHandler = () => {
    // setEmailTotched(true);
  };
  //
  const passWordChangeHandler = (event) => {
    setPassWord(event.target.value);
  };
  const passWordBlurHandler = () => {
    setPassWordTotched(true);
  };
  //
  const submitHandler = (event) => {
    event.preventDefault();
    //
    if (!emailValidity || !passWordValidity) {
      setEmailTotched(true);
      setPassWordTotched(true);
      return;
    }
    console.log("Log In Data send to DataBase!");
    setEmail("");
    setEmailTotched(false);
    setPassWord("");
    setPassWordTotched(false);
  };
  //
  return (
    <div>
      <ContainerCard className={styles["log-container"]}>
        <Form onSubmit={submitHandler}>
          <Input
            type="text"
            lable="email :"
            ref={emailRef}
            placeholder="must be include @ and ."
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={email}
          />
          {emailTotched && !emailValidity && (
            <div>
              <p>Not Correct Filed!</p>
            </div>
          )}
          <Input
            type="password"
            lable="password :"
            ref={passWordRef}
            placeholder="more than 6 charachter and inclueds &"
            onChange={passWordChangeHandler}
            onBlur={passWordBlurHandler}
            value={passWord}
          />
          {passWordTotched && !passWordValidity && (
            <div>
              <p>Not Correct Filed!</p>
            </div>
          )}
          <Button type="submit">Log In</Button>
        </Form>
      </ContainerCard>
    </div>
  );
};
export default Log;
