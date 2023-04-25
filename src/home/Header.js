import React from "react";

const Header = () => {
  return (
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
          <a href="login" className="btn btn-primary px-3 d-none d-lg-flex">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
