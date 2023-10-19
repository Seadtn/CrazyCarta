import React from 'react'
import logo from '../assets/images/logo.png';
import backImage from '../assets/images/back.webp';

function HeadSection() {
    const BackColor = {
        backgroundColor:"#FFFF00",
      }
      const imgBack={
        backgroundImage:`url(${backImage})`,
      }
  return (
    <div className='flex h-screen' style={imgBack}>
          <div className='col-8 col-sm-6 col-lg-4  col-xl-3 text-center pt-5 h-screen' style={BackColor}>
            <div className='flex justify-center h-1/6'>
                <img src={logo} alt="" srcset="" className='object-contain h-20 w-30 scale-5' />
            </div>
            <div className='flex flex-col justify-evenly  h-5/6'>
              <div><p className='font-extrabold text-l md:text-2xl text-black '>Crazy Carta,</p>
            <p className='font-extrabold  text-l md:text-2xl text-black   '>VOTRE CARTE VOTRE STYLE</p></div>
            
            <p className='font-normal text-sm md:text-l lg:text-xl text-black '>Ajouter une touche <br/> d'organalité à vos cartes de <br/>  crédit avec nos skins uniques.<br/>  Ègayer chaque transaction</p>
            <button className='w-75 bg-white btn: hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-lg mx-auto '>ACHETEZ</button>
            </div>
            
          </div>
        
    </div>
  )
}

export default HeadSection