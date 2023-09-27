import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const ParallexMouse = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <MouseParallaxChild factorX={0.9} factorY={0.9}>
      👌
      </MouseParallaxChild>
      {/* <MouseParallaxChild factorX={0.7} factorY={0.8}>
        <img src="example2.jpg" alt="" />
      </MouseParallaxChild> */}
    </MouseParallaxContainer>
  );
};

export default ParallexMouse;
