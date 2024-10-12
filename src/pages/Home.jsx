import React from "react";
import MainLayout from "../layout/MainLayout";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <MainLayout>
      <header className="hero_section min-h-[33rem] bg-white flex items-center justify-between w-full">
        <div className="item_container md:pl-[4rem] md:w-[60%] w-full">
          <h1 className="font-bold md:text-[2.8vw] open-sans text-[1.5rem] md:w-[80%] w-[95%] md:text-left text-center">
            "HOW LOSING 45,000 NAIRA MADE ME OVER 500,000 NAIRA PROFIT ONLINE"
          </h1>
          <p className="my-4 font-semibold md:text-left text-center md:w-[85%] w-full">
            All made with my smartphone, I didn't have to travel anywhere or
            visit any physical site/office. This is Super Real. My 2-DAYS FREE
            Training Will Teach You How I Did This
          </p>
          <button className="w-[15rem] md:mx-0 mx-auto h-[4rem] items-center justify-center font-semibold rounded-full text-center flex bg-slate-600 text-white">
            Learn More
          </button>
        </div>
        <div className="picture_container z-0 md:block hidden relative w-[40%] h-[30rem]">
          <div className="item_blob absolute h-[24rem] bottom-2 left-5 w-[20rem] rounded-[100px] bg-gray-800 z-0"></div>
          <img
            src="/images/Vikky.png"
            alt="Victor's Image"
            className="w-full h-full relative z-10"
          />
        </div>
      </header>

      <Marquee
        className="slider-statement cursor-default bg-carpet-green relative"
        speed={180}
        play
      >
        <div className="element bg-black py-6 flex items-center gap-[5rem]">
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING • DIGITAL MARKETING
          </span>
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING • DIGITAL MARKETING
          </span>
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING • DIGITAL MARKETING
          </span>
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING • DIGITAL MARKETING
          </span>
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING • DIGITAL MARKETING
          </span>
        </div>
      </Marquee>

      <section className="item_container bg-gray-200 min-h-[30rem] flex itemsc-enter justify-between gap-3"></section>
    </MainLayout>
  );
};

export default Home;
