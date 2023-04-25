import React from "react";
import { Link } from "react-router-dom";

const ListItem = () => {
  const itemValue = [
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Hall",
      price: "4,347 /- night",
      location: "Golden Urban House For Sell",
      address: " 123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
    {
      img: "../img/first.webp",
      name: "Resort",
      price: "5200 /- night",
      location: "Pimplad Nasik, India",
      address: "123 Street, New York, USA",
      amenities: ["Swimming Pool", "3 Bed", "2 bath"],
    },
  ];
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="tab-content">
            <div className="row g-4">
              {itemValue.map((item) => (
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <Link to={"details"}>
                        <img
                          className="img-fluid"
                          src={require("../img/first.webp")}
                          alt=""
                        />
                      </Link>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        {item.name}
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">{item.price}</h5>
                      <a className="d-block h5 mb-2" href="">
                        {item.location}
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        {item.address}
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      {item.amenities.map((value) => (
                        <small className="flex-fill text-center border-end py-2">
                          <i className="fa fa-ruler-combined text-primary me-2" />
                          {value}
                        </small>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
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
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
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
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
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
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
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
    </div>
  );
};

export default ListItem;
