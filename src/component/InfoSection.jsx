import React from "react";
import VideoElement from "../assets/images/vid.mp4";
import ImageE from "../assets/images/1.jpg";
import CardsComment from "./CardsComment";
import Cards from "./Cards";

function InfoSection() {
  return (
    <div className=" mb-2 mt-5">
      <Cards />
      <p className="underline underline-offset-8 text-center text-gray-400 text-md sm:text-2xl mb-5 ">
        DITES BYE AUX CARTES ENNUYANTES 👋
      </p>
      <div className="lg:flex container  ">
        <div className="col">
          <video
            class="object-fit-img"
            autoplay
            loop
            muted
            playsinline
            controls
          >
            <source src={VideoElement} type="video/mp4" />
          </video>
        </div>
        <div className="col lg:ml-12 mt-4 text-l sm:text-xl">
          <p className="text-black  font-bold">Facile a installer</p>
          <p className="text-black  font-normal">
            Ètape 1: Décoller la moitié arriére de la peau de votre carte de
            débit.
          </p>
          <p className="text-black  font-normal">
            Ètape 2: Alignez le skin de votre carte avec le bord supérieur de
            votre carte
          </p>
          <p className="text-black  font-normal">
            Ètape 3: Une fois aligné,décollez lentement le reste du support
            protecteur tout en l'appliquant.
          </p>
          <p className="text-black  font-bold">
            C'est ça.Est-ce simple et rapide,n'est-ce pas ?
          </p>
        </div>
      </div>
      <p className="underline underline-offset-8 text-center text-gray-400 text-md sm:text-2xl mb-5 mt-5">
        QU'ONT-ILS DIT DE NOUS ?
      </p>
      <CardsComment />
      <div className="w-100">
        <img src={ImageE} alt="" srcset="" />
      </div>
      <p className="underline underline-offset-8 text-center text-gray-400 text-md sm:text-2xl mb-2 mt-5">
        LES GENS NOUS POSENT HABITUELLEMENT CES QUESTIONS...
      </p>
      <div className="grid  place-items-center h-50">
        <p className=" text-center p-2.5 w-50 bg-gray-200 text-black text-xl sm:text-4xl mb-5 mt-5">
          PRODUIT
        </p>
      </div>

      <div className="flex justify-center w-75 md:w-50  mx-auto">
        <div className=" flex flex-col">
          <p className="text-gray-400 text-start text-2xl sm:text-3xl font-normal">
            Ma carte fonctionnera-t-elle toujours ?!
          </p>
          <p className=" text-start text-md sm:text-xl font-bold">
            OUI! Nous utilisons un matériau spécial pour nous assurer que vous
            pouvez insérer, glisser et <br />
            tapoter del méme maniére que vous en avez l'habitude
          </p>
        </div>
      </div>
      <div className="grid  place-items-center ">
        <p className=" text-center p-2.5 w-50 bg-gray-200 text-black text-xl sm:text-4xl mb-5 mt-5">
          LIVRAISON
        </p>
      </div>
      <div className="flex flex-col justify-center   w-50 md:w-50  mx-auto">
        <p className="text-gray-400 text-start text-2xl sm:text-3xl font-normal">
          Combien coute l'éxpédition ?
        </p>
        <p className=" text-start text-md sm:text-xl  font-bold">
          C'est GRATUIT pour l'expédition standard 😊
        </p>
        <hr />
      </div>
      <div className="flex flex-col justify-center mb-5   w-50 md:w-50  mx-auto">
        <p className="text-gray-400 text-start text-2xl sm:text-3xl font-normal">
          Quand vais-je recevoir ma commande ?
        </p>
        <p className=" text-start text-md sm:text-xl  font-bold">
          Délai de livraison estimé : 2-3 Jours
        </p>
      </div>
    </div>
  );
}

export default InfoSection;
