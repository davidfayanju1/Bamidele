import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-[6rem] fixed top-0 left-0 bg-white w-full flex z-10 items-center justify-between md:px-[4.2rem] px-[1.5rem]">
      <div className="image_container">
        <h1 className="font-bold text-[1.55rem]">BAM</h1>
      </div>

      <div className="item_container md:hidden block">
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? <IoClose size={30} /> : <RxHamburgerMenu size={30} />}
        </button>
      </div>
      <nav className="icon_title md:block hidden">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link to={"/"} className="font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/"} className="font-semibold">
              Courses
            </Link>
          </li>
          <li>
            <Link to={"/"} className="font-semibold">
              Testimonial
            </Link>
          </li>
        </ul>
      </nav>
      {toggle && (
        <nav className="mobile_icon_title md:hidden w-full fixed top-[6rem] left-0 bg-white min-h-[10rem] px-4 py-[3rem] block">
          <ul className="flex items-center justify-center flex-col gap-4">
            <li>
              <Link to={"/"} className="font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/"} className="font-semibold">
                Courses
              </Link>
            </li>
            <li>
              <Link to={"/"} className="font-semibold">
                Testimonial
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Nav;
