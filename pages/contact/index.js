import React from "react";

function index() {
  return (
    <div>
      {/* <!-- Page Preloder --> */}
      {/* <div id="preloder">
        <div class="loader"></div>
    </div> */}

      {/* <!-- Breadcrumb Section Begin --> */}
      <section
        class="breadcrumb-section set-bg"
        data-setbg="/breadcrumb/classes-breadcrumb.jpg"
        style={{
          "background-image": "url(/breadcrumb/classes-breadcrumb.jpg)",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-text">
                <h2>Contact US</h2>
                <h3>WE WOULD LOVE TO HEAR FROM YOU</h3>
                {/* <div class="breadcrumb-option">
                  <a href="./index.html">
                    <i class="fa fa-home"></i> Home
                  </a>
                  <span>Contact</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      

      {/* <!-- Contact Section Begin --> */}
      <section class="contact-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="contact-info">
                <h4>Contacts Us</h4>
                <div class="contact-address">
                  <div class="ca-widget">
                    <div class="cw-icon">
                      <img src="/icon/icon-1.png" alt="" />
                    </div>
                    <div class="cw-text">
                      <h5>Our Location</h5>
                      <p>60-49 Road 11378 New York</p>
                    </div>
                  </div>
                  <div class="ca-widget">
                    <div class="cw-icon">
                      <img src="/icon/icon-2.png" alt="" />
                    </div>
                    <div class="cw-text">
                      <h5>Phone:</h5>
                      <p>+65 11.188.888</p>
                    </div>
                  </div>
                  <div class="ca-widget">
                    <div class="cw-icon">
                      <img src="/icon/icon-3.png" alt="" />
                    </div>
                    <div class="cw-text">
                      <h5>Mail</h5>
                      <p>hellocolorlib@ gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="contact-form">
                <h4>Leave A Comment</h4>
                <form action="#">
                  <div class="row">
                    <div class="col-lg-6">
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div class="col-lg-6">
                      <input type="text" placeholder="Your email" />
                    </div>
                    <div class="col-lg-12">
                      <textarea placeholder="Your messages"></textarea>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section End --> */}

      {/* <!-- Map Section Begin --> */}
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24112.92132811736!2d-74.20651812810036!3d40.93514309648714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fda38587e887%3A0xf03207815e338a0d!2sHaledon%2C%20NJ%2007508%2C%20USA!5e0!3m2!1sen!2sbd!4v1578120776078!5m2!1sen!2sbd"
          height="612"
          
          allowfullscreen=""
        ></iframe>
        {/* <img src="/icon/location.png" alt="" /> */}
      </div>
      {/* <!-- Map Section End --> */}
    </div>
  );
}

export default index;
