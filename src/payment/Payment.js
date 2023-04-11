import '../css/Global.css'
const Payment=()=>{
    return   <div className="bg-white p-0">
    {/* Spinner Start */}
    {/* <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* Spinner End */}
    {/* Navbar Start */}
    <div className="container-fluid nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <h1 className="m-0 text-primary fs-24">#Myevent</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#login"
          >
            Login
          </button>
        </div>
      </nav>
    </div>
    {/* Navbar End */}
    <div className="container bg-white p-0">
      <div className="row">
        <div className="col-sm-7 mt-5">
          <div>
            <h4 className="fs-18 text-dark">Your Booking Details</h4>
          </div>
          <div className="mt-4">
            <h4 className="text-dark fs-16">Dates</h4>
            <p>2–7 Apr</p>
          </div>
          <div>
            <h4 className="text-dark fs-16">Check-in time</h4>
            <p>4:00 pm – 6:00 pm</p>
          </div>
          <div>
            <h4 className="text-dark fs-16">Guests</h4>
            <p>1 guest</p>
          </div>
          <hr className="mb-4" />
          <div>
            <h4 className="fs-18 text-dark">Pay Now</h4>
          </div>
        </div>
        <div className="col-sm-5 mt-5">
          <div className="white-card">
            <div className="d-flex">
              <img src={require("../img/first.webp")} className="img-fluid detail-page-img" />
              <div className="ml-12">
                <p className="mb-0">Entire villa</p>
                <h5 className="text-dark fs-16">
                  Greek Style Santorini Villa (2BHK) - EKO STAY
                </h5>
              </div>
            </div>
            <hr />
            <div>
              <h4 className="fs-18 text-dark">Price details</h4>
              <div className="d-flex justify-content-between">
                <p className="mb-0">₹8,700 x 5 nights</p>
                <p className="mb-0">₹₹43,500</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">Taxes</p>
                <p className="mb-0">₹7,830</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">Total (INR)</p>
                <p className="mb-0">₹51,330</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Start */}
    <div
      className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                {/* <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
      <i className="bi bi-arrow-up" />
    </a>
  </div>
}
export default Payment