import styles from "./Header.module.css";
const LogIn = (props) => {
  return (
    <div className={styles["log-in"]} onClick={props.onClick}>
      Log In
    </div>
  );
};
export default LogIn;
