import React from "react";

const Service = () => {
  return (
    <div className="bg-gray-100 p-8 md:p-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our online shop, where you can find a wide range of high-quality products for children and small kids. We specialize in offering everything from clothing, toys, baby care essentials, and more. Shopping with us means shopping for the best items that meet your child’s needs!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mx-auto text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9L16 9M9 9L9 16M9 9L16 16"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Clothing</h3>
            <p className="text-gray-600">
              From adorable onesies to stylish outfits, we offer a wide range of clothing for your little ones.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mx-auto text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h10m-7 4h7"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Toys & Games</h3>
            <p className="text-gray-600">
              Discover a collection of fun and educational toys that your kids will love, from building blocks to puzzles.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mx-auto text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 10h10M7 14h10m-7 4h7"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Baby Care</h3>
            <p className="text-gray-600">
              We offer top-rated baby care products like diapers, baby lotions, and more to make parenting easier.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-700">
            Our online shopping platform is designed to make your shopping experience easy, secure, and fun! We strive to provide quality products that are safe for your child and delivered straight to your doorstep. Start shopping with us today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
