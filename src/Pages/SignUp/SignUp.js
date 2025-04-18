import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import image from "../../assets/photo1.png";
import gimage from "../../assets/googleIcon.png";
export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const signupndata = {
    name: name,
    address: address,
    pinCode: pinCode,
    phone: phone,
    username: username,
    password: password,
    role: "USER",
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${apiUrl}/accounts/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupndata),
        }
      );

      if (!response.ok) {
        throw new Error("Failed");
      }

      //if response is fine
      //   setisLogedin(true);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <img src={image} alt="Login" className="login-image" />
      </div>
      <div className="loginform">
        <form onSubmit={handleSignUp} className="login-form">
          <img src={image} alt="" className="image" />
          <h1>User Registration</h1>
          {/* <p>Welcome back, Please enter your details</p> */}
          {/* <input type="text" placeholder="Username" value={Username}/> */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Pin Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />

          <input
            type="number"
            placeholder="Phone_Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <a href="/forgot">Forgot Password</a> */}
          <button type="submit">SignUp</button>
          <button type="submit" id="button1">
            <div className="google">
              <div className="image12">
                <img src={gimage} alt="Login" className="image12" />
              </div>
              <div className="p1">
                {" "}
                <span>Sign up with google</span>
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

// page mai components dal ke page app.js mai daldu?