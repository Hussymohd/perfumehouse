import React, {useState} from "react";
import Image from "../assets/frame.png";
import { Link } from "react-router-dom";
const Register = () => {

const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [agree, setAgree] = useState(false)
const [error, setError] = useState("")
const handleSubmit = (e) => {
  e.preventDefault()
  // console.log(firstname, lastname, email, password);
 if (!firstname.trim() || !lastname.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
  console.log("Please fill field");
  setError("Pls fill all fields")
 }
  
}



  return (
    <div className="register d-flex justify-content-center align-items-center p-2">
      <form
        className="mx-auto shadow-lg p-3 bg-white rounded-2"
        onSubmit={handleSubmit}>
        <h2 className="fw-bold"> Get Started</h2>
        <p>Lets get started by filling out the information below</p>
        
        <div className="d-flex gap-4">

          <div>
            <label htmlFor="firstname" className="mb-1 fw-bold"> First Name </label>
            <input type="text"  placeholder="Enter Name" className="form-control mb-4 fw-bold" value={firstname} onChange ={(e) => setFirstname(e.target.value)} />
          </div>

          <div>
            <label htmlFor="lastname" className="mb-1 fw-bold">Last Name </label>
            <input type="text" placeholder="Enter Name" className="form-control mb-4" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
          </div>

        </div>

        <label htmlFor="email" className="mb-1 fw-bold">Email</label>
        <input type="email" placeholder="Enter your email" className="form-control mb-4" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="password" className="mb-1 fw-bold"> Password </label>
        <input type="password" placeholder="Enter your password" className="form-control mb-4" value={password} onChange={(e) => setPassword (e.target.value)}/>

        <label htmlFor="password" className="mb-1 fw-bold"> Confirm Password </label>
        <input type="password" placeholder="Confirm your password" className="form-control mb-4 " value={confirmPassword} onChange={(e) => setConfirmPassword (e.target.value)} />

        <input type="checkbox" id="agree" checked={agree} onChange={(e) => setAgree (e.target.checked)}/>
        <label htmlFor="agree" className="form-check-label mt-1 ms-1">
        I agree to <span className="signin">Terms of Services</span> and
        <span className="signin">Privacy Policies</span>
        </label>
        <p className="text-danger"> {error} </p>

        <button type="submit" className="w-100 rounded-4 main-color-bg text-white border-0 my-4 fw-bold fs-5" style={{ height: "60px" }}>
          Sign Up</button>

        <img src={Image} alt="" className="d-block mx-auto" />
        
        <button type="submit" className="w-100 rounded-4 bg-white border-2 border border-secondary my-4 fw-bold fs-5" style={{ height: "60px" }}> Continue with Google </button>

        <p className="text-center fw-light"> Already have an account? <Link to="/Login" className="text-decoration-none signin"> Sign in </Link>
        </p>

      </form>
    </div>
  );
};

export default Register;
