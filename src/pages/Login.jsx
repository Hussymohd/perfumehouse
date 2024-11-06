import React, {useState} from "react";
import { Link } from "react-router-dom";
import image from "../assets/frame.png";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstname, lastname, email, password);
    if (
      !email.trim() ||
      !password.trim()     
    ) {
      console.log("Please fill field");
      setError("Pls fill all fields");
    }
  };

  console.log(email);
  
  return (
    <div className="login d-flex justify-content-center align-items-center p-2">
      <form
        className=" mx-auto shadow-lg p-5 bg-white rounded-2"
        onSubmit={handleSubmit}
      >
        <h2 className="fw-bolder">Welcome Back</h2>
        <p>Fill in your information to access your account.</p>

        <label htmlFor="email" className="fw-bold ">
          {" "}
          Email{" "}
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="fw-bold">
          {" "}
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="form-control mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex flex-row justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree" className="form-check-label ms-2">
              Remember Me
            </label>
          </div>
          <div>
            <p className="text-danger">Forgotten Password</p>
          </div>
        </div>
        <p className="text-danger"> {error} </p>
        <button
          type="submit"
          className="w-100 rounded-4 main-color-bg text-white border-0 my-4 fw-bold fs-5"
          style={{ height: "60px" }}
        >
          Sign In{" "}
        </button>
        <img src={image} alt="" className="d-block mx-auto" />
        <button
          type="submit"
          className="w-100 rounded-4 bg-white border-2 border border-secondary my-4 fs-5 fw-bold"
          style={{ height: "60px" }}
        >
          Continue with Google{" "}
        </button>
        <p className="text-center fw-lighter">
          Dont have an account?{" "}
          <Link to="/Register" className="text-decoration-none signin ">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
