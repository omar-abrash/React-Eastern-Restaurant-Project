import ContainerCard from "../UI/ContainerCard";
import Abstract from "./Abstract";
import FoodPresentation from "./FoodPresentation";
import FoodItems from "./FoodItems";
//

//
import styles from "./LandingPage.module.css";
//
const LandingPage = (props) => {
  //

  //
  return (
    <div>
      <ContainerCard className={styles.abstract}>
        <Abstract />
      </ContainerCard>

      <ContainerCard className={styles["food-presentation"]}>
        <FoodPresentation />
      </ContainerCard>

      <ContainerCard className={styles["food-items"]}>
        <FoodItems />
      </ContainerCard>
    </div>
  );
};
export default LandingPage;
