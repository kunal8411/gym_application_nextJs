import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/heroSection/hero";
import Programs from "../components/programs/programs";
import Resources from "../components/resources/resources";
import Plans from "../components/plans/plans";
import Testimonials from "../components/testimonials/testimonials";
import Join from "../components/join/join";
import Footer from "../components/footer/footer";
import Header from "../components/Header/header";
import { useState } from "react";

export default function Home() {
  // const [headerIndex, setHeaderIndex] = useState(0);
  return (
    <div>
      <Hero />
    </div>
  );
}
