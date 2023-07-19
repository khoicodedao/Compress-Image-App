import React, { FunctionComponent } from 'react'
const Hero: FunctionComponent = () => (
  <section
    id="hero"
    className="d-flex justify-cntent-center align-items-center"
  >
    <div
      id="heroCarousel"
      className="container carousel carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval={5000}
    >
      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
            Welcome to
            <span> Compress Image</span>
          </h2>
          <p className="animate__animated animate__fadeInUp">
            Compress your image Online
          </p>
          <a
            href="#compress"
            className="btn-get-started animate__animated animate__fadeInUp"
          >
            Start compression!
          </a>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#heroCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bx bx-chevron-left"
          aria-hidden="true"
        />
      </a>
      <a
        className="carousel-control-next"
        href="#heroCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bx bx-chevron-right"
          aria-hidden="true"
        />
      </a>
    </div>
  </section>
)
export default Hero
