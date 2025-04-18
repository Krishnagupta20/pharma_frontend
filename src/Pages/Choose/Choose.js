import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/photo1.png";
import business from "../../assets/Vector.png";
import cust from "../../assets/Group 48096315.png";
import "./Choose.css";

export default function Choose() {
  const navigate = useNavigate();

  const handleBusinessClick = () => {
    navigate("/CEO-dashboard");
  };

  const handleCustomerClick = () => {
    navigate("/signup");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={image} alt="Login" className="login-image" />
      </div>

      <div className="select-role">
        <div className="customer">
          <button className="button" onClick={handleBusinessClick}>
            <img src={business} alt="Button Image" />
            <h1> Business </h1>
            <p>Register as the CEO of the company</p>
          </button>
        </div>
        <div className="ceo">
          <button className="button" onClick={handleCustomerClick}>
            <img src={cust} alt="Button Image" />
            <h1> Customer </h1>
            <p>Register as the Customer to buy products</p>
          </button>
        </div>
      </div>
    </div>
  );
}
