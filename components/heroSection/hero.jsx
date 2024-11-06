import React, { useEffect, useState } from "react";
import classes from "./hero.module.css";
import Header from "../Header/header";
import Footer from "../footer/footer";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useRequest from "../../hooks/use-request";


import NewREgistrationsSection from "../newREgistrationsSection";
const HeroSection = () => {
  const [membershipDetails, setMembershipDetails] = useState([]);
  useEffect(() => {
    fetchMembershipPlans();
  }, []);

  //get all membership Plans
  const { doRequest: fetchMembershipPlans, errors: fetchMembershipErrors } =
    useRequest({
      url: "/api/membership-plan",
      method: "get",
      body: {},
      onSuccess: (data) => {
        console.log("DATA IS", data);
        if (data?.success) {
          setMembershipDetails(data?.message);
        }
      },
      onError: (err) => {
        console.log("Error while fetching the mebership details : ", err);
        toast.error(`${err?.response?.data?.message}`, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      },
    });
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
      <section
        className="hero-section set-bg"
        style={{ "background-image": "url(/hero-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-text">
                <span className="">
                  <h3 style={{ color: "lightblue" }}>FITNESS ELEMENTS</h3>
                </span>
                <span>
                  <h1 style={{ color: "gold" }}>ABSOLUTE FITNESS</h1>
                </span>
                <p>
                  <span className="fs-2 fw-bold text-info"> BUILD</span>
                  <span className="fs-1 text">YOUR BODY</span>
                  <br /> <span className="fs-2 text text-info">
                    TRANSFORM
                  </span>{" "}
                  <span className="fs-2 text">YOUR LIFE</span>
                </p>
                <button
                  type="submit"
                  className="primary-btn"
                  onClick={joinNowScroll}
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-pic">
                <img src="/about-pic.jpg" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=xMIKdpgxGQ4&feature=youtu.be"
                  className="play-btn video-popup"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/play.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text">
                <h2>
                  WHATEVER YOUR GOALS <span>WE ARE HERE TO HELP</span>
                </h2>
                <p className="first-para">
                  <span>
                    Absolute Fitness provides a 24/7 Fitness facility to help
                    people reach and maintain their goals. Our Staff, Trainers &
                    Group exercise instructors are committed to offering our
                    members a great fitness experience
                  </span>
                </p>
                <p className="second-para">
                  At Absolute Fitness you’ll find all the latest strength and
                  cardio equipment along with a energetic group exercise program
                  that includes POUND, Zumba, Kickboxing, Bootcamp, Muscle
                  Building and many other cardio classes. You’ll find a
                  supportive environment with all kinds of people who are
                  working just as hard as you to meet their goals.
                </p>
                <a href="#" className="primary-btn">
                  <button type="submit" onClick={redirectToAboutSection}>
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="classes-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>OUR CLASSES</h2>
              </div>
            </div>
          </div>
          <div className="row classes-slider owl-carousel">
            <div className="col-lg-4">
              <div
                className="single-class-item set-bg"
                style={{ "background-image": "url(/classes-1.jpg)" }}
              >
                <div className="si-text">
                  <h4>Yoga</h4>
                  <span>
                    <i className="fa fa-user"></i> Ryan Knight
                  </span>
                </div>
              </div>
              <div
                className="single-class-item set-bg"
                style={{ "background-image": "url(/classes-4.jpg)" }}
              >
                <div className="si-text">
                  <h4>Karate</h4>
                  <span>
                    <i className="fa fa-user"></i> Kevin McCormick
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="single-class-item set-bg"
                style={{ "background-image": "url(/classes-2.jpg)" }}
              >
                <div className="si-text">
                  <h4>Running</h4>
                  <span>
                    <i className="fa fa-user"></i> Randy Rivera
                  </span>
                </div>
              </div>
              <div
                className="single-class-item set-bg"
                style={{ "background-image": "url(/classes-5.jpg)" }}
              >
                <div className="si-text">
                  <h4>Dance</h4>
                  <span>
                    <i className="fa fa-user"></i> Russell Lane
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="single-class-item set-bg"
                style={{ "background-image": "url(/classes-7.jpg)" }}
              >
                <div className="si-text">
                  <h4>Personal Training</h4>
                  <span>
                    <i className="fa fa-user"></i> Cole Robertson
                  </span>
                </div>
              </div>
              <div
                className="single-class-item set-bg"
                style={{ "background-image": "url(/classes-8.jpg)" }}
              >
                <div className="si-text">
                  <h4>Weight Loss</h4>
                  <span>
                    <i className="fa fa-user"></i> Ryan Scott
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trainer-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>EXPERT TRAINERS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-trainer-item">
                <img src="/trainer-1.jpg" alt="" />
                <div className="trainer-text">
                  <h5>Patrick Cortez</h5>
                  <span>Leader</span>
                  <p>
                    Mr. Patrick Cortez is one of the best certified personal
                    trainer and nutrition consultant as well as a dietitian. He
                    has an 8 years experience in the field of nutrition and
                    fitness industry.
                  </p>
                  <div className="trainer-social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-trainer-item">
                <img src="/trainer-2.jpg" alt="" />
                <div className="trainer-text">
                  <h5>Gregory Powers</h5>
                  <span>Gym coach</span>
                  <p>
                    Based in UK, Gregory Personal Training helps to connect
                    people who are looking for some help with their health and
                    fitness with the perfect local trainers for them.
                  </p>
                  <div className="trainer-social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-trainer-item">
                <img src="/trainer-3.jpg" alt="" />
                <div className="trainer-text">
                  <h5>Walter Wagner</h5>
                  <span>Dance trainer</span>
                  <p>
                    Walter Wagner is based at Coastal Fitness in Hong Kong. She
                    is a health and performance specialist with a background in
                    competitive volleyball.
                  </p>
                  <div className="trainer-social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>success stories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="testimonial-slider owl-carousel">
                <div className="testimonial-item">
                  <p>
                    started a week and a half ago and so far its been brilliant.
                    The PT trainers are all so friendly and encouraging and
                    genuinely care about getting you to where you want to be.{" "}
                  </p>
                  <div className="ti-pic">
                    <img src="/testimonial/testimonial-1.jpg" alt="" />
                    <div className="quote">
                      <img src="/testimonial/quote-left.png" alt="" />
                    </div>
                  </div>
                  <div className="ti-author">
                    <h4>David Smith</h4>
                    <span>Leader</span>
                  </div>
                </div>
                <div className="testimonial-item">
                  <p>
                    From the moment you step foot through the door, everything
                    is bespoke based on your goals, I have without a doubt seen
                    massive improvements in myself.{" "}
                  </p>
                  <div className="ti-pic">
                    <img src="/testimonial/anthony.jpg" alt="" />
                    <div className="quote">
                      <img src="/testimonial/quote-left.png" alt="" />
                    </div>
                  </div>
                  <div className="ti-author">
                    <h4>Patrick Cortez</h4>
                    <span>Leader</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="banner-section set-bg"
        data-setbg="img/banner-bg.jpg"
        style={{ "background-image": "url(/banner-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text">
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

                <button
                  type="submit"
                  className="primary-btn banner-btn"
                  onClick={redirectToContactSection}
                >
                  Contact Now
                </button>
              </div>
            </div>
            <div className="col-lg-5">
              <img src="/banner-person.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="membership-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>MEMBERSHIP PLANS</h2>
              </div>
            </div>
          </div>
          <div className="row">
              {membershipDetails.length > 0 &&
                membershipDetails.map((membership) => (
                  <div className="col-lg-4" key={membership?._id}>
                    <div className="membership-item">
                      <div className="mi-title">
                        <h4>{membership?.type_of_membership}</h4>
                        <div className="triangle"></div>
                      </div>
                      <h2 className="mi-price">&#8377; {membership?.amount}</h2>
                      <ul>
                        <li>
                          <p>Duration</p>
                          <span>{membership?.tenure}</span>
                        </li>
                        <li>
                          <p>Personal Trainer</p>
                          <span>
                            {membership?.personal_trainer ? "Yes" : "No"}
                          </span>
                        </li>
                        <li>
                          <p>Amount of people</p>
                          <span>{membership?.no_of_people} person</span>
                        </li>
                        <li>
                          <p>Number of visits</p>
                          <span>{membership?.no_of_visits}/Day</span>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleEditMembershipModal(membership, true)
                            }
                          >
                            EDIT
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
             
            </div>
        </div>
      </section>

      <NewREgistrationsSection />

      <section className="latest-blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Latest Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-item">
                <img src="/blog/blog-1.jpg" alt="" />
                <div className="blog-widget">
                  <div className="bw-date">February 17, 2019</div>
                  <a href="#" className="tag">
                    #Gym
                  </a>
                </div>
                <h4>
                  <a href="#">10 States At Risk of Rural Hospital Closures</a>
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-item">
                <img src="/blog/blog-2.jpg" alt="" />
                <div className="blog-widget">
                  <div className="bw-date">February 17, 2019</div>
                  <a href="#" className="tag">
                    #Sport
                  </a>
                </div>
                <h4>
                  <a href="#">Diver who helped save Thai soccer team</a>
                </h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-item">
                <img src="/blog/blog-3.jpg" alt="" />
                <div className="blog-widget">
                  <div className="bw-date">February 17, 2019</div>
                  <a href="#" className="tag">
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

      <section className="footer-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="footer-banner-item set-bg"
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
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="footer-banner-item set-bg"
                style={{
                  "background-image": "url(/footer-banner/footer-banner-2.jpg)",
                }}
              >
                <span>contact us</span>
                <h2>09 746 204</h2>
                <p>We would love to hear from you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

// 22.52
