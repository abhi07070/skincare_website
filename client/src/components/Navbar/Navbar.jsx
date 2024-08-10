import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
          {/* Uncomment and add your logo here */}
          <h1 className="text-xl font-bold">SKIN CARE</h1>
          {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          } z-30`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>

          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>
        {/* <div>
          <input className="outline-black rounded-full py-1 px-2 border-2 border-black" />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
