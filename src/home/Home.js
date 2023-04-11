import { Link } from 'react-router-dom'
import '../css/Global.css'
const Home=()=>{
    return <div className="bg-white p-0">
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
          <a href="" className="btn btn-primary px-3 d-none d-lg-flex">
            Login
          </a>
        </div>
      </nav>
    </div>
    {/* Navbar End */}
    {/* Header Start */}
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center justify-content-center flex-column-reverse flex-md-row pt-120 pb-120">
        <div className="col-md-6  pt-120">
          <h2 className="header-title text-center">Plan a event</h2>
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
          </datalist>
        </div>
      </div>
    </div>
    {/* Header End */}
    {/* Search Start */}
    <div
      className="container-fluid bg-primary mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{ padding: 35 }}
    >
      <div className="container">
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-4">
                <select className="form-select border-0 py-3">
                  <option selected="">Event Type</option>
                  <option value={1}>Wedding</option>
                  <option value={2}>Birthday</option>
                  <option value={3}>Opening</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select border-0 py-3">
                  <option selected="">Venue</option>
                  <option value={1}>Resort</option>
                  <option value={2}>Hall</option>
                  <option value={3}>Garden</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select border-0 py-3">
                  <option selected="">Price</option>
                  <option value={1}>3000-6000 /night</option>
                  <option value={2}>6000-9000 /night</option>
                  <option value={3}>9000-12000 /night</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-dark border-0 w-100 py-3">Search</button>
          </div>
        </div>
      </div>
    </div>
    {/* Search End */}
    {/* Property List Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="tab-content">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to={'/details'}>
                    <img className="img-fluid" src={require("../img/first.webp")} alt="" />
                  </Link>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Resort
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">5,200 night</h5>
                  <a className="d-block h5 mb-2" href="">
                    Pimplad Nasik, India
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/second.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Hall
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">4,347 night</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/third.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Farmhouse
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/fourth.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Resort
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/fifth.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Resort
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/fourth.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/seventh.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/fifth.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/nine.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/ten.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/second.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img className="img-fluid" src={require("../img/nine.webp")} alt="" />
                  </a>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    Swimming Pool
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />2 Bath
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Property List End */}
    {/* Category Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="mb-3">Property Types</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <h6>Garden</h6>
                <span>4 Availabe</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <h6>Hall</h6>
                <span>5 Availabe</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <h6>Farmhouse</h6>
                <span>5 Availabe</span>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <a
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <h6>Resort</h6>
                <span>3 Availabe</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Category End */}
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
export default Home