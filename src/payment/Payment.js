import { useLocation } from "react-router";
import "../css/Global.css";
import Header from "../home/Header";
const Payment = () => {
  const detailsValue = useLocation();
  console.log("Payment Data", detailsValue.pathname, detailsValue.state);
  return (
    <div className="bg-white p-0">
      <Header />
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
                <img
                  src={detailsValue.state.value.images[0].url}
                  className="img-fluid detail-page-img"
                />
                <div className="ml-12">
                  <p className="mb-0">{detailsValue.state.value.venue_name}</p>
                  <h5 className="text-dark fs-16">
                    Entire villa hosted by {detailsValue.state.value.hostname}
                  </h5>
                  <p className="mb-0">{detailsValue.state.value.address}</p>
                  <p className="mb-0">{detailsValue.state.value.about_us}</p>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="fs-18 text-dark">Price details</h4>
                <div className="d-flex justify-content-between">
                  <p className="mb-0">
                    ₹{detailsValue.state.value.price} x 5 nights
                  </p>
                  <p className="mb-0">₹{detailsValue.state.value.price * 5}</p>
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
                  <p className="mb-0">
                    ₹{(detailsValue.state.value.price * 5 + 7830)}
                  </p>
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
  );
};
export default Payment;
