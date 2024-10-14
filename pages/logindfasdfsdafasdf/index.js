import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const Index = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAlreadyLoggedIn, setLoggedInState] = useState(false);
  const redirectToHomeSection = async () => {
    await setHeaderIndex(0);
    await router.push("/");
  };
  const setHeaderIndex = async (index) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("headerTileIndex", index);
    }
  };
  const setLogInDetailsInLocalStorage = (user) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentLoggedInUser", JSON.stringify(user));
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentLoggedInUser = localStorage.getItem("currentLoggedInUser");
      if (typeof currentLoggedInUser === "string") {
        setLoggedInState(true);
      }
    }
  }, []);

  const onSubmit = async () => {
    await axios
      .get("/api/login", {
        params: {
          email,
          password,
        },
      })
      .then(function (response) {
        if (response && response.data && response.data.success) {
          toast.success("Logged in successfully", {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setLogInDetailsInLocalStorage(response.data.data);
          redirectToAdminPage();
        } else {
          toast.error(response.data.body, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch(function (error) {
        console.log("error is ---->", error);
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  const redirectToAdminPage = async () => {
    await router.push("/admin");
  };
  const redirectToHomePageIfAlreadyLoggedIn = () => {
    toast.warning("Already Logged-in", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    router.push("/");
  };
  return isAlreadyLoggedIn ? (
    redirectToHomePageIfAlreadyLoggedIn()
  ) : (
    <div className="g-sidenav-show   bg-gray-100 overflow-hidden">
      <div
        className="min-vh-100  position-absolute w-100"
        style={{ backgroundColor: "blanchedalmond" }}
      ></div>

      <main className="main-content position-relative border-radius-lg ">
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
          id="navbarBlur"
          data-scroll="false"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <Link href="/">
                    <a
                      className="opacity-5 text-black"
                      onClick={redirectToHomeSection}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-sm text-black active"
                  aria-current="page"
                >
                  Login
                </li>
              </ol>
              <h6 className="font-weight-bolder text-black mb-0">
                <Link href="/">
                  <a
                    className="opacity-5 text-black"
                    onClick={redirectToHomeSection}
                  >
                    Home
                  </a>
                </Link>
              </h6>
            </nav>
          </div>
        </nav>

        <div className="container-fluid ">
          <div class="row g-0 d-flex justify-content-center">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">
                <div class="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    // style="width: 185px;"
                    style={{ width: "186px" }}
                    alt="logo"
                  />
                  <h4 class="mt-1 mb-5 pb-1">We are The Admin Team</h4>
                </div>

                <form>
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example11">
                      Username
                    </label>
                    <input
                      type="email"
                      value={email}
                      id="form2Example11"
                      class="form-control"
                      placeholder="User name or email address"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example22">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form2Example22"
                      class="form-control"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button
                      class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                      type="button"
                      onClick={onSubmit}
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
