import React, { Component } from "react";

import Header from "./Header/header";
import Footer from "./footer/footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  if (router.pathname.includes("/admin")) {
    return (
      <>
        <main>{children}</main>
      </>
    );
  } else if (router.pathname.includes("/login")) {
    return (
      <>
        <Header />
        <main>{children}</main>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}
