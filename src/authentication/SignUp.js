import "./Login.css";
const SignUp = () => {
  const loginHandler = () => {};
  return (
    <div className="background">
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
              type="text"
            />
            <input
              style={{ marginTop: 20 }}
              className="input"
              placeholder="Email"
              type="email"
            />
            <input
              style={{ marginTop: 20 }}
              className="input"
              placeholder="Password"
              type="password"
            />
            <input
              style={{ marginTop: 20 }}
              className="input"
              placeholder="Confirm Password"
              type="password"
            />
            <button onClick={loginHandler} className="button">
              Signup
            </button>
            <text style={{ marginTop: 20, color: "#fbe9ed" }}>
              You are already user! Login
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
