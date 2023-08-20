import React, { useState } from "react";

// import menu btn icon
import { BiMenu } from "react-icons/bi";

// import data
import { navigation } from "../data";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* menu btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-4xl text-heading ml-[10px] lg:hidden"
      >
        <BiMenu />
      </div>
      {/* menu items */}
      <ul
        className={`${
          isOpen ? "max-h-60 p-8" : "max-h-0  p-0"
        } flex flex-col absolute w-full bg-white top-24 left-0 shadow-primary space-y-6 overflow-hidden transition`}
      >
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
