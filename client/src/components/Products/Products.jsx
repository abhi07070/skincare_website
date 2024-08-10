import React, { useEffect, useState } from "react";
import Img1 from "../../assets/hero/skincare1.png";
import Img2 from "../../assets/hero/skincare2.png";
import Img3 from "../../assets/hero/skincare1.png";
import Img4 from "../../assets/hero/skincare2.png";
import Img5 from "../../assets/hero/skincare1.png";
import Img6 from "../../assets/hero/skincare2.png";
import Img7 from "../../assets/hero/skincare1.png";
import Img8 from "../../assets/hero/skincare2.png";
import Img9 from "../../assets/hero/skincare1.png";
import Img10 from "../../assets/hero/skincare2.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Hydrating Face Cream",
    rating: 4.9,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Brightening Serum",
    rating: 4.8,
    color: "Light Pink",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Sunscreen SPF 50",
    rating: 4.7,
    color: "Yellow",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Exfoliating Scrub",
    rating: 4.6,
    color: "Brown",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Anti-Aging Cream",
    rating: 4.8,
    color: "Light Blue",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Soothing Face Mask",
    rating: 4.5,
    color: "Green",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "Night Repair Cream",
    rating: 4.7,
    color: "Purple",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img8,
    title: "Vitamin C Serum",
    rating: 4.9,
    color: "Orange",
    aosDelay: "1400",
  },
  {
    id: 9,
    img: Img9,
    title: "Moisturizing Lotion",
    rating: 4.6,
    color: "Beige",
    aosDelay: "1600",
  },
  {
    id: 10,
    img: Img10,
    title: "Pore Minimizing Toner",
    rating: 4.5,
    color: "Blue",
    aosDelay: "1800",
  },
  {
    id: 11,
    img: Img1,
    title: "Calming Face Mist",
    rating: 4.7,
    color: "Pink",
    aosDelay: "2000",
  },
  {
    id: 12,
    img: Img2,
    title: "Nourishing Eye Cream",
    rating: 4.8,
    color: "White",
    aosDelay: "2200",
  },
  {
    id: 13,
    img: Img3,
    title: "Cleansing Gel",
    rating: 4.6,
    color: "Clear",
    aosDelay: "2400",
  },
  {
    id: 14,
    img: Img4,
    title: "Lip Balm",
    rating: 4.9,
    color: "Red",
    aosDelay: "2600",
  },
  {
    id: 15,
    img: Img5,
    title: "Body Butter",
    rating: 4.5,
    color: "Cream",
    aosDelay: "2800",
  },
];

const Products = () => {
  const [seachValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ProductsData);

  useEffect(() => {
    const filtered = ProductsData.filter((product) =>
      product.title.toLowerCase().includes(seachValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [seachValue]);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Skincare Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Our Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Discover our best-selling skincare products, formulated with
            powerful ingredients to nourish and rejuvenate your skin.
          </p>
        </div>
        {/* Search Bar */}
        <div className="flex justify-center items-center relative pb-6">
          <input
            className="border-black border-2 rounded-md shadow-md py-1 px-4 sm:w-1/2 w-full outline-none sm:px-12"
            placeholder="Search skincare products..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {filteredProducts.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.keyIngredient}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
