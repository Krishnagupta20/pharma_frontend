import React, { useState, useEffect } from "react";
import "./LoginPage.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";
import image from "../../assets/photo1.png";
import gimage from "../../assets/googleIcon.png";
import axios from "axios";

export default function LoginPagejs() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      navigateBasedOnRole();
    }
  }, []);

  const navigateBasedOnRole = () => {
    const userRole = localStorage.getItem("user_role");
    if (userRole === "CEO") {
      navigate("/CEO-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    try {
      const { data } = await axios.post("http://localhost:8000/accounts/login/", user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      localStorage.clear();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("user_role", data.user.role);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;

      navigateBasedOnRole();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={image} alt="Login" className="login-image" />
      </div>
      <div className="login-form">
        <form onSubmit={handleLogin} className="login-form">
          <img src={image} alt="" className="image" />
          <h1>Login to Your account</h1>
          <p>Welcome back, Please enter your details</p>
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
          <a href="/forgot">Forgot Password</a>
          <button type="submit">Signin</button>
          <button type="submit" id="button1">
            <div className="google">
              <div className="image12">
                <img src={gimage} alt="Login" className="image12" />
              </div>
              <div className="p1">
                {" "}
                <span>Sign in with google</span>
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
