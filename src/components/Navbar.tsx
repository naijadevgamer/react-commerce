import React, { useState } from "react";
import { IoCartOutline, IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const MENU_LINKS = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/Shop" },
  { name: "Contact", link: "/Contact" },
  { name: "About", link: "/About" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-8 md:flex md:items-center md:justify-between lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <span className="font-montserratAlt text-xl font-bold uppercase">
              Couturio
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <IoClose className="size-6" />
              ) : (
                <IoMenu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu & Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out dark:bg-gray-800 md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100 ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col md:mx-6 md:flex-row">
            {MENU_LINKS.map(({ name, link }) => (
              <Link
                key={name}
                className="my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                to={link}
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="flex justify-center md:block">
            <div className="relative transform text-gray-700 transition-colors duration-300 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-300">
              <IoCartOutline className="size-8" />
              <span className="absolute left-0 top-0 flex size-4 items-center justify-center rounded-full bg-blue-500 p-1 text-xs text-white">
                9
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;