import React from 'react'
import { useState } from 'react';
import caard from '../assets/images/02.png';
function Card() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = (i) => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = (i) => {
      setIsHovering(false);
    };
       
    const hoverStyle={
        width:'45px',
        height:'33px',
    }  
     const slogan={
        display: isHovering ? 'block':'none',
        position: 'absolute',
        bottom: '10px',
        opacity:'100%',
     }
  return (
    <div id="card" className=' mr-auto mb-3'>
    <div
      class="transition ease-in-out delay-75 max-w-sm rounded overflow-hidden shadow-md relative hover:transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img class="w-full" src={caard} alt="Sunset in the mountains " />
      <div style={slogan} className="flex flex-col justify-center  w-100">
        <div
          class="box-border  rounded ml-10 bg-white  hoverStyleClass "
          
        ></div>
        <div className="flex justify-center">
          <button className="w-75 bg-white mt- text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded z-40 hover:-translate-y-1 hover:bg-gray-500">
            APREÇU
          </button>
          </div>
      </div>
    </div>
    <div>
      <div className="flex justify-around">
        <p className=" pt-4">Barcha Flous</p>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-3 text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-basket"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />{" "}
          </svg>
        </a>
      </div>
      <p className="text-center text-lg m-0">20 دت</p>
    </div>
  </div>
  )
}

export default Card