import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 relative bottom-0 left-0 right-0 text-xl ">
      <div className="container px-4 flex flex-col  justify-between">
        <div className="flex flex-wrap justify-center items-center mx-20">
          <div className="w-full md:w-1/3 mb-6">
            <h5 className="text-lg font-bold mb-4">Navigation</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h5 className="text-lg font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-facebook-f"></i>{" "}
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h5 className="text-lg font-bold mb-4">Contact Us</h5>
            <p>
              Email:{" "}
              <a href="mailto:info@example.com" className="hover:underline">
                info@example.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+123456789" className="hover:underline">
                +1 (234) 567-89
              </a>
            </p>
          </div>
        </div>

        <div className="text-center border-t border-gray-700 pt-4 mt-4">
          <p className="text-sm">© 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
