import React from "react";
import moment from "moment";

function UsersTable(props) {
  return (
    <div className="col-lg-6 mb-lg-0 mb-4">
      <div className="card ">
        <div className="card-header pb-0 p-3">
          <div className="d-flex justify-content-between">
            <h6 className="mb-2">Clients registration ending this week</h6>
          </div>
        </div>
        <div className="table-responsive p-0">
          <table className="table align-items-center mb-0">
            <thead>
              <tr>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Name
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Email
                </th>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                  Phone Number
                </th>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                  Start Date
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  End Date
                </th>
                
                <th className="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              {props?.userData?.map((data, index) => {
                return (
                //   <div key={index}>
                    <tr key={index}>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            {/* <img
                        src="../assets/img/team-2.jpg"
                        className="avatar avatar-sm me-3"
                        alt="user1"
                      /> */}
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{data.name}</h6>
                            {/* <p className="text-xs text-secondary mb-0">
                              {data.email}
                            </p> */}
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {data.email}
                        </span>
                      </td>
                      <td>
                        <p className="text-secondary text-xs font-weight-bold mb-0">{data.phoneNumber}</p>
                        <p className="text-xs text-secondary mb-0"></p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        {/* <span className="badge badge-sm bg-gradient-success">
                          Online
                        </span> */}
                        <span className="text-secondary text-xs font-weight-bold">
                          {moment(data.startDate).format("YYYY-MM-DD")}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {moment(data.endDate).format("YYYY-MM-DD")}
                        </span>
                      </td>
                      {/* <td className="align-middle">
                        <a
                          href="javascript:;"
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Edit
                        </a>
                      </td> */}
                    </tr>
                //   </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
