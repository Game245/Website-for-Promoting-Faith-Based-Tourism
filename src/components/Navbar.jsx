import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import LOGO from "../assets/images/LOGO.png";

function Navbar() {
  const [Toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const navbarRef = useRef(null);

  const openToggle = () => setToggle((prev) => !prev);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeAllMenus = () => {
    setToggle(false);
    setDropdownOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
    closeAllMenus();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeAllMenus();
    window.scrollTo(0, 0); // Scroll to top when changing route
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !navbarRef.current?.contains(event.target) &&
        !dropdownRef.current?.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        closeAllMenus();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const ActiveLink = ({ children, to }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-red-500 p-2 rounded-lg transition-colors duration-300 ease-in-out"
          : "text-black hover:text-sky-500 hover:bg-gray-300 p-2 rounded-lg transition-colors duration-300 ease-in-out"
      }
      onClick={closeAllMenus} // ปิดเมนูเมื่อกดลิงก์
    >
      {children}
    </NavLink>
  );

  return (
    <nav
      ref={navbarRef}
      className={`relative font-bold h-auto sticky top-0 z-50 bg-opacity-100 ${
        isScrolled ? "bg-white/60" : "bg-white/20"
      } backdrop-blur-md`}
    >
      <div className="container mx-auto max-w-7xl h-auto p-5 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]">
        <Link to="/" onClick={closeAllMenus}>
          <img
            src={LOGO}
            alt="LOGO สถานที่ท่องเที่ยวเชิงศรัทธา (สายมู) อุบลราชธานี"
            className="w-10 h-auto md:w-20 cursor-pointer"
          />
        </Link>
        <ul
          className={`${
            !Toggle ? "hidden" : "flex"
          } flex flex-col my-8 md:flex md:flex-row  rounded-lg p-2`}
        >
          <li className="my-2 md:mx-4">
            <ActiveLink to="/">หน้าแรก</ActiveLink>
          </li>

          <li className="md:inline-block relative group md:items-center">
            <button
              ref={buttonRef}
              className="flex rounded-lg flex-row items-center hover:text-sky-500 hover:bg-gray-300 p-2 md:rounded-lg transition-colors duration-300 ease-in-out cursor-pointer"
              onClick={toggleDropdown}
            >
              แนะนำ <IoMdArrowDropdown />
            </button>
            {dropdownOpen && (
              <div
                id="dropdown"
                ref={dropdownRef}
                className="flex flex-col p-5 mx-2 min-w-[200px] md:absolute z-10 shadow-md bg-gray-100 rounded-lg"
              >
                <ActiveLink to="/destinations">สถานที่ขอพร</ActiveLink>
                <ActiveLink to="/myth">ตำนานและความเชื่อ</ActiveLink>
                <ActiveLink to="/rituals">วิธีการไหว้และพิธีกรรม</ActiveLink>
              </div>
            )}
          </li>

          <li className="my-2 md:mx-4">
            <ActiveLink to="/about">เกี่ยวกับเรา</ActiveLink>
          </li>
          <li className="my-2 md:mx-4">
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
