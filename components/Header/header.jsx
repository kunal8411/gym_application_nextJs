import React from "react";
import classes from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
import { get } from "lodash";
import { useEffect } from "react";
const Header = () => {
  // const [headerIndex, setheaderIndex] = useState(
  //   typeof window !== "undefined" && localStorage.getItem("headerIndex")
  //     ? localStorage.getItem("headerIndex")
  //     : 0
  // );
  const [headerIndex, setheaderIndex] = useState(0);
  const setHeaderIndexInLocalStorage = (index) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("headerTileIndex", index);
    }
    setheaderIndex(index);
  };

  useEffect(() => {
    async function init() {
      console.log("init called", localStorage.getItem("headerTileIndex"));
      if (typeof window !== "undefined") {
        const headerIndex = localStorage.getItem("headerTileIndex");
        setheaderIndex(parseInt(headerIndex));
      }
      // setCart(JSON.parse(headerIndex));
    }
    init();
  });
  console.log("vsdfvgsdfgsdgdfgdfgds", typeof headerIndex);
  return (
    <header className="header-section">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="nav-menu">
          <nav className="mainmenu mobile-menu">
            <ul>
              <li className={headerIndex === 0 ? "active" : ""}>
                <div onClick={() => setHeaderIndexInLocalStorage(0)}>
                  <Link href="/">Home</Link>
                </div>
              </li>
              <li className={headerIndex === 1 ? "active" : ""}>
                <div onClick={() => setHeaderIndexInLocalStorage(1)}>
                  <Link href="/about">About</Link>
                </div>
              </li>
              <li className={headerIndex === 2 ? "active" : ""}>
                <div onClick={() => setHeaderIndexInLocalStorage(2)}>
                  <Link href="/classes">Classes</Link>
                </div>
              </li>
              <li className={headerIndex === 3 ? "active" : ""}>
                <div onClick={() => setHeaderIndexInLocalStorage(3)}>
                  <Link href="/blog">Blog</Link>
                </div>
              </li>
              <li className={headerIndex === 4 ? "active" : ""}>
                <div onClick={() => setHeaderIndexInLocalStorage(4)}>
                  <Link href="/gallery">Gallery</Link>
                </div>
              </li>
              <li className={headerIndex === 5 ? "active" : ""}>
                <div onClick={() => setHeaderIndexInLocalStorage(5)}>
                  <Link href="/contact">Contacts</Link>
                </div>
              </li>
            </ul>
          </nav>
          <a href="#" className="primary-btn signup-btn">
            Sign Up Today
          </a>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};

export default Header;
