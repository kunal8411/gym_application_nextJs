import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import UsersTable from "../../components/usersListTable/UsersTable";
import { toast } from "react-toastify";

ChartJS.register(ArcElement, Tooltip, Legend);
import Link from "next/link";
function Index(props) {
  const router = useRouter();

  //state variables
  const [isAlreadyLoggedIn, setLoggedInState] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentLoggedInUser = localStorage.getItem("currentLoggedInUser");
      if (typeof currentLoggedInUser === "string") {
        setLoggedInState(true);
      } else {
        router.push("/login");
      }
    }
    if (!isAlreadyLoggedIn) {
      router.push("/login");
    }
  }, []);

  const redirectToLoginPageIfNotLoggedIn = () => {
    toast.warning("Please log in to view this page", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    Router.push("/hola");
    // router.push("/login");
  };

  return (
    isAlreadyLoggedIn && (
      <div className="g-sidenav-show   bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>

        <main className="main-content position-relative border-radius-lg ">
          {/* <!-- Navbar --> */}
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
                      <a className="opacity-5 text-white" href="javascript:;">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item text-sm text-white active"
                    aria-current="page"
                  >
                    Dashboard
                  </li>
                </ol>
                <h6 className="font-weight-bolder text-white mb-0">
                  Dashboard
                </h6>
              </nav>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}

          {/* box */}
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-8">
                        <div className="numbers">
                          <p className="text-sm mb-0 text-uppercase font-weight-bold">
                            Total Members
                          </p>
                          <h5 className="font-weight-bolder">
                            {props.usersData.allUsersStats[0].totalUsers}
                          </h5>
                          <p className="mb-0">
                            <span className="text-success text-sm font-weight-bolder">
                              +55%
                            </span>
                            <br />
                            since last month
                          </p>
                        </div>
                      </div>
                      <div className="col-4 text-end">
                        <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                          <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-8">
                        <div className="numbers">
                          <p className="text-sm mb-0 text-uppercase font-weight-bold ">
                            Todays Registrations
                          </p>
                          <h5 className="">
                            {props.weeklyUsersData.weeklyUsersStats[0]
                              ?.newUsers || 0}
                          </h5>

                          <p className="mb-0">
                            <span className="text-success text-sm font-weight-bolder">
                              +3%
                            </span>
                            <br />
                            since last week
                          </p>
                        </div>
                      </div>
                      <div className="col-4 text-end">
                        <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                          <i className="fa fa-users" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-8">
                        <div className="numbers">
                          <p className="text-sm mb-0 text-uppercase font-weight-bold">
                            Revenue this month
                          </p>
                          <h5 className="font-weight-bolder">
                            $
                            {
                              props.weeklyUsersData.weeklyUsersStats[0]
                                ?.thisWeeksPayment
                            }
                          </h5>
                          <p className="mb-0">
                            <span className="text-danger text-sm font-weight-bolder">
                              -2%
                            </span>
                            <br />
                            since last quarter
                          </p>
                        </div>
                      </div>
                      <div className="col-4 text-end">
                        <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                          <i
                            className="fa fa-credit-card"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-8">
                        <div className="numbers">
                          <p className="text-sm mb-0 text-uppercase font-weight-bold">
                            Total revenue
                          </p>
                          <h5 className="font-weight-bolder">
                            ${props.usersData.allUsersStats[0].allPayment}
                          </h5>
                          <p className="mb-0">
                            <span className="text-success text-sm font-weight-bolder">
                              +5%
                            </span>{" "}
                            <br />
                            than last month
                          </p>
                        </div>
                      </div>
                      <div className="col-4 text-end">
                        <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                          <i className="fa fa-tasks" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <UsersTable
                userData={
                  props.weeklyUsersData.usersRegistrationsEndingThisWeek
                }
              />
              <UsersTable userData={props.usersData.allUsers} />
            </div>
            {/* <footer className="footer pt-3  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    ©, made with <i className="fa fa-heart"></i> by
                    <a
                      href="https://www.creative-tim.com"
                      className="font-weight-bold"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        className="nav-link text-muted"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="nav-link text-muted"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        className="nav-link text-muted"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        className="nav-link pe-0 text-muted"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer> */}
          </div>
        </main>
      </div>
    )
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const allusersResponse = await fetch(
    `${process.env.BASE_URL}/api/users?limit=`
  );
  const weeklyData = await fetch(
    `${process.env.BASE_URL}/api/users/user-status-by-date`
  );
  const allUsersData = await allusersResponse.json();
  const weeklyUsersData = await weeklyData.json();
  return {
    props: {
      usersData: allUsersData.data[0],
      weeklyUsersData: weeklyUsersData.data[0],
    },
  };
}

export default Index;
