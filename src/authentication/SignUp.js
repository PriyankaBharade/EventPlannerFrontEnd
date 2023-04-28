import { useState } from "react";
import "./Login.css";
import validator from "validator";
import Modal from "../home/Modal.js";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");

  const [errorUserName, setUserNameError] = useState(null);
  const [errorPassword, setPasswordError] = useState(null);
  const [errorEmail, setEmailError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function createUser() {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: email,
      password: password,
      fullname: userName,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/createUser", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
    // setIsLoading(true);
    // let headers = new Headers();
    // headers.append("Content-Type", "application/json");
    // headers.append("Accept", "application/json");
    // fetch("http://localhost:3001/createUser", {
    //   method: "POST",
    //   headers: {
    //     headers,
    //   },
    //   body: { fullname: userName, email: email, password: password },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setIsLoading(false);
    //   });
  }

  const onNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const onConfrimPasswordChangeHandler = (event) => {
    setConfrimPassword(event.target.value);
  };
  const signupHandler = (event) => {
    if (userName.trim() <= 0) {
      setUserNameError("Field is required");
      return;
    }
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
    if (password.trim() != confrimPassword.trim()) {
      setPasswordError("Password doesn't match");
      return;
    }
    setEmailError(null);
    setPasswordError(null);
    setUserNameError(null);
    createUser();
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
            <h2 style={{ marginTop: 15, color: "#fbe9ed" }}>Sign Up</h2>
            <input
              style={{ marginTop: 40 }}
              className="input"
              placeholder="Name"
              onChange={onNameChangeHandler}
              type="text"
            />
            {errorUserName && (
              <div style={{ color: "white" }}>{errorUserName}</div>
            )}
            <input
              style={{ marginTop: 20 }}
              className="input"
              placeholder="Email"
              onChange={onEmailHandler}
              type="email"
            />
            {errorEmail && <div style={{ color: "white" }}>{errorEmail}</div>}
            <input
              style={{ marginTop: 20 }}
              className="input"
              placeholder="Password"
              onChange={onPasswordChangeHandler}
              type="password"
            />
            {errorPassword && (
              <div style={{ color: "white" }}>{errorPassword}</div>
            )}
            <input
              style={{ marginTop: 20 }}
              className="input"
              placeholder="Confirm Password"
              onChange={onConfrimPasswordChangeHandler}
              type="password"
            />
            {confrimPassword && (
              <div style={{ color: "white" }}>{errorPassword}</div>
            )}
            <button onClick={signupHandler} className="button">
              Signup
            </button>
            <a href="/login" style={{ marginTop: 20, color: "#fbe9ed" }}>
              You are already user! Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
