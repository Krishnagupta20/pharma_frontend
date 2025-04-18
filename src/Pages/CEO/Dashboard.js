import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
  Box,
  Text,
  Card,
  CardBody,
  HStack,
  Divider,
} from "@chakra-ui/react";
import StatCard from "./Cards/StatCard";
import axios from "axios";
import ProductTable from "./ProductTable";

const CEODashboard = () => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [statistics, setStatistics] = useState({
    total_products: 0,
    top_selling_product: {},
    low_stock_product: {},
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        if (selectedStore) {
          const productsResponse = await axios.get(
            `http://localhost:8000/stores/${selectedStore}/`,
            config
          );
          setProducts(productsResponse.data[0].products);
          setStatistics(productsResponse.data[0].statistics);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStoreData();
  }, [selectedStore]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.get("http://localhost:8000/stores/", config);
        setStores(response.data);
        if (response.data.length > 0) {
          setSelectedStore(response.data[0].id);
        }
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  const handleStoreChange = (event) => {
    setSelectedStore(event.target.value);
  };

  return (
    <div>
      <Card margin="20px">
        <CardBody>
          <Text fontSize="2xl" marginBottom={"2vh"}>
            {" "}
            Select Store
          </Text>
          <Select
            value={selectedStore}
            onChange={handleStoreChange}
            style={{ height: "8vh" }}
          >
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name}
              </option>
            ))}
          </Select>
        </CardBody>
      </Card>
      <Card margin="20px">
        <CardBody>
          <Text fontSize="2xl">Overall Inventory</Text>
          <HStack
            px={12}
            py={3}
            boxShadow="lg"
            pos="sticky"
            top={0}
            left={0}
            id="top-nav"
            zIndex="banner"
            bg="white"
            justifyContent="space-between"
            marginTop={"4vh"}
          >
            <StatCard
              heading={"Total Products"}
              value1={statistics.total_products}
              subhead1={"Products"}
              color={"#E19133"}
            />
            <Divider orientation="vertical" />
            <StatCard
              heading={"Top Selling"}
              value1={statistics.top_selling_product.name}
              value2={`₹${statistics.top_selling_product.total_revenue}`}
              subhead1={"Product"}
              subhead2={"Revenue"}
              color={"#845EBC"}
            />
            <Divider orientation="vertical" />
            <StatCard
              heading={"Low Stocks"}
              value1={statistics.low_stock_product.name}
              value2={statistics.low_stock_product.current_quantity}
              subhead1={"Product"}
              subhead2={"Qty"}
              color={"#F36960"}
            />
          </HStack>
        </CardBody>
      </Card>
      <Card margin="20px">
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={"2vh"}>
            <Text fontSize="2xl">Inventory</Text>
            <Box display="flex" alignItems="center" marginRight="16vw">
              <Button colorScheme="blue" marginRight={"0.5vw"}>
                Add Product
              </Button>
              {/* Other buttons */}
            </Box>
          </HStack>
          <ProductTable products={products} selectedStore={selectedStore} />
        </CardBody>
      </Card>
    </div>
  );
};

export default CEODashboard;
