import styles from "./ContainerCard.module.css";
//
const ContainerCard = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      {props.children}
    </div>
  );
};
//
export default ContainerCard;
