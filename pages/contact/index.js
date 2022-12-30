import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Index() {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(function (val) {
      if (val && val.length > 0) {
        valid = false;
        return;
      }
    });
    return valid;
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let inputName,
      inputEmail,
      inputMessage = "";
    switch (name) {
      case "name":
        inputName =
          value.length < 3
            ? "First Name must be at least 3 characters long!"
            : "";
        setName(value);
        break;
      case "email":
        inputEmail = validEmailRegex.test(value) ? "" : "Email is not valid!";
        setEmail(value);
        break;
      case "message":
        inputMessage =
          message.length > 5 ? "" : "Message atleast 5 character long";
        setMessage(value);
        break;

      default:
        break;
    }
    setErrors({ name: inputName, email: inputEmail, message: inputMessage });

    // this.setState({ errors, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      await axios
        .post("/api/contact", {
          message,
          email,
          name,
        })
        .then(function (response) {
          console.log("response", response);
        })
        .catch(function (error) {
          console.log("error is ,", error);
        });
      setName("");
      setEmail("");
      setMessage("");
      toast.success(
        "Details submitted successfully, we will contact you soon",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    } else {
      toast.error("Please enter correct details", {
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
    <div>
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
                {/* <h3>WE WOULD LOVE TO HEAR FROM YOU</h3> */}
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
                      <p>72 Kangnam, 45 Opal Point Suite 391</p>
                    </div>
                  </div>
                  <div class="ca-widget">
                    <div class="cw-icon">
                      <img src="/icon/icon-2.png" alt="" />
                    </div>
                    <div class="cw-text">
                      <h5>Phone:</h5>
                      <p>+65 11188888</p>
                    </div>
                  </div>
                  <div class="ca-widget">
                    <div class="cw-icon">
                      <img src="/icon/icon-3.png" alt="" />
                    </div>
                    <div class="cw-text">
                      <h5>Mail</h5>
                      <p>absolutefitness@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="contact-form">
                <h4>Leave A Comment</h4>
                <form action="#" onSubmit={handleSubmit} noValidate>
                  <div class="row">
                    <div class="col-lg-6">
                      <input
                        type="text"
                        placeholder="Your name"
                        onChange={handleChange}
                        noValidate
                        name="name"
                        value={name}
                      />
                      {errors?.name?.length > 0 && (
                        <span className="error">{errors.name}</span>
                      )}
                    </div>
                    <div class="col-lg-6">
                      <input
                        type="text"
                        placeholder="Your email"
                        onChange={handleChange}
                        noValidate
                        value={email}
                        name="email"
                      />
                      {errors?.email?.length > 0 && (
                        <span className="error">{errors.email}</span>
                      )}
                    </div>
                    <div class="col-lg-12">
                      <textarea
                        // type="text"
                        placeholder="Your messages"
                        onChange={handleChange}
                        noValidate
                        value={message}
                        name="message"
                      ></textarea>
                      {errors?.message?.length > 0 && (
                        <span className="error">{errors.message}</span>
                      )}
                    </div>
                    <button className="col-lg-4 mx-auto" type="submit">
                      Send Message
                    </button>
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

export default Index;
