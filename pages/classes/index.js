import React from "react";

function index() {
  return (
    <div>
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb/classes-breadcrumb.jpg"
        style={{
          "background-image": "url(/breadcrumb/classes-breadcrumb.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>CLASSES</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="classes-section classes-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>OUR CLASSES</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-class-item set-bg"
                data-setbg="img/classes/classes-1.jpg"
                style={{ "background-image": "url(/classes/classes-1.jpg)" }}
              >
                <div className="si-text">
                  <h4>Yoga</h4>
                  <span>
                    <i className="fa fa-user"></i> Ryan Knight
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-class-item set-bg"
                data-setbg="img/classes/classes-4.jpg"
                style={{ "background-image": "url(/banner-bg.jpg)" }}
              >
                <div className="si-text">
                  <h4>Karate</h4>
                  <span>
                    <i className="fa fa-user"></i> Kevin McCormick
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-class-item set-bg"
                data-setbg="img/classes/classes-2.jpg"
                style={{ "background-image": "url(/classes/classes-2.jpg)" }}
              >
                <div className="si-text">
                  <h4>Running</h4>
                  <span>
                    <i className="fa fa-user"></i> Randy Rivera
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-class-item set-bg"
                data-setbg="img/classes/classes-5.jpg"
                style={{ "background-image": "url(/classes/classes-5.jpg)" }}
              >
                <div className="si-text">
                  <h4>Dance</h4>
                  <span>
                    <i className="fa fa-user"></i> Russell Lane
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-class-item set-bg"
                data-setbg="img/classes/classes-3.jpg"
                style={{ "background-image": "url(/classes/classes-3.jpg)" }}
              >
                <div className="si-text">
                  <h4>Personal Training</h4>
                  <span>
                    <i className="fa fa-user"></i> Cole Robertson
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-class-item set-bg"
                data-setbg="img/classes/classes-6.jpg"
                style={{ "background-image": "url(/classes/classes-6.jpg)" }}
              >
                <div className="si-text">
                  <h4>Weight Loss</h4>
                  <span>
                    <i className="fa fa-user"></i> Ryan Scott
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-class-item set-bg"
                data-setbg="img/classes/classes-7.jpg"
                style={{ "background-image": "url(/classes/classes-7.jpg)" }}
              >
                <div className="si-text">
                  <h4>Box</h4>
                  <span>
                    <i className="fa fa-user"></i> Chester Bowen
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-class-item set-bg"
                data-setbg="img/classes/classes-8.jpg"
                style={{ "background-image": "url(/classes/classes-8.jpg)" }}
              >
                <div className="si-text">
                  <h4>Cardio</h4>
                  <span>
                    <i className="fa fa-user"></i> Jorge Fernandez
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-class-item set-bg"
                data-setbg="img/classes/classes-8.jpg"
                style={{ "background-image": "url(/classes/classes-8.jpg)" }}
              >
                <div className="si-text">
                  <h4>Crossfit</h4>
                  <span>
                    <i className="fa fa-user"></i> Chester Bowen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="classes-timetable spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Class Timetable</h2>
              </div>
              <div className="nav-controls">
                <ul>
                  <li className="active" data-tsfilter="all">
                    All Class
                  </li>
                  {/* <li data-tsfilter="gym">Gym</li>
                  <li data-tsfilter="crossfit">Crossfit</li>
                  <li data-tsfilter="cardio">Cardio</li>
                  <li data-tsfilter="body">Body</li>
                  <li data-tsfilter="yoga">Yoga</li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="schedule-table">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                      <th>Sunday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="workout-time">10.00</td>
                      <td className="hover-bg ts-item" data-tsmeta="gym">
                        <h6>Gym</h6>
                        <span>10.00 - 11.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="yoga">
                        <h6>Yoga</h6>
                        <span>10.00 - 12.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="body">
                        <h6>Body</h6>
                        <span>10.00 - 12.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="cardio">
                        <h6>Cardio</h6>
                        <span>10.00 - 11.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="workout-time">14.00</td>
                      <td></td>
                      <td className="hover-bg ts-item">
                        <h6>Running</h6>
                        <span>14.00 - 16.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item">
                        <h6>Box</h6>
                        <span>14.00 - 15.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="gym">
                        <h6>Gym</h6>
                        <span>14.00 - 16.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="workout-time">16.00</td>
                      <td className="hover-bg ts-item" data-tsmeta="cardio">
                        <h6>Cardio</h6>
                        <span>16.00 - 18.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="gym">
                        <h6>Gym</h6>
                        <span>16.00 - 19.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="yoga">
                        <h6>Yoga</h6>
                        <span>16.00 - 18.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="gym">
                        <h6>Gym</h6>
                        <span>16.00 - 20.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="workout-time">18.00</td>
                      <td className="hover-bg ts-item">
                        <h6>Box</h6>
                        <span>18.00 - 22.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td className="hover-bg ts-item" data-tsmeta="body">
                        <h6>Body</h6>
                        <span>18.00 - 20.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="crossfit">
                        <h6>Crossfit</h6>
                        <span>18.00 - 21.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="cardio">
                        <h6>Cardio</h6>
                        <span>18.00 - 22.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="workout-time">20.00</td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="gym">
                        <h6>Gym</h6>
                        <span>20.00 - 12.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td className="hover-bg ts-item" data-tsmeta="body">
                        <h6>Body</h6>
                        <span>20.00 - 21.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="cardio">
                        <h6>Cardio</h6>
                        <span>20.00 - 22.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                      <td></td>
                      <td className="hover-bg ts-item" data-tsmeta="crossfit">
                        <h6>Crossfit</h6>
                        <span>20.00 - 21.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="footer-banner-item set-bg"
                data-setbg="img/footer-banner/footer-banner-1.jpg"
                style={{
                  "background-image": "url(/footer-banner/footer-banner-1.jpg)",
                }}
              >
                <span>New member</span>
                <h2>7 days for free</h2>
                <p>
                  Complete the training sessions with us, surely you will be
                  happy
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="footer-banner-item set-bg"
                data-setbg="img/footer-banner/footer-banner-2.jpg"
                style={{
                  "background-image": "url(/footer-banner/footer-banner-2.jpg)",
                }}
              >
                <span>contact us</span>
                <h2>09 746 204</h2>
                <p>We would love to hear from you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
