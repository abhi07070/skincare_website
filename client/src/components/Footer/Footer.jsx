import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundColor: "#f8f9fa", // Light background color
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#home",
  },
  {
    title: "Products",
    link: "/#products",
  },
  {
    title: "About Us",
    link: "/#about-us",
  },
  {
    title: "Contact Us",
    link: "/#contact-us",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-gray-800 ">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              {/* <img alt="" className="max-w-[50px]" /> */}
              SKIN CARE PRODUCTS
            </h1>
            <p>
              Discover our range of premium skincare products designed to
              rejuvenate and nourish your skin. From cleansers to moisturizers,
              we have everything you need for a radiant complexion.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Explore
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-800"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Follow Us
                </h1>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" className="text-gray-800 hover:text-primary">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#" className="text-gray-800 hover:text-primary">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#" className="text-gray-800 hover:text-primary">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
              <div className="mt-6 py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Us
                </h1>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-xl" />
                  <p>123 Beauty Street, Glam City, Glamour</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt className="text-xl" />
                  <p>+91 987654321</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
