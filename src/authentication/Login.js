import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import validator from "validator";
import Modal from "../home/Modal.js";

const Login = () => {
  const navigate = useNavigate();
  let signuplink = `Please create your account`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setEmailError] = useState(null);
  const [errorPassword, setPasswordError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setuserData] = useState({});
 

  function login() {
    setIsLoading(true);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    fetch("http://localhost:3001/login", {
      method: 'POST',
      headers: {
        headers,
      },
      body: userData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      });
  }
  const loginHandler = () => {
    if (email.trim() <= 0) {
      setEmailError("Field is required");
      return;
    }
    if (!validator.isEmail(email)) {
      setEmailError("Please Enter Valid Email");
      return;
    }
    if (password.trim() <= 0) {
      setPasswordError("Field is required");
      return;
    }
    if (password.trim().length <= 6) {
      setPasswordError("Password should be contain atlest 6 charactors");
      return;
    }
    setuserData({
      email: "rohit@email.com",
      password: "mypassword",
    });
    // var formData = new FormData();
    // formData.append('email', JSON.stringify("rohit@email.com"));
    // formData.append('password', JSON.stringify("mypassword"));
    // console.log("Data", formData);
    login();
    setEmailError("");
    setPasswordError("");
  };
  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="background">
      <Modal show={isLoading} />
      <div className="card">
        <div className="child-bg">
          <div className="child-item">
            <img className="img" src={require("../img/first.webp")} />
          </div>
          <div className="child-item">
            <h2 style={{ marginTop: 25, color: "#fbe9ed" }}>Login</h2>
            <input
              style={{ marginTop: 40 }}
              className="input"
              placeholder="Email"
              onChange={onEmailChangeHandler}
              type="email"
            />
            {errorEmail && <div style={{ color: "white" }}>{errorEmail}</div>}
            <input
              style={{ marginTop: 25 }}
              className="input"
              placeholder="Password"
              onChange={onPasswordChangeHandler}
              type="password"
            />
            {errorPassword && (
              <div style={{ color: "white" }}>{errorPassword}</div>
            )}
            <button onClick={loginHandler} className="button">
              Login
            </button>
            <a style={{ marginTop: 10, color: "#fbe9ed" }} href="/signup">
              {signuplink}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
