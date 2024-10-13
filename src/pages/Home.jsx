import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [isplaying, setIsplaying] = useState(true);

  return (
    <MainLayout>
      <header className="hero_section min-h-[33rem] pb-[5rem] bg-white flex items-center justify-between w-full">
        <div className="item_container md:pl-[4rem] md:w-[60%] w-full">
          <blockquote className="font-bold block md:text-[2.1vw] open-sans text-[1.5rem] md:w-[80%] w-[95%] md:text-left text-center md:mx-o mx-auto">
            HOW LOSING 45,000 NAIRA MADE ME OVER 500,000 NAIRA PROFIT {""}
            <span className="text-red-500">ONLINE</span>
          </blockquote>
          <blockquote className="my-4 block md:font-semibold md:text-left text-center md:mx-o mx-auto md:w-[85%] w-[97%]">
            All made with my smartphone, I didn't have to travel anywhere or
            visit any physical site/office. This is Super Real. My 2-DAYS FREE
            Training Will Teach You How I Did This
          </blockquote>
          <button className="md:w-[15rem] w-[80%] md:mx-0 mx-auto md:h-[4rem] h-[3rem] items-center justify-center font-semibold rounded-full text-center flex bg-slate-600 text-white">
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
        speed={120}
        onMouseEnter={() => setIsplaying(false)}
        onMouseLeave={() => setIsplaying(true)}
        play={isplaying}
      >
        <div className="element bg-black py-6 flex items-center gap-[5rem]">
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING IS THE WAY • DIGITAL
            MARKETING
          </span>
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING IS THE WAY • DIGITAL
            MARKETING
          </span>
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING IS THE WAY • DIGITAL
            MARKETING
          </span>
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING IS THE WAY • DIGITAL
            MARKETING
          </span>
          <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
            • DIGITAL MARKETING • DIGITAL MARKETING IS THE WAY • DIGITAL
            MARKETING
          </span>
        </div>
      </Marquee>

      {/* About */}
      <section className="item_container bg-gray-200 min-h-[30rem] flex itemsc-enter justify-between gap-3">
        <div className="text_section">
          <span className="title"></span>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
