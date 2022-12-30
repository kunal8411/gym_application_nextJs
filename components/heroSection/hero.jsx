import React from "react";
import classes from "./hero.module.css";
import Header from "../Header/header";
import Footer from "../footer/footer";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import NewREgistrationsSection from "../newREgistrationsSection";
const HeroSection = () => {
  const router = useRouter();
  const transition = { type: "spring", duration: 3 };
  const joinNowScroll = () => {
    var elmntToView = document.getElementById("register_section");
    elmntToView.scrollIntoView();
  };

  const redirectToAboutSection = async () => {
    await setHeaderIndex(1);
    await router.push("/about");
  };
  const redirectToContactSection = async () => {
    await setHeaderIndex(5);
    await router.push("/contact");
  };
  const setHeaderIndex = async (index) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("headerTileIndex", index);
    }
  };
  return (
    <div>
      {/* <!-- Header Section Begin --> */}
      {/* <Header /> */}
      {/* <!-- Header End --> */}

      {/* <!-- Hero Section Begin --> */}
      <section
        class="hero-section set-bg"
        style={{ "background-image": "url(/hero-bg.jpg)" }}
      >
        {/* <img cl src='/hero-bg.jpg'/> */}
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="hero-text">
                <span className="">
                  <h3 style={{ color: "lightblue" }}>FITNESS ELEMENTS</h3>
                </span>
                <span>
                  <h1 style={{ color: "cyan" }}>ABSOLUTE FITNESS</h1>
                </span>
                <p>
                  <span className="fs-2 fw-bold text-success"> BUILD</span>
                  <span className="fs-1 text">YOUR BODY</span>
                  <br /> <span className="fs-2 text text-info">
                    TRANSFORM
                  </span>{" "}
                  <span className="fs-2 text">YOUR LIFE</span>
                </p>
                {/* <a href="" class="primary-btn"> */}
                <button
                  type="submit"
                  class="primary-btn"
                  onClick={joinNowScroll}
                >
                  JOIN NOW
                </button>

                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}

      {/* *<!-- About Section Begin --> */}
      <section class="about-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-pic">
                <img src="/about-pic.jpg" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=xMIKdpgxGQ4&feature=youtu.be"
                  class="play-btn video-popup"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/play.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-text">
                <h2>
                  WHATEVER YOUR GOALS <span>WE ARE HERE TO HELP</span>
                </h2>
                <p class="first-para">
                  <span>
                    Absolute Fitness provides a 24/7 Fitness facility to help
                    people reach and maintain their goals. Our Staff, Trainers &
                    Group exercise instructors are committed to offering our
                    members a great fitness experience
                  </span>
                </p>
                <p class="second-para">
                  At Absolute Fitness you’ll find all the latest strength and
                  cardio equipment along with a energetic group exercise program
                  that includes POUND, Zumba, Kickboxing, Bootcamp, Muscle
                  Building and many other cardio classes. You’ll find a
                  supportive environment with all kinds of people who are
                  working just as hard as you to meet their goals.
                </p>
                <a href="#" class="primary-btn">
                  <button type="submit" onClick={redirectToAboutSection}>
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Section End --> */}

      {/* <!-- Services Section Begin -->  */}
      {/* <section class="services-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div class="services-pic">
                <img src="/service-pic.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="service-items">
                <div class="row">
                  <div class="col-md-6">
                    <div class="services-item bg-gray">
                      <img src="/service-icon-1.png" alt="" />
                      <h4>Strategies</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                    <div class="services-item bg-gray pd-b">
                      <img src="/service-icon-3.png" alt="" />
                      <h4>Workout</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="services-item">
                      <img src="/service-icon-2.png" alt="" />
                      <h4>Yoga</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                    <div class="services-item pd-b">
                      <img src="/service-icon-4.png" alt="" />
                      <h4>Weight Loss</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Services Section End --> */}

      {/* <!-- Classes Section Begin --> */}
      <section class="classes-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>OUR CLASSES</h2>
              </div>
            </div>
          </div>
          <div class="row classes-slider owl-carousel">
            <div class="col-lg-4">
              <div
                class="single-class-item set-bg"
                style={{ "background-image": "url(/classes-1.jpg)" }}
                // data-setbg="img/classes/classes-1.jpg"
              >
                <div class="si-text">
                  <h4>Yoga</h4>
                  <span>
                    <i class="fa fa-user"></i> Ryan Knight
                  </span>
                </div>
              </div>
              <div
                class="single-class-item set-bg"
                // data-setbg="img/classes/classes-4.jpg"
                style={{ "background-image": "url(/classes-4.jpg)" }}
              >
                <div class="si-text">
                  <h4>Karate</h4>
                  <span>
                    <i class="fa fa-user"></i> Kevin McCormick
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div
                class="single-class-item set-bg"
                // data-setbg="img/classes/classes-2.jpg"
                style={{ "background-image": "url(/classes-2.jpg)" }}
              >
                <div class="si-text">
                  <h4>Running</h4>
                  <span>
                    <i class="fa fa-user"></i> Randy Rivera
                  </span>
                </div>
              </div>
              <div
                class="single-class-item set-bg"
                // data-setbg="img/classes/classes-5.jpg"
                style={{ "background-image": "url(/classes-5.jpg)" }}
              >
                <div class="si-text">
                  <h4>Dance</h4>
                  <span>
                    <i class="fa fa-user"></i> Russell Lane
                  </span>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-4">
              <div
                class="single-class-item set-bg"
                style={{ "background-image": "url(/classes-3.jpg)" }}
              >
                <div class="si-text">
                  <h4>Personal Training</h4>
                  <span>
                    <i class="fa fa-user"></i> Cole Robertson
                  </span>
                </div>
              </div>
              <div
                class="single-class-item set-bg"
                style={{ "background-image": "url(/classes-6.jpg)" }}
              >
                <div class="si-text">
                  <h4>Weight Loss</h4>
                  <span>
                    <i class="fa fa-user"></i> Ryan Scott
                  </span>
                </div>
              </div>
            </div> */}
            <div class="col-lg-4">
              <div
                class="single-class-item set-bg"
                // data-setbg="img/classes/classes-7.jpg"
                style={{ "background-image": "url(/classes-7.jpg)" }}
              >
                <div class="si-text">
                  <h4>Personal Training</h4>
                  <span>
                    <i class="fa fa-user"></i> Cole Robertson
                  </span>
                </div>
              </div>
              <div
                class="single-class-item set-bg"
                // data-setbg="img/classes/classes-8.jpg"
                style={{ "background-image": "url(/classes-8.jpg)" }}
              >
                <div class="si-text">
                  <h4>Weight Loss</h4>
                  <span>
                    <i class="fa fa-user"></i> Ryan Scott
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Classes Section End --> */}

      {/* <!-- Trainer Section Begin --> */}
      <section class="trainer-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>EXPERT TRAINERS</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-trainer-item">
                <img src="/trainer-1.jpg" alt="" />
                <div class="trainer-text">
                  <h5>Patrick Cortez</h5>
                  <span>Leader</span>
                  <p>
                    Mr. Patrick Cortez is one of the best certified personal
                    trainer and nutrition consultant as well as a dietitian. He
                    has an 8 years experience in the field of nutrition and
                    fitness industry.
                  </p>
                  <div class="trainer-social">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-trainer-item">
                <img src="/trainer-2.jpg" alt="" />
                <div class="trainer-text">
                  <h5>Gregory Powers</h5>
                  <span>Gym coach</span>
                  <p>
                    Based in UK, Gregory Personal Training helps to connect
                    people who are looking for some help with their health and
                    fitness with the perfect local trainers for them.
                  </p>
                  <div class="trainer-social">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-trainer-item">
                <img src="/trainer-3.jpg" alt="" />
                <div class="trainer-text">
                  <h5>Walter Wagner</h5>
                  <span>Dance trainer</span>
                  <p>
                    Walter Wagner is based at Coastal Fitness in Hong Kong. She
                    is a health and performance specialist with a background in
                    competitive volleyball.
                  </p>
                  <div class="trainer-social">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Trainer Section End --> */}

      {/* <!-- Testimonial Section Begin --> */}
      <section class="testimonial-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>success stories</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="testimonial-slider owl-carousel">
                <div class="testimonial-item">
                  <p>
                    started a week and a half ago and so far its been brilliant.
                    The PT trainers are all so friendly and encouraging and
                    genuinely care about getting you to where you want to be.{" "}
                  </p>
                  <div class="ti-pic">
                    <img src="/testimonial/testimonial-1.jpg" alt="" />
                    <div class="quote">
                      <img src="/testimonial/quote-left.png" alt="" />
                    </div>
                  </div>
                  <div class="ti-author">
                    <h4>David Smith</h4>
                    <span>Leader</span>
                  </div>
                </div>
                <div class="testimonial-item">
                  <p>
                    From the moment you step foot through the door, everything
                    is bespoke based on your goals, I have without a doubt seen
                    massive improvements in myself.{" "}
                  </p>
                  <div class="ti-pic">
                    <img src="/testimonial/anthony.jpg" alt="" />
                    <div class="quote">
                      <img src="/testimonial/quote-left.png" alt="" />
                    </div>
                  </div>
                  <div class="ti-author">
                    <h4>Patrick Cortez</h4>
                    <span>Leader</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial/ Section End --> */}

      {/* <!-- Banner Section Begin --> */}
      <section
        class="banner-section set-bg"
        data-setbg="img/banner-bg.jpg"
        style={{ "background-image": "url(/banner-bg.jpg)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="banner-text">
                <h2>EVERYBODY IS DIFFERENT. Get training today</h2>
                <p>
                  <span style={{ color: "cyan" }}>
                    Stop waiting to get in shape!
                  </span>
                  <br />I will help you sculpt the body that fits your lifestyle
                  and I will help you maintain it through all aspects of life.
                  Why give up the things you love to do? I will walk you through
                  every step of transforming your body from nutrition to
                  exercise all the way down to your molecular structure.
                </p>
                {/* <a href="#" class="primary-btn banner-btn">
                  Contact Now
                </a> */}
                <button
                  type="submit"
                  class="primary-btn banner-btn"
                  onClick={redirectToContactSection}
                >
                  Contact Now
                </button>
              </div>
            </div>
            <div class="col-lg-5">
              <img src="/banner-person.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section End --> */}

      {/* <!-- Membership Section Begin --> */}
      <section class="membership-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>MEMBERSHIP PLANS</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="membership-item">
                <div class="mi-title">
                  <h4>Basic</h4>
                  <div class="triangle"></div>
                </div>
                <h2 class="mi-price">&#8377; 1500</h2>
                <ul>
                  <li>
                    <p>Duration</p>
                    <span>1 months</span>
                  </li>
                  <li>
                    <p>Personal trainer</p>
                    <span>No</span>
                  </li>
                  <li>
                    <p>Amount of people</p>
                    <span>01 person</span>
                  </li>
                  <li>
                    <p>Number of visits</p>
                    <span>1/Day</span>
                  </li>
                </ul>
                {/* <button
                  type="submit"
                  class="primary-btn membership-btn"
                  onClick={joinNowScroll}
                >
                  START NOW
                </button> */}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="membership-item">
                <div class="mi-title">
                  <h4>Standard</h4>
                  <div class="triangle"></div>
                </div>
                <h2 class="mi-price">&#8377; 4000</h2>
                <ul>
                  <li>
                    <p>Duration</p>
                    <span>3 months</span>
                  </li>
                  <li>
                    <p>Personal trainer</p>
                    <span>No</span>
                  </li>
                  <li>
                    <p>Amount of people</p>
                    <span>01 person</span>
                  </li>
                  <li>
                    <p>Number of visits</p>
                    <span>2/Day</span>
                  </li>
                </ul>
                {/* <button
                  type="submit"
                  class="primary-btn membership-btn"
                  onClick={joinNowScroll}
                >
                  START NOW
                </button> */}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="membership-item">
                <div class="mi-title">
                  <h4>Premium</h4>
                  <div class="triangle"></div>
                </div>
                <h2 class="mi-price">&#8377; 12000</h2>
                <ul>
                  <li>
                    <p>Duration</p>
                    <span>12 months</span>
                  </li>
                  <li>
                    <p>Personal trainer</p>
                    <span>Yes</span>
                  </li>
                  <li>
                    <p>Amount of people</p>
                    <span>01 person</span>
                  </li>
                  <li>
                    <p>Number of visits</p>
                    <span>Unlimited</span>
                  </li>
                </ul>
                {/* <button
                  type="submit"
                  class="primary-btn membership-btn"
                  onClick={joinNowScroll}
                >
                  START NOW
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Membership Section End --> */}

      {/* <!-- Register Section Begin --> */}
      <NewREgistrationsSection />
      {/* <!-- Register Section End --> */}

      {/* <!-- Latest Blog Section Begin --> */}
      <section class="latest-blog-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Latest Blog</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-item">
                <img src="/blog/blog-1.jpg" alt="" />
                <div class="blog-widget">
                  <div class="bw-date">February 17, 2019</div>
                  <a href="#" class="tag">
                    #Gym
                  </a>
                </div>
                <h4>
                  <a href="#">10 States At Risk of Rural Hospital Closures</a>
                </h4>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-item">
                <img src="/blog/blog-2.jpg" alt="" />
                <div class="blog-widget">
                  <div class="bw-date">February 17, 2019</div>
                  <a href="#" class="tag">
                    #Sport
                  </a>
                </div>
                <h4>
                  <a href="#">Diver who helped save Thai soccer team</a>
                </h4>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-blog-item">
                <img src="/blog/blog-3.jpg" alt="" />
                <div class="blog-widget">
                  <div class="bw-date">February 17, 2019</div>
                  <a href="#" class="tag">
                    #Body
                  </a>
                </div>
                <h4>
                  <a href="#">Man gets life in prison for stabbing</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Latest Blog Section End --> */}

      {/* <!-- Footer Banner Section Begin --> */}
      <section class="footer-banner">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="footer-banner-item set-bg"
                // data-setbg="img/footer-banner/footer-banner-1.jpg"
                style={{
                  "background-image": "url(/footer-banner/footer-banner-1.jpg)",
                }}
              >
                <span>New member</span>
                <h2>7 days for free</h2>
                <p>
                  Complete the training sessions with us, surely you will be
                  happy
                </p>
                {/* <a href="#" class="primary-btn">
                  Get Started
                </a> */}
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="footer-banner-item set-bg"
                // data-setbg="img/footer-banner/footer-banner-2.jpg"
                style={{
                  "background-image": "url(/footer-banner/footer-banner-2.jpg)",
                }}
              >
                <span>contact us</span>
                <h2>09 746 204</h2>
                <p>We would love to hear from you.</p>
                {/* <a href="#" class="primary-btn">
                  Get Started
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer Banner Section End --> */}

      {/* <!-- Footer Section Begin --> */}
      {/* <Footer /> */}
      {/* <!-- Footer Section End --> */}
    </div>
  );
};

export default HeroSection;

// 22.52
