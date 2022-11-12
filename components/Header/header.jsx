import React from "react";
import classes from "./header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <header class="header-section">
      <div class="container">
        <div class="logo">
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div class="nav-menu">
          <nav class="mainmenu mobile-menu">
            <ul>
              <li class="active">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/classes">Classes</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contacts</Link>
              </li>
            </ul>
          </nav>
          <a href="#" class="primary-btn signup-btn">
            Sign Up Today
          </a>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};

export default Header;
