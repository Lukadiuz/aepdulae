import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
interface HeaderProps {
  darkMode: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleSidebar,
  toggleDarkMode,
}) => {
  return (
    <nav className="transition-all-elements fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-5 rtl:justify-end">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <img
              src="https://www.aepdulae.com/images/logo.jpg"
              className="w-14"
              alt="Logo"
            />
            {/* <a href="#" className="flex ms-2 md:me-24">
              <FaDev className="h-8 me-3 text-2xl text-amber-400" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                {`</>`}
              </span>
            </a> */}
          </div>
          <button
            onClick={toggleDarkMode}
            className="bg-neutral-200 dark:text-slate-700 rounded-full p-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
