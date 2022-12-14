import React from "react";

function index() {
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
                <h2>Gallery</h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="gallery-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="gallery-controls">
                <li class="active" data-filter=".all">
                  all gallery
                </li>
                <li data-filter=".fitness">fitness</li>
                <li data-filter=".coaching">coaching</li>
                <li data-filter=".event">event</li>
                <li data-filter=".other">other</li>
              </ul>
            </div>
          </div>
          <div class="row gallery-filter">
            <div class="col-lg-6 mix all fitness">
              <img src="/gallery/gallery-1.jpg" alt="" />
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-6 mix all fitness coaching">
                  <img src="/gallery/gallery-2.jpg" alt="" />
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-lg-12 mix all coaching">
                      <img src="/gallery/gallery-3.jpg" alt="" />
                    </div>
                    <div class="col-lg-12 mix all coaching">
                      <img src="/gallery/gallery-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-6 mix all other">
                  <img src="/gallery/gallery-5.jpg" alt="" />
                </div>
                <div class="col-lg-6 mix all other">
                  <img src="/gallery/gallery-6.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 mix all event">
              <img src="/gallery/gallery-7.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
