import React from "react";
import tiktok from "../assets/images/logo-tiktok-svgrepo-com.svg";
function FooterSection() {
  const backColor = {
    backgroundColor: "#FFFF00",
  };
  return (
    <footer>
      <div style={backColor}>
        <div className="flex flex-col justify-around p-4 text-l md:text-xl sm:flex-row">
          <div className="col">
            <p className="text-black text-center text-2xl md:text-3xl text-bold">
              STICKERS🛒
            </p>
            <div className="mx-auto w-fit">
            <p className="text-black   text-bold mb-1">
              Toute la Collection
            </p>
            <p className="text-black  text-bold mb-1">
              Tranding Collection
            </p>
            <p className="text-black  text-bold mb-1">
              Nouvelle Collection
            </p>
          </div></div>

          <div className="col">
            <p className="text-black text-center text-2xl md:text-3xl text-bold">
              AIDE🤔
            </p>
            <div className="mx-auto w-fit">
              <p className="text-black    text-bold mb-1">
                Ma carte fonctionnera-t-elle toujours ?!
              </p>
              <p className="text-black    text-bold mb-1">
                Combien coute l'expédition ?
              </p>
              <p className="text-black   text-bold mb-1">
                Quand vais-je recevoir ma commande ?
              </p>
            </div>
          </div>
          <div className="col">
            <p className="text-black text-center text-2xl md:text-3xl text-bold">
              FOLLOW US🤩
            </p>
            <div className="flex  justify-center">
              <a
                href="http://"
                target="_blank"
                rel=""
                className="border border-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-10 h-10 md:h-16 md:w-16"
                  viewBox="0 0 50 50"
                >
                  <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                </svg>
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black"
              >
                <svg
                  className="w-10 h-10 md:h-16 md:w-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                    stroke="#000000"
                    stroke-width="2"
                  />
                  <circle cx="16.5" cy="7.5" r="1.5" fill="#000000" />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="#000000"
                    stroke-width="2"
                  />
                </svg>
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black"
              >
                <img
                  src={tiktok}
                  alt=""
                  srcset=""
                  className="w-10 h-10 md:h-16 md:w-16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black m-0">
        <p className="m-0 text-white text-center p-2">
          Copyright © 2023 Brandwood.Tous les droits sont réservés.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
