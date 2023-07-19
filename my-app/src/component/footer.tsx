import React, { FunctionComponent } from 'react'
const Footer: FunctionComponent = () => (
  <footer
    id="footer"
    data-aos="fade-up"
    data-aos-easing="ease-in-out"
    data-aos-duration={500}
  >
    <div className="footer-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>Our Newsletter</h4>
            <p>Give us your email here!</p>
          </div>
          <div className="col-lg-6">
            <form method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright
        <strong>
          <span>Harry</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/ */}
        Designed by
        <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
)
export default Footer
