import React, { Component } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(function (val) {
    if (val.lenght < 0) {
      valid = true;
    }
  });
  return valid;
};
//
export default class NewREgistrationsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 3
            ? "First Name must be at least 3 characters long!"
            : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 3
            ? "Last Name must be at least 3 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "phoneNumber":
        errors.phoneNumber =
          value.length < 9 ? "Phone number is not correct!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  clearStateValues = async () => {
    await this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phoneNumber } = this.state;
    if (validateForm(this.state.errors)) {
      await axios
        .post("/api/new-registrations", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
        })
        .then(function (response) {
          console.log("response", response);
        })
        .catch(function (error) {
          console.log("error is ,", error);
        });
      await this.clearStateValues();
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
  render() {
    const { errors } = this.state;
    const { firstName, lastName, email, phoneNumber } = this.state;
    return (
      <section class="register-section spad" id="register_section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="register-text">
                <div class="section-title">
                  <h2>Register Now</h2>
                  <p>
                    The First 7 Day Trial Is Completely Free With The Trainer
                  </p>
                </div>
                <form
                  action="#"
                  class="register-form"
                  onSubmit={this.handleSubmit}
                  noValidate
                >
                  <div class="row">
                    <div class="col-lg-6">
                      <label for="name" htmlFor="firstName">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="firstName"
                        onChange={this.handleChange}
                        noValidate
                        value={firstName}
                      />
                      {errors.firstName.length > 0 && (
                        <span className="error">{errors.firstName}</span>
                      )}
                    </div>

                    <div class="col-lg-6">
                      <label for="last-name" htmlFor="lastName">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        onChange={this.handleChange}
                        noValidate
                        name="lastName"
                        value={lastName}
                      />
                      {errors.lastName.length > 0 && (
                        <span className="error">{errors.lastName}</span>
                      )}
                    </div>
                    <div class="col-lg-6">
                      <label for="email">Your email address*</label>
                      <input
                        type="text"
                        id="email"
                        onChange={this.handleChange}
                        noValidate
                        name="email"
                        value={email}
                      />
                      {errors.email.length > 0 && (
                        <span className="error">{errors.email}</span>
                      )}
                    </div>
                    <div class="col-lg-6">
                      <label for="mobile">Mobile No*</label>
                      <input
                        type="number"
                        id="mobile"
                        onChange={this.handleChange}
                        noValidate
                        name="phoneNumber"
                        value={phoneNumber}
                      />
                      {errors.phoneNumber.length > 0 && (
                        <span className="error">{errors.phoneNumber}</span>
                      )}
                    </div>
                  </div>
                  <button type="submit" class="register-btn">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="register-pic">
                <img src="/register-pic.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
