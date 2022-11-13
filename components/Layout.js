import React, { Component } from "react";

import Header from "./Header/header";
import Footer from "./footer/footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  console.log("router", router.pathname);
  if (router.pathname.includes("/admin")) {
    return (
      <>
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
