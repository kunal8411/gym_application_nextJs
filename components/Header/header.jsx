import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [headerIndex, setHeaderIndex] = useState(0);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const setHeaderIndexInLocalStorage = (index) => {
    localStorage.setItem("headerTileIndex", index);
    setHeaderIndex(index);
  };

  const redirectToLoginPage = () => router.push("/login");

  const removeUserFromLS = () => {
    localStorage.removeItem("currentLoggedInUser");
    setCurrentLoggedInUser(null);
    router.push("/");
    setIsOpen(false);
  };

  const redirectToOtherPage = (route, index) => {
    router.push(route);
    setHeaderIndexInLocalStorage(index);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const headerTileIndex = localStorage.getItem("headerTileIndex");
    const loggedInUser = localStorage.getItem("currentLoggedInUser");
    if (headerTileIndex) setHeaderIndex(parseInt(headerTileIndex));
    if (loggedInUser) setCurrentLoggedInUser(JSON.parse(loggedInUser));
  }, []);

  return (
    <header className="shadow-md header-section">
      <div className="container flex items-center justify-between px-6 py-2 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <img src="/gym-logo2.png" alt="Gym Logo" className="w-16 h-8 cursor-pointer" />
            <span className="text-xl font-bold text-white">Pulse Fit</span>
          </div>
        </Link>
        <button
          className="text-gray-800 lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="text-2xl">&#9776;</span>
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-8 items-center`}
        >
          <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-700 lg:flex-row lg:space-y-0 lg:space-x-6">
            {["Home", "About", "Classes", "Blog", "Gallery", "Contacts"].map((item, index) => (
              <li
                key={index}
                className={`nav-item cursor-pointer ${
                  headerIndex === index
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-blue-500"
                }`}
                onClick={() => redirectToOtherPage(`/${item.toLowerCase()}`, index)}
              >
                {item}
              </li>
            ))}
            <li className="cursor-pointer nav-item">
              {currentLoggedInUser ? (
                <span onClick={removeUserFromLS} className="hover:text-blue-500">
                  Logout
                </span>
              ) : (
                <span onClick={redirectToLoginPage} className="hover:text-blue-500">
                  Admin Login
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
