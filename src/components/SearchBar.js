import React, { useState } from "react";
import "./SearchBar.css";
import sicon from "../assets/searchIcon.png";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`${apiUrl}/products/search?query=${query}`);
      onSearch(response.data);
    } catch (error) {
      console.error("Error searching for products:", error);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for medicines and wellness products"
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <img src={sicon} alt="search" />
      </button>
      {/* <h4 className="deliver">Deliver to : {}</h4> */}
    </form>
  );
};

export default SearchBar;
