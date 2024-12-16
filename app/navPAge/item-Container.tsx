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
  },
  {
    id: 2,
    image: "/pic/kid2.avif",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 3,
    image: "/pic/kid3.jpg",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 4,
    image: "/pic/kid4.avif",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 5,
    image: "/pic/kid5.avif",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 6,
    image: "/pic/kid6.jpg",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 7,
    image: "/pic/kid7.jpg",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 8,
    image: "/pic/kid8.jpg",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 9,
    image: "/pic/kid9.jpg",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 10,
    image: "/pic/kid10.jpg",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 11,
    image: "/pic/kid11.avif",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
  {
    id: 12,
    image: "/pic/kid12.jpg",
    name: "Womens Fashion one piece",
    description: "Available in all sizes, for ladies",
    price: 300,
    originalPrice: 500,
    discount: "30% off",
    dealType: "Hot Deal",
    delivery: "in 2 days",
  },
];

const ClothList = () => {
  return (
    <div className="flex  justify-center  flex-wrap pt-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {items.map((item) => (
        <div
          className="bg-white w-[120px] shadow-lg p-2 mt-6 mx-2 rounded-lg flex flex-col items-stretch"
          key={item.id}
        >
          <Link href={"/item-details"}>
            <div className="flex item ">
            <img
              src={item.image}
              alt={`${item.name} image`}
              className="rounded-t-lg w-full h-30 object-cover"
            />
            </div>
            <div>
            <p className="font-bold text-sm text-gray-800 mt-2">{item.name}</p>
            <p className="text-xs text-gray-600">{item.description}</p>
            <div className="mt-2">
              <span className="text-sm text-black font-semibold">Rs-{item.price}</span>
              <span className="text-xs text-gray-400 line-through ml-2">
                {item.originalPrice}
              </span>
            </div>
            <span className="text-sm text-green-600 font-medium">{item.discount}</span>
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

  );
};

export default ClothList;
