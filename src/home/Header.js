import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("data") != null && localStorage.getItem("data") != "null") {
      const userInfo = JSON.parse(localStorage.getItem("data"));
      console.log(userInfo);
      userInfo.map((item) => setUserName(item.fullname));
    }
  }, [userName]);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.setItem("data", null);
    setUserName(null);
  };

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

          {userName != null ? (
            <div
              style={{
                display: "flex",
                direction: "row",
                alignItems: "center",
              }}
            >
              <h5 style={{ marginRight: 5 }}>Hello {userName}</h5>
              <button
                onClick={logoutHandler}
                className="btn btn-primary px-3 d-none d-lg-flex"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="btn btn-primary px-3 d-none d-lg-flex"
            >
              Login
            </button>
          )}

          {/* <a href="login" className="btn btn-primary px-3 d-none d-lg-flex">
            {value}
          </a> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
