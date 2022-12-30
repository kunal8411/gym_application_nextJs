import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const setEmailAddress = (e) => {
    let errorMessage = validEmailRegex.test(e.target.value)
      ? ""
      : "Email is not valid!";
    setEmailError(errorMessage);
    setEmail(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.length > 0) {
      await axios
        .post("/api/mailing-list", {
          email: email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log("error is ,", error);
        });
      setEmail("");
      toast.success("Email subscribed successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Please enter correct email Id", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="contact-option">
              <span>Phone</span>
              <div>(123) 118 9999 - (123) 118 9999</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-option">
              <span>Address</span>
              <p>72 Kangnam, 45 Opal Point Suite 391</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-option">
              <span>Email</span>
              <p>absolutefitness@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          class="subscribe-option set-bg"
          data-setbg="img/footer-signup.jpg"
          style={{
            "background-image": "url(/footer-banner/footer-banner-2.jpg)",
          }}
        >
          <div class="so-text">
            <h4>Subscribe To Our Mailing List</h4>
            <p>Sign up to receive the latest information </p>
          </div>
          <form
            action="#"
            class="subscribe-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="text"
              id="emailList"
              onChange={setEmailAddress}
              noValidate
              name="emailList"
              value={email}
              placeholder="Enter Your Mail"
            />
            {emailError.length > 0 && (
              <span className="error">{emailError}</span>
            )}
            <button type="submit">
              <i class="fa fa-send"></i>
            </button>
          </form>
        </div>
        <div class="copyright-text">
          <ul>
            <li>
              <a href="#">Term&Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          All rights reserved | This template is made with{" "}
          <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
          <a href="https://colorlib.com">Our Team</a>
          <div class="footer-social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com/login"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/web_developer_freelancer__/saved/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
