import React, { Component } from 'react';

import Header from './Header/header';
import Footer from './footer/footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
