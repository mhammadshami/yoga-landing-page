import React, { useEffect, useState } from "react";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import logo
import Logo from "../assets/img/logo.png";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    // scroll event listener
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  }, []);

  return (
    <header
      className={`${
        header ? "top-0" : "top-9"
      } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
    >
      <div className="flex items-center">
        {/* logo */}
        <a href="">
          <img src={Logo} alt="" />
        </a>
        {/* nav */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        {/* buttons */}
        <div className="flex gap-x-4 lg:gap-x-9">
          <button className="text-heading font-medium text-sm lg:text-base hover:text-orange-100 transition">
            Sign In
          </button>
          <button className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-100 hover:text-white transition">
            Sign Up
          </button>
          {/* nav mobile */}
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
