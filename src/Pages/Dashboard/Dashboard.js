import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import BottomImage from "../../components/BottomImage";
import Foot from "../../components/Foot";
import Card from "../../components/Card";
import Ads from "../../components/Ads/Ads";
import axios from 'axios';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Fetch geolocation
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error('Error fetching geolocation:', error);
      }
    );
  }, []);

  useEffect(() => {
    // Fetch products based on geolocation
    const fetchProducts = async () => {
      try {
        if (latitude !== null && longitude !== null) {
          const response = await axios.get(`http://localhost:8000/products/?latitude=${latitude}&longitude=${longitude}`);
          setProducts(response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [latitude, longitude]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8000/products/search?query=${query}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <Ads />
      <BottomImage />
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
      <Foot />
    </div>
  );
}
