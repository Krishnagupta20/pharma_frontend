import { useState, useEffect } from "react";
import { Text, Card, CardBody, HStack, Box, Button } from "@chakra-ui/react";
import StoreCard from "./Cards/StoreCard";

const ManageStore = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await fetch("http://localhost:8000/stores/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch stores");
        }
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <Card margin="20px">
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={"2vh"}>
          <Text fontSize="2xl">Manage Stores</Text>
          <Box display="flex" alignItems="center" marginRight="2vw">
            <Button backgroundColor={'#034C9D'} color='white' width={'8vw'}>
              Add Store
            </Button>
          </Box>
        </HStack>
      </CardBody>
      <CardBody>
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </CardBody>
    </Card>
  );
};

export default ManageStore;
