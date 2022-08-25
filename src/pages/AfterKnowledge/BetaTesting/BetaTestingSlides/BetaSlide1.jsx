import React from "react";
import Slides from "../../../../components/slides/Slides";

const BetaSlide1 = () => {
  return (
    <div>
      <Slides
        heading="What is BetaTesting?"
        para="Beta testing is the process of releasing a new product to a limited audience to understand how they respond to it. The team behind the development can then work on flaws, fix bugs, and develop even better features that will enhance the value of the product"
        imgUrl="betaslide1.png"
      />
    </div>
  );
};

export default BetaSlide1;
