import React from "react";
import Header from "../../components/Header/header";
import Link from "next/link";

function index() {
  return (
    <div>
      {/* <!-- Header Section Begin --> */}

      {/* <!-- Header End --> */}
      {/* <Header /> */}
      {/* <!-- Breadcrumb Section Begin --> */}
      <section
        class="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb/classes-breadcrumb.jpg"
        style={{
          "background-image": "url(/breadcrumb/classes-breadcrumb.jpg)",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-text">
                <h2>About Us</h2>
                {/* <div class="breadcrumb-option">
                  <Link href="./index.html">
                    <i class="fa fa-home"></i> 
                  </Link>
                  <span>About Us</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- About Section Begin --> */}
      <section class="about-section about-page spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-pic">
                <img src="/about-pic.jpg" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=SlPhMPnQ58k"
                  class="play-btn video-popup"
                >
                  <img src="/play.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-text">
                <h2>Story About Us</h2>
                <p class="first-para">
                  Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                  Aenean pretium sollicitudin, nascetur auci elit consequat
                  ipsutissem niuis sed odio sit amet nibh vulputate cursus a
                  amet.
                </p>
                <p class="second-para">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, gravida quam semper libero sit amet.
                </p>
                <img src="/about-signature.png" alt="" />
                <div class="at-author">
                  <h4>Lettie Chavez</h4>
                  <span>CEO - Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Section End --> */}

      {/* <!-- About Counter Section Begin --> */}
      <div class="about-counter">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="about-counter-text">
                <div class="single-counter">
                  <h1 class="counter-num count">98</h1>
                  <p>Programs</p>
                </div>
                <div class="single-counter">
                  <h1 class="counter-num count">14</h1>
                  <p>Locations</p>
                </div>
                <div class="single-counter">
                  <h1 class="counter-num count">50</h1>
                  <span>k+</span>
                  <p>Members</p>
                </div>
                <div class="single-counter">
                  <h1 class="counter-num count">34</h1>
                  <p>Coaches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Counter Section End --> */}

      {/* <!-- Gym Award Section Begin --> */}
      <section class="gym-award spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="award-text">
                <h2>Best gym award</h2>
                <p>
                  Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                  Aenean pretium sollicitudin, nascetur auci elit consequat
                  ipsutissem niuis sed odio sit amet nibh vulputate cursus a
                  amet.
                </p>
                <p>
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, gravida quam semper libero sit amet. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
                  semper libero sit amet.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <img src="/award.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Gym Award Section End --> */}

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
                <h2>Get training today</h2>
                <p>
                  Gimply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard.
                </p>
                <a href="#" class="primary-btn banner-btn">
                  Contact Now
                </a>
              </div>
            </div>
            <div class="col-lg-5">
              <img src="/banner-person.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section End --> */}

      {/* <!-- Trainer Section Begin --> */}
      <section class="trainer-section about-trainer spad">
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
                <img src="/trainer/about-trainer-1.jpg" alt="" />
                <div class="trainer-text">
                  <h5>Patrick Cortez</h5>
                  <span>Leader</span>
                  <p>
                    non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
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
                <img src="/trainer/about-trainer-2.jpg" alt="" />
                <div class="trainer-text">
                  <h5>Gregory Powers</h5>
                  <span>Gym coach</span>
                  <p>
                    non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
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
                <img src="/trainer/about-trainer-3.jpg" alt="" />
                <div class="trainer-text">
                  <h5>Walter Wagner</h5>
                  <span>Dance trainer</span>
                  <p>
                    non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
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

      {/* <!-- Footer Banner Section Begin --> */}
      <section class="footer-banner">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="footer-banner-item set-bg"
                data-setbg="img/footer-banner/footer-banner-1.jpg"
                style={{ "background-image": "url(/footer-banner/footer-banner-1.jpg)" }}
              >
                <span>New member</span>
                <h2>7 days for free</h2>
                <p>
                  Complete the training sessions with us, surely you will be
                  happy
                </p>
                <a href="#" class="primary-btn">
                  Get Started
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="footer-banner-item set-bg"
                data-setbg="img/footer-banner/footer-banner-2.jpg"
                style={{ "background-image": "url(/footer-banner/footer-banner-2.jpg)" }}
              >
                <span>contact us</span>
                <h2>09 746 204</h2>
                <p>
                  If you trust us on your journey they dark sex does not
                  disappoint you!
                </p>
                <a href="#" class="primary-btn">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer Banner Section End --> */}

      {/* <!-- Footer Section Begin --> */}
      
      {/* <!-- Footer Section End --> */}

      {/* <!-- Js Plugins --> */}
    </div>
  );
}

export default index;
