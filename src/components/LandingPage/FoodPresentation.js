import React from "react";
//
import photo1 from "./Photos/landing1.webp";
import photo2 from "./Photos/landing2.jpg";
import photo3 from "./Photos/landing3.jpg";
import photo4 from "./Photos/landing4.jpg";
//
const FoodPresentation = () => {
  return (
    <>
      <div>
        <img src={photo1} alt="Food1" />
      </div>
      <div>
        <img src={photo2} alt="Food2" />
      </div>
      <div>
        <img src={photo3} alt="Food3" />
      </div>
      <div>
        <img src={photo4} alt="Food4" />
      </div>
    </>
  );
};
export default React.memo(FoodPresentation);
