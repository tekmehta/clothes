import Link from "next/link";
import React from "react";

const items = [
  {
    id: 1,
    image: "/pic/kid1.avif",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
    pathoffile: "/item-details",
  },
  {
    id: 2,
    image: "/pic/kid2.avif",
    name: "Half Pant for Boys",
    description: "Available in all sizes, for kids",
    price: 550,
    originalPrice: 700,
    discount: "12% off",
    dealType: "Bestseller",
    delivery: "in 2 days",
    pathoffile: "/item-details",
  },
  {
    id: 3,
    image: "/pic/kid3.jpg",
    name: "Shirt Both Sided",
    description: "Available in all sizes, for ladies",
    price: 100,
    originalPrice: 150,
    discount: "30% off",
    dealType: "Fast Seller",
    delivery: "in 2 days",
    pathoffile: "/item-details",
  },
  {
    id: 4,
    image: "/pic/kid4.avif",
    name: "Shirt Both Sided",
    description: "Available in all sizes, for ladies",
    price: 100,
    originalPrice: 150,
    discount: "30% off",
    dealType: "Fast Seller",
    delivery: "in 2 days",
    pathoffile: "/item-details",
  },
  {
    id: 5,
    image: "/pic/kid5.avif",
    name: "Shirt Both Sided",
    description: "Available in all sizes, for ladies",
    price: 100,
    originalPrice: 150,
    discount: "30% off",
    dealType: "Fast Seller",
    delivery: "in 2 days",
    pathoffile: "/item-details",
  },
  {
    id: 6,
    image: "/pic/kid6.jpg",
    name: "Shirt Both Sided",
    description: "Available in all sizes, for ladies",
    price: 100,
    originalPrice: 150,
    discount: "30% off",
    dealType: "Fast Seller",
    delivery: "in 2 days",
    pathoffile: "/item-details",
  },
  {
    id: 7,
    image: "/pic/kid7.jpg",
    name: "Shirt Both Sided",
    description: "Available in all sizes, for ladies",
    price: 100,
    originalPrice: 150,
    discount: "30% off",
    dealType: "Fast Seller",
    delivery: "in 2 days",
    pathoffile: "/item-details",
  },
  {
    id: 8,
    image: "/pic/kid8.jpg",
    name: "Shirt Both Sided",
    description: "Available in all sizes, for ladies",
    price: 100,
    originalPrice: 150,
    discount: "30% off",
    dealType: "Fast Seller",
    delivery: "in 2 days",
    pathoffile: "/item-details",
  },
];

const ClothList = () => {
  return (
    <div>
      {/* Grid for large screens */}
      <div className="bg-stone-300 grid grid-cols-1 gap-4 pt-4 p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 block sm:hidden">
        {items.map((item) => (
          <div
            className="bg-stone-300 gap-5 shadow-lg p-1 rounded-lg grid grid-cols-2 items-center"
            key={item.id}
          >
            {/* Left Side: Image */}
            <div className="w-full">
              <img
                src={item.image}
                alt={`${item.name} image`}
                className="rounded-lg w-full h-40 object-cover"
              />
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col">
              <Link href={item.pathoffile}>
                <p className="font-bold text-sm text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                <div className="mt-2">
                  <span className="text-sm text-black font-semibold">
                    Rs-{item.price}
                  </span>
                  <span className="text-xs text-gray-400 line-through ml-2">
                    {item.originalPrice}
                  </span>
                </div>
                <span className="text-sm text-green-600 font-medium mt-1">
                  {item.discount}
                </span>
                <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-semibold mt-2 inline-block">
                  {item.dealType}
                </span>
                <div className="flex items-center space-x-1 text-green-500 mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M3 3h11v6h-3v2h6V9h1l5 6v4h-2a3 3 0 01-6 0h-2a3 3 0 01-6 0H3V3zm17 9.7L18.5 10h-2v2h3.5v.7zM5 15a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                  <span className="text-xs">{item.delivery}</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Grid for small to medium screens */}
      <div className="hidden sm:block">
        <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 pt-4 p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
          {items.map((item) => (
            <div
              className="bg-white shadow-lg p-1 rounded-lg flex flex-col items-stretch hover:scale-105 transition-all duration-500"
              key={item.id}
            >
              <Link href={item.pathoffile}>
                <div>
                  <img
                    src={item.image}
                    alt={`${item.name} image`}
                    className="rounded-t-lg w-full h-30 object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-800 mt-2">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-600">{item.description}</p>
                  <div className="mt-2">
                    <span className="text-sm text-black font-semibold">
                      Rs-{item.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through ml-2">
                      {item.originalPrice}
                    </span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">
                    {item.discount}
                  </span>
                  <br />
                  <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-semibold mt-2 inline-block">
                    {item.dealType}
                  </span>
                  <div className="flex items-center space-x-1 text-green-500 mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M3 3h11v6h-3v2h6V9h1l5 6v4h-2a3 3 0 01-6 0h-2a3 3 0 01-6 0H3V3zm17 9.7L18.5 10h-2v2h3.5v.7zM5 15a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z" />
                    </svg>
                    <span className="text-xs">{item.delivery}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothList;
