import React, { useState } from "react";
import Image from "../../assets/hero/skincare.jpeg";
import Image1 from "../../assets/hero/skincare1.png";
import Image2 from "../../assets/hero/skincare1.png";
import Slider from "react-slick";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaLocationPin,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import Modal from "../Model";

// Sample images
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "NOURISH YOUR SKIN WITH NATURAL INGREDIENTS",
    head1: "NO PARABENS",
    head2: "NO SULFATES",
    head3: "NO ARTIFICIAL FRAGRANCES",
  },
  {
    id: 2,
    img: Image2,
    title: "ACHIEVE GLOWING SKIN WITH OUR VITAMIN C SERUM",
    head1: "BRIGHTENING FORMULA",
    head2: "ANTI-AGING PROPERTIES",
    head3: "BOOSTS COLLAGEN",
  },
  {
    id: 3,
    img: Image1,
    title: "PROTECT YOUR SKIN WITH BROAD SPECTRUM SUNSCREEN",
    head1: "SPF 50+",
    head2: "UVA & UVB PROTECTION",
    head3: "WATER RESISTANT",
  },
];

// Custom Arrow components with text arrows
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -right-4 sm:-right-14 transform -translate-y-1/2 cursor-pointer z-20"
      onClick={onClick}
      style={{
        display: "block",
        padding: "10px",
        borderRadius: "50%",
      }}
    >
      <span className="text-3xl sm:text-5xl font-bold text-[#e69215]">
        {">"}
      </span>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -left-4 sm:-left-14 transform -translate-y-1/2 cursor-pointer z-20"
      onClick={onClick}
      style={{
        display: "block",
        padding: "10px",
        borderRadius: "50%",
      }}
    >
      <span className="text-3xl sm:text-5xl font-bold text-[#e69215]">
        {"<"}
      </span>
    </div>
  );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      className={`relative overflow-hidden min-h-[550px] h-screen bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200`}
    >
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 ">
        <img
          src={Image}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container pb-8 sm:pb-0 relative z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl sm:w-7/12 font-bold">
                    {data.title}
                  </h1>
                  <div className="flex flex-col">
                    <h1 className="bg-[#643232] pl-3 text-white sm:w-[240px] font-thin m-0 p-1 whitespace-nowrap">
                      {data.head1}
                    </h1>
                    <h1 className="bg-[#834343] pl-3 text-white sm:w-[230px] font-thin m-0 p-1 whitespace-nowrap">
                      {data.head2}
                    </h1>
                    <h1 className="bg-[#9b6464] pl-3 text-white sm:w-[220px] font-thin m-0 p-1 whitespace-nowrap">
                      {data.head3}
                    </h1>
                  </div>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-between gap-4 flex-col-reverse sm:flex-row sm:items-start items-center pt-8 ">
          {/* contact icons */}
          <div className="flex flex-col gap-2 font-bold text-sm sm:text-base">
            <div className="flex gap-1 items-center">
              <FaLocationDot size={25} />
              <span>
                115 B Mittal Court,
                <br />
                Natiman Point, Mumbai 400021
              </span>
            </div>
            <div className="flex gap-1 py-1 items-center">
              <FaPhone size={21} /> <span>+91 987654321 | +91 987654321</span>
            </div>
            <div className="flex gap-2">
              <span className="cursor-pointer">
                <FaXTwitter size={21} />
              </span>
              <span className="cursor-pointer">
                <FaInstagram size={21} />
              </span>
              <span className="cursor-pointer">
                <FaFacebook size={21} />
              </span>
              <span className="cursor-pointer">
                <FaLinkedin size={21} />
              </span>
            </div>
          </div>
          {/* contact icons */}
          <div className="sm:w-1/2 flex pt-3 items-center justify-center flex-col">
            <button
              onClick={handleModalOpen}
              className="bg-white text-[#e69215] border-[#e69215] border-2 px-12 py-1 rounded-full font-bold"
            >
              Book Appointment
            </button>
          </div>
          <Modal isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
