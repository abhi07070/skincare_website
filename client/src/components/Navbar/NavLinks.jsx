import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group hover:text-primary  duration-300"
              onClick={() => {
                setHeading(heading !== link.name ? link.name : "");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline hover:text-primary  duration-300">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>

            {link.submenu && (
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block z-30">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                </div>
                <div className="bg-white p-5 grid grid-cols-3 gap-10">
                  {link.sublinks.map((mysublinks, subIndex) => (
                    <div key={subIndex}>
                      <h1 className="text-lg font-semibold">
                        {mysublinks.Head}
                      </h1>
                      {mysublinks.sublink.map((slink, slinkIndex) => (
                        <li
                          key={slinkIndex}
                          className="text-sm text-gray-600 my-2.5"
                        >
                          <Link to={slink.link} className="hover:text-primary">
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((slinks, slinksIndex) => (
              <div key={slinksIndex}>
                <div>
                  <h1
                    onClick={() =>
                      setSubHeading(
                        subHeading !== slinks.Head ? slinks.Head : ""
                      )
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center pr-5"
                  >
                    {slinks.Head}
                    <span className="text-xl">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${subHeading === slinks.Head ? "" : "hidden"}`}
                  >
                    {slinks.sublink.map((slink, slinkIndex) => (
                      <li key={slinkIndex} className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
