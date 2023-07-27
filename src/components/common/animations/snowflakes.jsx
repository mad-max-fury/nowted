import React from "react";
import "./style.scss";
const SnowEffect = () => {
  const totalSnowflakes = 200;

  return (
    <>
      {Array.from({ length: totalSnowflakes }).map((_, index) => {
        return <div key={index} className={"snow"} />;
      })}
    </>
  );
};

export default SnowEffect;
