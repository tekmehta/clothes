import React from "react";

const Authlogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-8">Please login to your account</p>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center text-gray-500 font-medium">Or login with</div>
        <div className="flex justify-between mt-6">
          <button
            className="flex items-center justify-center w-1/3 bg-red-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            <i className="fas fa-envelope mr-2"></i> Gmail
          </button>
          <button
            className="flex items-center justify-center w-1/3 bg-yellow-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            <i className="fas fa-mail-bulk mr-2"></i> Mail
          </button>
          <button
            className="flex items-center justify-center w-1/3 bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <i className="fab fa-facebook-f mr-2"></i> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authlogin;
