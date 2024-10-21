import React from "react";

function index() {
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
                <h2>Gallery</h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="gallery-controls">
                <li className="active" data-filter=".all">
                  all gallery
                </li>
                {/* <li data-filter=".fitness">fitness</li>
                <li data-filter=".coaching">coaching</li>
                <li data-filter=".event">event</li>
                <li data-filter=".other">other</li> */}
              </ul>
            </div>
          </div>
          <div className="row gallery-filter">
            <div className="col-lg-6 mix all fitness">
              <img src="/gallery/gallery-1.jpg" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 mix all fitness coaching">
                  <img src="/gallery/gallery-2.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12 mix all coaching">
                      <img src="/gallery/gallery-3.jpg" alt="" />
                    </div>
                    <div className="col-lg-12 mix all coaching">
                      <img src="/gallery/gallery-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 mix all other">
                  <img src="/gallery/gallery-5.jpg" alt="" />
                </div>
                <div className="col-lg-6 mix all other">
                  <img src="/gallery/gallery-6.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mix all event">
              <img src="/gallery/gallery-7.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
