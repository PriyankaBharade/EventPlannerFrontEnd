import "./Login.css";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/signup");
  };
  return (
    <div className="background">
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
              placeholder="Username"
              type="text"
            />
            <input
              style={{ marginTop: 25 }}
              className="input"
              placeholder="Username"
              type="password"
            />
            <button onClick={loginHandler} className="button">
              Login
            </button>
            <text style={{ marginTop: 10, color: "#fbe9ed" }}>
              You are not user! Sign up
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
