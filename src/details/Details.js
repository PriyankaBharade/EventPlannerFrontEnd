import { useLocation, useNavigate } from "react-router";
import "../css/Global.css";
import { useEffect, useState } from "react";
import Header from "../home/Header";
const Details = (props) => {
  const location = useLocation();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    if (details.length === 0) {
      console.log("location   ", location);
      // console.log(location.pathname.split("/")[2]);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        id: location.pathname.split("/")[2],
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3001/getVenueById", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setDetails(result);
        })
        .catch((error) => console.log("error", error));
    }
  }, [details]);
  const navigation = useNavigate();
  return (
    details.length > 0 && (
      <div>
        <div className="bg-white p-0">
          <Header />
          <div className="container bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
              <div className="col-md-6 mt-lg-5">
                <h1 className="display-5 animated fadeIn mb-4">
                  {details[0]?.venue_name}
                </h1>
                <p>
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  {details[0]?.address}
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6 p-0">
                  <a href="">
                    <img
                      className="img-fluid"
                      src={details[0]?.images[0]?.url}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-sm-6">
                      <a href="">
                        <img
                          className="img-fluid"
                          src={details[0]?.images[1]?.url}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <a href="">
                        <img
                          className="img-fluid"
                          src={details[0]?.images[2]?.url}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-sm-6 mt-3">
                      <a href="">
                        <img
                          className="img-fluid"
                          src={details[0]?.images[3]?.url}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-sm-6 mt-3">
                      <a href="">
                        <img
                          className="img-fluid"
                          src={details[0]?.images[4]?.url}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header End */}
          <div className="container bg-white p-0">
            <div className="row">
              <div className="col-sm-7 mt-5">
                <div>
                  <h4>Entire villa hosted by {details[0]?.hostname}</h4>
                  <p className="mb-1">
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    {details[0]?.address}
                  </p>
                </div>
                {/* <div>12 guests .2 bedrooms .2 beds .2 bathrooms</div> */}
                <hr className="mb-4" />
                <div className="d-flex align-items-start">
                  <i className="fas fa-user-alt text-primary" />
                  <div className="ml-12">
                    <h4 className="text-dark fs-16">
                      {details[0]?.hostname} is a Superhost
                    </h4>
                    <p>{details[0]?.host_desc}</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mt-2">
                  <i className="fa fa-map-marker-alt text-primary" />
                  <div className="ml-12">
                    <h4 className="text-dark fs-16">Great location</h4>
                    <p>{details[0]?.location_review}</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mt-2">
                  <i className="fas fa-restroom text-primary" />
                  <div className="ml-12">
                    <h4 className="text-dark fs-16">
                      Great check-in experience
                    </h4>
                    <p>{details[0]?.check_in_exp}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4>About Us</h4>
                  <p>{details[0]?.about_us}</p>
                  <p></p>
                </div>
                <div className="mt-4">
                  <h4>What this place offers</h4>
                  <div>{details[0]?.amenities}</div>
                </div>
              </div>
              <div className="col-sm-5 mt-5">
                <div className="white-card">
                  <h5>₹{details[0]?.price}</h5>
                  <form>
                    <div className="d-flex justify-content-between">
                      <div className="mb-3 w-50">
                        <label htmlFor="check-in" className="form-label">
                          Check-in
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="check-in"
                          placeholder="check-in"
                        />
                      </div>
                      <div className="mb-3 w-50 ml-12">
                        <label htmlFor="check-out" className="form-label">
                          Check-out
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="check-out"
                          placeholder="check-in"
                        />
                      </div>
                    </div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="">Guests</option>
                      <option value={1}>300-500 persons</option>
                      <option value={2}>500-1000 persons</option>
                      <option value={3}>1000-1500 persons</option>
                    </select>
                    <button
                      onClick={() => {
                        navigation("/payment", {state : {value:details[0]}});
                      }}
                      type="button"
                      className="btn btn-primary w-100 mt-4"
                    >
                      Reserve
                    </button>
                  </form>
                  <div className="d-flex justify-content-between mt-4">
                    <p>₹{details[0]?.price} x 5 night</p>
                    <p>₹{details[0]?.price * 5}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mt-3">
                    <p>Total before taxes</p>
                    <p>₹{details[0]?.price * 5}</p>
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
          <a
            href="#"
            className="btn btn-lg btn-primary btn-lg-square back-to-top"
          >
            <i className="bi bi-arrow-up" />
          </a>
        </div>
        {/* Button trigger modal */}
        {/* Modal */}
        <div
          className="modal fade"
          id="login"
          tabIndex={-1}
          aria-labelledby="login"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Signup/Login
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Details;
