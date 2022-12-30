import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UsersTable from "../../components/usersListTable/UsersTable";

import Link from "next/link";
import axios from "axios";
function Index(props) {
  const router = useRouter();
  const [usersData, setusersData] = useState({});
  const [weeklyUsersData, setWeeklyUsersData] = useState({});
  const [isAlreadyLoggedIn, setLoggedInState] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentLoggedInUser = localStorage.getItem("currentLoggedInUser");
      if (typeof currentLoggedInUser === "string") {
        setLoggedInState(true);
      } else {
        router.push("/");
      }
    }
    async function fetchData() {
      const allusersResponse = await axios.get(`/api/users?limit=`);
      const weeklyData = await axios.get(`/api/users/user-status-by-date`);
      if (
        allusersResponse &&
        allusersResponse.data &&
        allusersResponse.data.data &&
        allusersResponse.data.data.length > 0
      ) {
        setusersData(allusersResponse.data.data[0]);
      }
      if (
        weeklyData &&
        weeklyData.data &&
        weeklyData.data.data &&
        weeklyData.data.data.length > 0
      ) {
        setWeeklyUsersData(weeklyData.data.data[0]);
      }
    }
    fetchData();
  }, []);
  if (usersData && Object.keys(usersData).length === 0) {
    return <div>Loading....</div>;
  }
  return (
    <div className="g-sidenav-show   bg-gray-100">
      <div className="min-height-300 bg-primary position-absolute w-100"></div>

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
              <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
            </nav>
          </div>
        </nav>

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
                          {usersData?.allUsersStats[0].totalUsers}
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
                          {weeklyUsersData?.weeklyUsersStats[0]?.newUsers || 0}
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
                            weeklyUsersData?.weeklyUsersStats[0]
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
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
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
                          ${usersData?.allUsersStats[0].allPayment}
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
              title={"Clients registration ending this week"}
              userData={weeklyUsersData?.usersRegistrationsEndingThisWeek}
            />

            <UsersTable userData={usersData?.allUsers} title={"All Clients"} />
          </div>
        </div>
      </main>
    </div>
  );
}



export default Index;
