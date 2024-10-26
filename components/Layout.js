import React, { Component } from "react";

import Header from "./Header/header";
import Footer from "./footer/footer";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Layout({ children, currentUser }) {
  const protectedRoutes = ["/dashboard"];
  const router = useRouter();
  // this are protected routes
  // user can access them only if user is logged in
  if (
    protectedRoutes.some((route) => router.pathname.includes(route)) &&
    !currentUser
  ) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="p-8 text-center bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800">
            Access Denied
          </h1>
          <p className="mt-4 text-gray-600">
            You must be logged in to access this page.
          </p>
          <Link href="/login">
            <button className="px-6 py-3 mt-6 font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Go to Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
  if (router.pathname.includes("/dashboard")) {
    return (
      <>
        <main>{children}</main>
      </>
    );
  } else if (router.pathname.includes("/login")) {
    return (
      <>
        <Header currentUser={currentUser} />
        <main>{children}</main>
      </>
    );
  } else {
    return (
      <>
        <Header currentUser={currentUser} />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}
