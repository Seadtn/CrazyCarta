import React, { useState } from "react";
import Card from "./card";
function Cards() {
  const [isHovering, setIsHovering] = useState(false);
  const isWideScreen = window.innerWidth >= 500;
  const handleMouseEnter = (i) => {
    setIsHovering(true);
  };

  const handleMouseLeave = (i) => {
    setIsHovering(false);
  };
  const hoverStyle = {
    width: "50px",
    height: "40px",
    marginBottom: isWideScreen ? "4.687rem" : "18vw",
    //"18vw"
  };
  const slogan = {
    display: isHovering ? "block" : "none",
    position: "absolute",
    bottom: "10px",
    opacity: "100%",
  };
  console.log(isWideScreen);
  return (
    <div>
      <div className="flex justify-center underline underline-offset-8 text-sm sm:text-2xl">
        <a className="text-center text-black  mb-5 ">TOUT&nbsp;&nbsp;&nbsp;</a>
        <a className=" text-center text-gray-400  mb-5 ">
          &nbsp;&nbsp;&nbsp;🚀 TRANDING&nbsp;
        </a>
        <a className="text-center text-gray-400  mb-5 ">
          &nbsp;&nbsp;&nbsp;NOUVELLE COLLECTION{" "}
        </a>
      </div>
      <div className="flex flex-wrap container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </div>
  );
}

export default Cards;
