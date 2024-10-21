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
        className="breadcrumb-section set-bg"
        data-setbg="/breadcrumb/classes-breadcrumb.jpg"
        style={{
          "background-image": "url(/breadcrumb/classes-breadcrumb.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Contact US</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info">
                <h4>Contacts Us</h4>
                <div className="contact-address">
                  <div className="ca-widget">
                    <div className="cw-icon">
                      <img src="/icon/icon-1.png" alt="" />
                    </div>
                    <div className="cw-text">
                      <h5>Our Location</h5>
                      <p>72 Kangnam, 45 Opal Point Suite 391</p>
                    </div>
                  </div>
                  <div className="ca-widget">
                    <div className="cw-icon">
                      <img src="/icon/icon-2.png" alt="" />
                    </div>
                    <div className="cw-text">
                      <h5>Phone:</h5>
                      <p>+65 11188888</p>
                    </div>
                  </div>
                  <div className="ca-widget">
                    <div className="cw-icon">
                      <img src="/icon/icon-3.png" alt="" />
                    </div>
                    <div className="cw-text">
                      <h5>Mail</h5>
                      <p>absolutefitness@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form">
                <h4>Leave A Comment</h4>
                <form action="#" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
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
                    <div className="col-lg-12">
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
                    <button className="mx-auto col-lg-4" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24112.92132811736!2d-74.20651812810036!3d40.93514309648714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fda38587e887%3A0xf03207815e338a0d!2sHaledon%2C%20NJ%2007508%2C%20USA!5e0!3m2!1sen!2sbd!4v1578120776078!5m2!1sen!2sbd"
          height="612"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  );
}

export default Index;
