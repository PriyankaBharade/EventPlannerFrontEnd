import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import validator from "validator";
import Modal from "../home/Modal.js";
import { Alert, AlertTitle, Button } from "@mui/material";
import "../home/modal.css";
import AlertModal from "./AlertModal";

const Login = () => {
  //const navigate = useNavigate();
  let signuplink = `Please create your account`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setEmailError] = useState(null);
  const [errorPassword, setPasswordError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertShow, setIsAlertShow] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:3001/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        if (result.data != null && result.data != undefined) {
          setIsAlertShow(null);
          setIsLoggedIn(true);
        } else {
          setIsAlertShow(result.message);
          //alert((message = result.message));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsAlertShow(error.message);
        // alert((message = error.message));
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
    <>
      {isAlertShow != null ? <Alert severity="error">{isAlertShow}</Alert> : ""}
      <div className="background">
        <Modal show={isLoading} />
        <div className="card">
          <AlertModal show={isLoggedIn} message="You are Login Successfully"/>
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
    </>
  );
};
export default Login;
