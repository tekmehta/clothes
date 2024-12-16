const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-bold mb-4">Womens Fashion</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-pink-500">Women Clothing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-pink-500">Women Shoes</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-pink-500">Women Watches</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">Mens Fashion</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500">Men Clothing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500">Men Shoes</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-500">Men Watches</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">Contact Us</h5>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+123456789" className="text-gray-300 hover:text-green-500">+123456789</a>
                </li>
                <li>
                  <a href="mailto:info@example.com" className="text-gray-300 hover:text-green-500">info@example.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">Follow Us</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-7h-2.54v-2.88h2.54v-2.2c0-2.51 1.5-3.9 3.79-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.55v1.89h2.78l-.44 2.88h-2.34v7C18.34 21.12 22 16.99 22 12z" />
                    </svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-7h-2.54v-2.88h2.54v-2.2c0-2.51 1.5-3.9 3.79-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.55v1.89h2.78l-.44 2.88h-2.34v7C18.34 21.12 22 16.99 22 12z" />
                    </svg>
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  