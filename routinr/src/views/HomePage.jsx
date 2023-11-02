import React from 'react'
import MainSection from './components/MainSection';
import Ellipse3 from "../assets/icons/Ellipse3.png";
import SecondSection from './components/SecondSection';
import CardsSection from './components/CardsSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
const HomePage = () => {
  return (
    <div className="App">
      <div className="hidden md:block md:absolute right-0">
        <img className="w-[150px]" src={Ellipse3} alt="ellipse3" />
      </div>
      <div className="main sm:bg-[#031A3E] md:bg-[#031A3E] pt-28 md:pt-10   w-full lg:p-10 p-5">
        <MainSection />
      </div>
      <div className="main md:bg-[#031A3E] sm:bg-[#031A3E]  w-full p-10">
        <div className="flex justify-center mt-12">
          <SecondSection />
        </div>
      </div>
      <div className="main sm:bg-[#031A3E] md:bg-[#031A3E]   w-full p-1">
        <div className="flex justify-center ">
          <div className="">
            <h1 className="lg:text-6xl md:text-3xl text-xl text-center font-bold text-white mt-10 md:mt-28 leading-snug">
              A New Platform Built For The
              <br /> New Way Of Working
            </h1>
            <p className="text-white pt-5 text-center text-xl">
              what would you love to be productive about with ROUTINR?
            </p>
          </div>
        </div>
      </div>
      <div className="main sm:bg-[#031A3E] md:bg-[#031A3E] pt-28 md:pt-12  w-full lg:p-24 p-5">
        <CardsSection />
      </div>
      <div className="main sm:bg-[#031A3E] md:bg-[#031A3E]   w-full p-0 pt-1 md:pt-5">
        <h1 className="lg:text-6xl md:text-3xl text-3xl text-center font-bold text-white mt-28 leading-snug">
          Integrate With Tools You Love
        </h1>
        <p className="text-white pt-5 text-center text-xl">
          Routinr Comes With A Workspace Where You Can Use And Enjoy
          <br /> Your Popular Tools
        </p>
      </div>
      <div className="main sm:bg-[#031A3E] md:bg-[#031A3E] pt-20 p-5">
        <SocialSection />
      </div>
      <div className="bg-[#153362] h-fit md:h-[350px]">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage
