import { useState, useRef, useEffect } from "react";
//
import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
//
import styles from "./Sign.module.css";
//
const Sign = () => {
  // first Name Validation
  const [firstName, setFirstName] = useState("");
  const [firstNameValidity, setFirstNameValidity] = useState(null);
  const firstNameRef = useRef("");
  const fisrtNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const firstNameBlurHandler = () => {
    setFirstNameValidity(firstName.trim().length > 0);
  };
  //
  // last Name Validation:
  const [lastName, setLasttName] = useState("");
  const [lastNameValidity, setLastNameValidity] = useState(null);
  const lastNameRef = useRef("");
  const lastNameChangeHandler = (event) => {
    setLasttName(event.target.value);
  };
  const lastNameBlurHandler = () => {
    setLastNameValidity(lastName.trim() !== "");
  };
  // email Validation:
  const [email, setEmail] = useState("");
  const [emailValidity, setEmailValidity] = useState(null);
  const emailRef = useRef("");
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const emailBlurHandler = () => {
    setEmailValidity(email.trim().includes("@") && email.trim().includes("."));
  };
  //
  // confirmEmail Validation
  // email Validation:
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmEmailValidity, setConfirmEmailValidity] = useState(null);
  const confirmEmailRef = useRef("");
  const confirmEmailChangeHandler = (event) => {
    setConfirmEmail(event.target.value);
  };
  const confirmEmailBlurHandler = () => {
    setConfirmEmailValidity(
      confirmEmail.trim().includes("@") && confirmEmail.trim().includes(".")
    );
  };
  //
  // passWord Validation:
  const [passWord, setPassWord] = useState("");
  const [passWordValidity, setPassWordValidity] = useState(null);
  const passWordRef = useRef("");
  const passWordChangeHandler = (event) => {
    setPassWord(event.target.value);
  };
  const passWordBlurHandler = () => {
    setPassWordValidity(passWord.trim().length > 5 && passWord.includes("&"));
  };
  //
  // confirmEmailPassWord Validation
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [confirmPassWordValidity, setConfirmPassWordValidity] = useState(null);
  const confirmPassWordRef = useRef("");
  const confirmPassWordChangeHandler = (event) => {
    setConfirmPassWord(event.target.value);
  };
  const confirmPassWordBlurHandler = () => {
    setConfirmPassWordValidity(
      confirmPassWord.trim().length > 5 && confirmPassWord.includes("&")
    );
  };
  //
  const [emailsAreEqual, setEmailsAreEquals] = useState(true);
  const [passWordsAreEqual, setPassWordsAreEqual] = useState(true);
  const [formValidation, setFormValidation] = useState(false);
  //
  useEffect(() => {
    if (formValidation) {
      console.log("Form is valid, you can send Form Data Now!"); // send data any where
    }
  }, [formValidation]);
  //
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!firstNameValidity) {
      firstNameRef.current.focus();
    } else {
      if (!lastNameValidity) {
        lastNameRef.current.focus();
      } else {
        if (!emailValidity) {
          emailRef.current.focus();
        } else {
          if (!confirmEmailValidity) {
            confirmEmailRef.current.focus();
          } else {
            if (!passWordValidity) {
              passWordRef.current.focus();
            } else {
              if (!confirmPassWordValidity) {
                confirmPassWordRef.current.focus();
              } else {
                if (email === confirmEmail) {
                  setEmailsAreEquals(true);
                  if (passWord === confirmPassWord) {
                    setPassWordsAreEqual(true);
                    setFormValidation(true); // form validation is true
                  } else {
                    setPassWordsAreEqual(false);
                  }
                } else {
                  setEmailsAreEquals(false);
                }
              }
            }
          }
        }
      }
    }
  };

  //
  return (
    <div className={styles["control-form"]}>
      <div>
        <h3>Sign Up</h3>
      </div>
      <Form onSubmit={submitFormHandler}>
        <Input
          type="text"
          name="firstName"
          lable="First Name:"
          ref={firstNameRef}
          onChange={fisrtNameChangeHandler}
          onBlur={firstNameBlurHandler}
          value={firstName}
          className={firstNameValidity === false ? styles["input-invalid"] : ""}
        />
        {firstNameValidity === false && (
          <p className={styles.invalid}>first name must be added</p>
        )}

        <Input
          ref={lastNameRef}
          type="text"
          name="lastName"
          lable="Last Name:"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          value={lastName}
          className={lastNameValidity === false ? styles["input-invalid"] : ""}
        />
        {lastNameValidity === false && (
          <p className={styles.invalid}>last name must be added</p>
        )}

        <Input
          type="text"
          name="userEmail"
          lable="Your Email:"
          ref={emailRef}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
          className={emailValidity === false ? styles["input-invalid"] : ""}
        />
        {emailValidity === false && (
          <p className={styles.invalid}>email must be includes "@" and "."</p>
        )}
        {!emailsAreEqual && (
          <p className={styles["invalid-equal"]}>Two Emails must be same!</p>
        )}
        <Input
          type="text"
          name="confirmEmail"
          lable="Confirm Email:"
          ref={confirmEmailRef}
          onChange={confirmEmailChangeHandler}
          onBlur={confirmEmailBlurHandler}
          value={confirmEmail}
          className={
            confirmEmailValidity === false ? styles["input-invalid"] : ""
          }
        />
        {confirmEmailValidity === false && (
          <p className={styles.invalid}>email must be includes "@" and "."</p>
        )}
        {!emailsAreEqual && (
          <p className={styles["invalid-equal"]}>Two Emails must be same!</p>
        )}
        <Input
          type="password"
          name="userPassWord"
          lable="Password:"
          placeholder="at least 6 character and includes '&'"
          ref={passWordRef}
          onChange={passWordChangeHandler}
          onBlur={passWordBlurHandler}
          value={passWord}
          className={passWordValidity === false ? styles["input-invalid"] : ""}
        />
        {passWordValidity === false && (
          <p className={styles.invalid}>
            at least 6 character and includes '&'
          </p>
        )}
        {!passWordsAreEqual && (
          <p className={styles["invalid-equal"]}>Two PassWords must be same!</p>
        )}
        <Input
          type="password"
          name="confirmUserPassWord"
          lable="Confirm Password:"
          placeholder="at least 6 character and includes '&'"
          ref={confirmPassWordRef}
          onChange={confirmPassWordChangeHandler}
          onBlur={confirmPassWordBlurHandler}
          value={confirmPassWord}
          className={
            confirmPassWordValidity === false ? styles["input-invalid"] : ""
          }
        />
        {confirmPassWordValidity === false && (
          <p className={styles.invalid}>
            at least 6 character and includes '&'
          </p>
        )}
        {!passWordsAreEqual && (
          <p className={styles["invalid-equal"]}>Two PassWords must be same!</p>
        )}

        <div>
          <Button type="submit">Sign Now!</Button>
        </div>
      </Form>
    </div>
  );
};
export default Sign;
