import React from "react";

const Community = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-200 p-8 md:p-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-purple-600 mb-4">
          Join Our Community
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Be part of our vibrant online shopping community! Here, you will find
          everything you need for your little one, from clothing, toys, baby care
          essentials, and more. Get exclusive deals, interact with other parents,
          and enjoy a seamless shopping experience with our trusted platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
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
                d="M12 2l3 3m0 0l3 3M15 5h6a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V10a2 2 0 012-2h6m6 0l-3-3m3 3v12"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Offers</h3>
            <p className="text-gray-600">
              Join our community for access to exclusive discounts and special
              offers on childrens products. Save more on your favorite items!
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
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
                d="M12 4v8m0 0l3-3m-3 3l-3-3"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Parent Support</h3>
            <p className="text-gray-600">
              Connect with other parents, share tips, and get advice on parenting
              and shopping for your child’s needs.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">
            Why Shop With Us?
          </h2>
          <p className="text-lg text-gray-700">
            Our platform is designed with you and your child in mind. We offer
            the best selection of clothing, toys, baby care essentials, and much
            more, all in one place. Plus, as a part of our community, you will enjoy
            personalized experiences and exclusive deals.
          </p>  
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
