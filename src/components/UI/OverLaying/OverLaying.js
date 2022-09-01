import ReactDOM from "react-dom";
//
import styles from "./OverLaying.module.css";
//
const OverLaying = (props) => {
  const overLayingSystem = (
    <>
      <div className={styles.layer} onClick={props.onClick}></div>
      <div className={styles["over-layer"]}>{props.children}</div>
    </>
  );
  return ReactDOM.createPortal(
    overLayingSystem,
    document.getElementById("layer")
  );
};

export default OverLaying;
