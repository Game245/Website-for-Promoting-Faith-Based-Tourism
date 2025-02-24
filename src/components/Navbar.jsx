import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [Toggle, setToggle] = useState(false);
  const openToggle = () => {
    setToggle(!Toggle);
  };

  const ActiveLink = ({ children, to }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-black hover:text-sky-500 hover:bg-gray-300 p-2 rounded-lg transition-colors duration-300 ease-in-out"
      }
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="bg-zine-600 relative font-bold h-auto sticky top-0 z-50 bg-opacity-100 bg-white/20 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]">
        <Link>
          <p>LOGO</p>
        </Link>
        <ul
          className={`${
            !Toggle ? "hidden" : "flex"
          } flex flex-col my-8 md:flex md:flex-row md:bg-zine-600 rounded-lg p-2`}
        >
          <li className="my-2 md:mx-4  hover:bg-gray-300 md:hover:bg-transparent p-2 rounded-lg transition-colors duration-300 ease-in-out">
            <ActiveLink to="/">หน้าแรก</ActiveLink>
          </li>

          <li className="md:inline-block relative group md:items-center">
            <div className="my-2 flex rounded-lg flex-row items-center  hover:text-sky-500   hover:bg-gray-300 p-2 md:rounded-lg transition-colors duration-300 ease-in-out cursor-pointer">
            แนะนำ <IoMdArrowDropdown />
            </div>
            <div
              id="dropdown"
              className="hidden group-hover:flex flex-col p-5 mx-2 min-w-[200px] md:absolute z-10 shadow-md bg-gray-100 rounded-lg md:block-hidden"
            >
              <ActiveLink
                to="/destinations"
                className="md:block my-2 mx-4   hover:bg-gray-300 p-4 rounded-lg transition-colors duration-300 ease-in-out"
              >
                สถานที่ขอพร
              </ActiveLink>
              <ActiveLink
                to="/myth"
                className="md:block my-2 mx-4  hover:bg-gray-300 p-4 rounded-lg transition-colors duration-300 ease-in-out"
              >
                ตำนานและความเชื่อ
              </ActiveLink>
              <ActiveLink
                to="/rituals"
                className="md:block my-2 mx-4  hover:bg-gray-300 p-4 rounded-lg transition-colors duration-300 ease-in-out"
              >
                วิธีการไหว้และพิธีกรรม
              </ActiveLink>
            </div>
          </li>

          <li className="my-2 md:mx-4  hover:bg-gray-300 md:hover:bg-transparent p-2 rounded-lg transition-colors duration-300 ease-in-out">
            <ActiveLink to="/blog">บทความสายมู</ActiveLink>
          </li>
          <li className="my-2 md:mx-4  hover:bg-gray-300  md:hover:bg-transparent p-2 rounded-lg transition-colors duration-300 ease-in-out">
            <ActiveLink to="/about">เกี่ยวกับเรา</ActiveLink>
          </li>
          <li className="my-2 md:mx-4  hover:bg-gray-300 md:hover:bg-transparent p-2 rounded-lg transition-colors duration-300 ease-in-out">
            <ActiveLink to="/contact">ติดต่อเรา</ActiveLink>
          </li>
        </ul>
        <FaBars
          onClick={openToggle}
          className="absolute right-5 cursor-pointer text-xl md:hidden"
        />
      </div>
    </nav>
  );
}

export default Navbar;

