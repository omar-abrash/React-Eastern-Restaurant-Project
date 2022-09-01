import React from "react";
//
import styles from "./LandingPage.module.css";
const Abstract = () => {
  return (
    <>
      <div className={styles.questions}>
        <h2>What about this Restaurant ?</h2>
        <p>
          In this restaurant we produce the most popular and famous food in the
          eastern world, you can find all traditional and delicious food.{" "}
        </p>
      </div>
      <div className={styles.questions}>
        <h2>Who is produced these foods ?</h2>
        <p>
          Our team consist of greatful chefes in the eastren world, they have
          modereted all process and check for all equebments in the resturent.
        </p>
      </div>
    </>
  );
};
export default React.memo(Abstract);
