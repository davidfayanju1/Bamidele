import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [isplaying, setIsplaying] = useState(true);

  return (
    <MainLayout>
      <header className="hero_section min-h-[33rem] pb-[5rem] bg-white flex items-center justify-between w-full">
        <div className="item_container md:pl-[4rem] md:px-0 px-3 md:w-[60%] w-full">
          <blockquote className="font-bold block md:text-[2.1vw] open-sans text-[1.3rem] md:text-left text-center md:mx-o mx-auto">
            HOW LOSING 45,000 NAIRA MADE ME OVER 500,000 NAIRA PROFIT {""}
            <span className="text-red-500 block">ONLINE</span>
          </blockquote>
          <blockquote className="my-4 block md:font-semibold md:text-left text-center md:mx-o mx-auto md:text-[1rem] text-[.8rem]">
            All made with my smartphone, I didn't have to travel anywhere or
            visit any physical site/office. This is Super Real. My 2-DAYS FREE
            Training Will Teach You How I Did This
          </blockquote>
          <button className="md:w-[15rem] w-[80%] md:h-[4rem] h-[3rem] items-center md:mx-0 mx-auto justify-center font-semibold rounded-full text-center flex bg-slate-600 text-white">
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
        speed={50}
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
      <section className="item_container mx-auto md:px-[4rem] px-[1.5rem] bg-white min-h-[30rem] flex items-center md:flex-row py-9 flex-col justify-between gap-3">
        <div className="text_section md:w-[48%] w-full">
          <span className="title block font-semibold text-slate-600">
            ABOUT ME
          </span>
          <p className="mt-3 md:font-semibold md:text-[1rem] text-[.8rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            esse sed a aliquid autem culpa nemo debitis voluptates facilis quam
            dolor sequi dolores illo perspiciatis nulla commodi minima optio
            voluptate officiis, corrupti ad repellat deleniti nihil. Vel iure
            saepe consequatur, quo quibusdam sapiente. Porro, reprehenderit?
            Deserunt doloribus ea earum alias.
          </p>
        </div>
        <div className="picture_section md:w-[48%] w-full rounded-[10px] overflow-hidden">
          <img
            src="/images/marketing2.webp"
            alt=""
            className="rounded-[20px]"
          />
        </div>
      </section>

      <section className="testimonial_section py-[3rem] bg-gray-50 min-h-[30rem]">
        <span className="block title font-semibold text-center text-slate-600">
          TESTIMONIALS
        </span>
      </section>
    </MainLayout>
  );
};

export default Home;
