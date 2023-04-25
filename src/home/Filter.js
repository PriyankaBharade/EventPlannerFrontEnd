import React from "react";

const Filter = () => {
  return (
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
  );
};

export default Filter;
