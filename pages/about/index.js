import React from "react";

import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-section about-page spad">
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
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section class="gym-award spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="award-text">
                <h2>Best gym award</h2>
                <p>
                  We are very proud to be voted Gym of the Year 2018 at the
                  biggest fitness industry awards in Asia.Absolute Fitness won
                  against some of the biggest names in fitness from across Asia,
                  beating competition from studios and gyms from South Korea,
                  Hong Kong, Singapore and Malaysia.
                </p>
                <p>
                  For Absolute Fitness, being awarded Asia’s Gym of the Year is
                  just the beginning. With big expansion plans on the horizon
                  these are exciting times for the growing fitness brand.At the
                  Fitness Best awards ceremony, the biggest of its kind in
                  Asia’s fitness industry, prizes spanned the whole industry
                  including Asia’s Personal Trainer of the Year, Yoga Studio of
                  the Year and Specialized Gym of the Year.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <img src="/award.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

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
                  Stop waiting to get in shape! I will help you sculpt the body
                  that fits your lifestyle and I will help you maintain it
                  through all aspects of life. Why give up the things you love
                  to do? I will walk you through every step of transforming your
                  body from nutrition to exercise all the way down to your
                  molecular structure.
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
                <img src="/trainer/about-trainer-2.jpg" alt="" />
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
                <img src="/trainer/about-trainer-3.jpg" alt="" />
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

      <section class="footer-banner">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="footer-banner-item set-bg"
                data-setbg="img/footer-banner/footer-banner-1.jpg"
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
            <div class="col-lg-6">
              <div
                class="footer-banner-item set-bg"
                data-setbg="img/footer-banner/footer-banner-2.jpg"
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

export default Index;
