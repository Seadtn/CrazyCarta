import React from "react";
import caard from "../assets/images/02.png";
function SideBar() {
  const BackColor = {
    backgroundColor:"#FFFF00",
  }
  return (
    <div className=" absolute w-25  z-10 top-0 right-0">
      <div  style={BackColor}>
        <p className="text-center text-md p-1">A l'achat de 2 articles le 3eme est GRATUIT !!!</p>
      </div>
       <div className="h-screen bg-white">
           <div>
            <img class="w-full" src={caard} alt="Sunset in the mountains " />
              <div className="">
                <img class="w-5" src={caard} alt="Sunset in the mountains " />
              </div>
           </div>
       </div>
    </div>
  );
}

export default SideBar;
