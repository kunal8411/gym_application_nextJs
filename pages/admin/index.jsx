import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function index() {
 
  return (
    <div class="g-sidenav-show   bg-gray-100">
      <div class="min-height-300 bg-primary position-absolute w-100"></div>

      <main class="main-content position-relative border-radius-lg ">
        {/* <!-- Navbar --> */}
        <nav
          class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
          id="navbarBlur"
          data-scroll="false"
        >
          <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li class="breadcrumb-item text-sm">
                  <a class="opacity-5 text-white" href="javascript:;">
                    Pages
                  </a>
                </li>
                <li
                  class="breadcrumb-item text-sm text-white active"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
              <h6 class="font-weight-bolder text-white mb-0">Dashboard</h6>
            </nav>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">
                          Total Members
                        </p>
                        <h5 class="font-weight-bolder">105</h5>
                        <p class="mb-0">
                          <span class="text-success text-sm font-weight-bolder">
                            +55%
                          </span>
                          <br />
                          since last month
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">
                          Todays Registrations
                        </p>
                        <h5 class="font-weight-bolder">23</h5>
                        <p class="mb-0">
                          <span class="text-success text-sm font-weight-bolder">
                            +3%
                          </span>
                          <br />
                          since last week
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                        <i class="fa fa-users" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">
                          Revenue this month
                        </p>
                        <h5 class="font-weight-bolder">$32</h5>
                        <p class="mb-0">
                          <span class="text-danger text-sm font-weight-bolder">
                            -2%
                          </span>
                          <br />
                          since last quarter
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-uppercase font-weight-bold">
                          Total revenue
                        </p>
                        <h5 class="font-weight-bolder">$103,430</h5>
                        <p class="mb-0">
                          <span class="text-success text-sm font-weight-bolder">
                            +5%
                          </span>{" "}
                          <br />
                          than last month
                        </p>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                        <i class="fa fa-tasks" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row mt-4">
            <div class="col-lg-6 mb-lg-0 mb-4">
              <div class="card ">
                <div class="card-header pb-0 p-3">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-2">Clients registration ending this week</h6>
                  </div>
                </div>
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Author
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Function
                        </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Status
                        </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Employed
                        </th>
                        <th class="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-2.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user1"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">John Michael</h6>
                              <p class="text-xs text-secondary mb-0">
                                john@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">Manager</p>
                          <p class="text-xs text-secondary mb-0">
                            Organization
                          </p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success">
                            Online
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            23/04/18
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-3.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user2"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Alexa Liras</h6>
                              <p class="text-xs text-secondary mb-0">
                                alexa@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">
                            Programator
                          </p>
                          <p class="text-xs text-secondary mb-0">Developer</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            11/01/19
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-4.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user3"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                              <p class="text-xs text-secondary mb-0">
                                laurent@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">Executive</p>
                          <p class="text-xs text-secondary mb-0">Projects</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success">
                            Online
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            19/09/17
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-3.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user4"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Michael Levi</h6>
                              <p class="text-xs text-secondary mb-0">
                                michael@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">
                            Programator
                          </p>
                          <p class="text-xs text-secondary mb-0">Developer</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success">
                            Online
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            24/12/08
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-2.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user5"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Richard Gran</h6>
                              <p class="text-xs text-secondary mb-0">
                                richard@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">Manager</p>
                          <p class="text-xs text-secondary mb-0">Executive</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            04/10/21
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-4.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user6"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Miriam Eric</h6>
                              <p class="text-xs text-secondary mb-0">
                                miriam@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">
                            Programtor
                          </p>
                          <p class="text-xs text-secondary mb-0">Developer</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            14/09/20
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-header pb-0 p-3">
                  <h6 class="mb-0">All Members list </h6>
                </div>
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Author
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Function
                        </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Status
                        </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Employed
                        </th>
                        <th class="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-2.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user1"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">John Michael</h6>
                              <p class="text-xs text-secondary mb-0">
                                john@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">Manager</p>
                          <p class="text-xs text-secondary mb-0">
                            Organization
                          </p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success">
                            Online
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            23/04/18
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-3.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user2"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Alexa Liras</h6>
                              <p class="text-xs text-secondary mb-0">
                                alexa@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">
                            Programator
                          </p>
                          <p class="text-xs text-secondary mb-0">Developer</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            11/01/19
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-4.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user3"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                              <p class="text-xs text-secondary mb-0">
                                laurent@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">Executive</p>
                          <p class="text-xs text-secondary mb-0">Projects</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success">
                            Online
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            19/09/17
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-3.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user4"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Michael Levi</h6>
                              <p class="text-xs text-secondary mb-0">
                                michael@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">
                            Programator
                          </p>
                          <p class="text-xs text-secondary mb-0">Developer</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success">
                            Online
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            24/12/08
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-2.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user5"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Richard Gran</h6>
                              <p class="text-xs text-secondary mb-0">
                                richard@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">Manager</p>
                          <p class="text-xs text-secondary mb-0">Executive</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            04/10/21
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="../assets/img/team-4.jpg"
                                class="avatar avatar-sm me-3"
                                alt="user6"
                              />
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Miriam Eric</h6>
                              <p class="text-xs text-secondary mb-0">
                                miriam@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">
                            Programtor
                          </p>
                          <p class="text-xs text-secondary mb-0">Developer</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary">
                            Offline
                          </span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">
                            14/09/20
                          </span>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer pt-3  ">
            <div class="container-fluid">
              <div class="row align-items-center justify-content-lg-between">
                {/* <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="copyright text-center text-sm text-muted text-lg-start">
                    ©, made with <i class="fa fa-heart"></i> by
                    <a
                      href="https://www.creative-tim.com"
                      class="font-weight-bold"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div> */}
                {/* <div class="col-lg-6">
                  <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        class="nav-link text-muted"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        class="nav-link text-muted"
                      >
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        class="nav-link text-muted"
                      >
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        class="nav-link pe-0 text-muted"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </footer>
        </div>
      </main>
      <div class="fixed-plugin">
        <div class="card shadow-lg">
          <div class="card-header pb-0 pt-3 ">
            <div class="float-start">
              <h5 class="mt-3 mb-0">Argon Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div class="float-end mt-4">
              <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i class="fa fa-close"></i>
              </button>
            </div>
            {/* <!-- End Toggle Button --> */}
          </div>
          <hr class="horizontal dark my-1" />
          <div class="card-body pt-sm-3 pt-0 overflow-auto">
            {/* <!-- Sidebar Backgrounds --> */}
            <div>
              <h6 class="mb-0">Sidebar Colors</h6>
            </div>
            <a
              href="javascript:void(0)"
              class="switch-trigger background-color"
            >
              <div class="badge-colors my-2 text-start">
                <span
                  class="badge filter bg-gradient-primary active"
                  data-color="primary"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-dark"
                  data-color="dark"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-info"
                  data-color="info"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-success"
                  data-color="success"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-warning"
                  data-color="warning"
                  onclick="sidebarColor(this)"
                ></span>
                <span
                  class="badge filter bg-gradient-danger"
                  data-color="danger"
                  onclick="sidebarColor(this)"
                ></span>
              </div>
            </a>
            {/* <!-- Sidenav Type --> */}
            <div class="mt-3">
              <h6 class="mb-0">Sidenav Type</h6>
              <p class="text-sm">Choose between 2 different sidenav types.</p>
            </div>
            <div class="d-flex">
              <button
                class="btn bg-gradient-primary w-100 px-3 mb-2 active me-2"
                data-class="bg-white"
                onclick="sidebarType(this)"
              >
                White
              </button>
              <button
                class="btn bg-gradient-primary w-100 px-3 mb-2"
                data-class="bg-default"
                onclick="sidebarType(this)"
              >
                Dark
              </button>
            </div>
            <p class="text-sm d-xl-none d-block mt-2">
              You can change the sidenav type just on desktop view.
            </p>
            {/* <!-- Navbar Fixed --> */}
            <div class="d-flex my-3">
              <h6 class="mb-0">Navbar Fixed</h6>
              <div class="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  class="form-check-input mt-1 ms-auto"
                  type="checkbox"
                  id="navbarFixed"
                  onclick="navbarFixed(this)"
                />
              </div>
            </div>
            <hr class="horizontal dark my-sm-4" />
            <div class="mt-2 mb-5 d-flex">
              <h6 class="mb-0">Light / Dark</h6>
              <div class="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  class="form-check-input mt-1 ms-auto"
                  type="checkbox"
                  id="dark-version"
                  onclick="darkMode(this)"
                />
              </div>
            </div>
            <a
              class="btn bg-gradient-dark w-100"
              href="https://www.creative-tim.com/product/argon-dashboard"
            >
              Free Download
            </a>
            <a
              class="btn btn-outline-dark w-100"
              href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard"
            >
              View documentation
            </a>
            <div class="w-100 text-center">
              <a
                class="github-button"
                href="https://github.com/creativetimofficial/argon-dashboard"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star creativetimofficial/argon-dashboard on GitHub"
              >
                Star
              </a>
              <h6 class="mt-3">Thank you for sharing!</h6>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20Argon%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fargon-dashboard"
                class="btn btn-dark mb-0 me-2"
              >
                <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard"
                class="btn btn-dark mb-0 me-2"
              >
                <i class="fab fa-facebook-square me-1" aria-hidden="true"></i>{" "}
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
