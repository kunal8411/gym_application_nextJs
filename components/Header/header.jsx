import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const [headerIndex, setheaderIndex] = useState(0);
  const [currnetLoggedInUser, setCurrentLoggedInUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const setHeaderIndexInLocalStorage = (index) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("headerTileIndex", index);
    }
    setheaderIndex(index);
  };
  const redirectToLoginPage = async () => {
    await router.push("/login");
  };
  const removeUserFromLS = async () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("currentLoggedInUser");
      setCurrentLoggedInUser({});
      await router.push("/");
      setIsOpen(false);
    }
  };
  const handleLinkClick = () => {
    setIsOpen(!isOpen);
  };
  const redirectToOtherPage = async (route) => {
    await router.push(route);
    await setIsOpen(false);
  };
  useEffect(() => {
    async function init() {
      if (typeof window !== "undefined") {
        const headerIndex = localStorage.getItem("headerTileIndex");
        setheaderIndex(parseInt(headerIndex));
        if (
          currnetLoggedInUser !== undefined &&
          currnetLoggedInUser !== null &&
          Object.keys(currnetLoggedInUser).length === 0
        ) {
          const currentLoggedInUser = localStorage.getItem(
            "currentLoggedInUser"
          );
          setCurrentLoggedInUser(JSON.parse(currentLoggedInUser));
        }
      }
    }
    init();
  });

  return (
    <header className="header-section">
      <div className="container">
        <div className="logo" style={{ marginTop: "10px" }}>
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="nav-menu">
          <nav
            class="navbar navbar-expand-lg "
            // style={{ "background-image": "url(/hero-bg.jpg)" }}
          >
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                {/* Navbar  */}
              </a>
              <button
                // class="navbar-toggler"
                className={
                  isOpen ? "navbar-toggler collapseddddd" : "navbar-toggler"
                }
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                // aria-expanded="false"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                onClick={handleLinkClick}
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse "
                className={
                  isOpen
                    ? "navbar-collapse collapse show"
                    : "navbar-collapse collapse"
                }
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 margin-left-for-each-list">
                  <li
                    className={
                      headerIndex === 0 ? "active nav-item" : "nav-item"
                    }
                  >
                    <div onClick={() => setHeaderIndexInLocalStorage(0)}>
                      <a className="link-header" onClick={() => redirectToOtherPage("/")}>
                        Home
                      </a>
                    </div>
                  </li>

                  <li
                    className={
                      headerIndex === 1 ? "active nav-item" : " nav-item"
                    }
                  >
                    <div onClick={() => setHeaderIndexInLocalStorage(1)}>
                      <a
                        className=" link-header"
                        onClick={() => redirectToOtherPage("/about")}
                      >
                        About
                      </a>
                    </div>
                  </li>

                  {/* //start  */}

                  <li
                    className={
                      headerIndex === 2 ? "active nav-item" : " nav-item"
                    }
                  >
                    <div onClick={() => setHeaderIndexInLocalStorage(2)}>
                      <a
                        className="link-header"
                        onClick={() => redirectToOtherPage("/classes")}
                      >
                        Classes
                      </a>
                    </div>
                  </li>
                  <li
                    className={
                      headerIndex === 3 ? "active nav-item" : "nav-item"
                    }
                  >
                    <div onClick={() => setHeaderIndexInLocalStorage(3)}>
                      <a
                        className=" link-header"
                        onClick={() => redirectToOtherPage("/blog")}
                      >
                        Blog
                      </a>
                    </div>
                  </li>
                  <li
                    className={
                      headerIndex === 4 ? "active nav-item" : " nav-item"
                    }
                  >
                    <div onClick={() => setHeaderIndexInLocalStorage(4)}>
                      <a
                        className="link-header"
                        onClick={() => redirectToOtherPage("/gallery")}
                      >
                        Gallery
                      </a>
                    </div>
                  </li>
                  <li
                    className={
                      headerIndex === 5 ? "active nav-item" : " nav-item"
                    }
                  >
                    <div onClick={() => setHeaderIndexInLocalStorage(5)}>
                      <a
                        className="link-header"
                        onClick={() => redirectToOtherPage("/contact")}
                      >
                        Contacts
                      </a>
                    </div>
                  </li>

                  <li className="nav-item">
                    {currnetLoggedInUser !== undefined &&
                    currnetLoggedInUser !== null &&
                    Object.keys(currnetLoggedInUser).length > 0 ? (
                      <a className="cursor-pointer" onClick={removeUserFromLS}>
                        Logout
                      </a>
                    ) : (
                      <a
                        className=" cursor-pointer"
                        onClick={redirectToLoginPage}
                      >
                        Admin Login
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};
export default Header;

{
  /* <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li> */
}
