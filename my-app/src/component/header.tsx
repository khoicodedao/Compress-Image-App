import React, { FunctionComponent } from 'react'
const Header: FunctionComponent = () => (
  <header
    id="header"
    className="fixed-top d-flex align-items-center header-transparent"
  >
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        <h1 className="text-light">
          <a href="/">
            <span>Compress-Image</span>
          </a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
    </div>
  </header>
)
export default Header
