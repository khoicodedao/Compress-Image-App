import React, { FunctionComponent } from 'react'
const Why: FunctionComponent = () => (
  <section
    className="why-us section-bg aos-init aos-animate"
    data-aos="fade-up"
    date-aos-delay={200}
    id="compress"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 video-box">
          <img src="assets/img/why-us.jpg" className="img-fluid" alt="" />
          <a
            href="https://www.youtube.com/@harrydicode"
            className="venobox play-btn mb-4"
            data-vbtype="video"
            data-autoplay="true"
          />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
          <div className="icon-box">
            <div className="icon">
              <i className="bx bx-fingerprint" />
            </div>
            <h4 className="title">
              <a href="https://viblo.asia/u/khoicodedao">Viblo</a>
            </h4>
            <p className="description">Happly to help</p>
          </div>
          <div className="icon-box">
            <div className="icon">
              <i className="bx bx-gift" />
            </div>
            <h4 className="title">
              <a href="https://www.youtube.com/@harrydicode">Youtube</a>
            </h4>
            <p className="description">Subcribe to me!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Why
