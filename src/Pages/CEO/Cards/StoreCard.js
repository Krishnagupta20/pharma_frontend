import {
  Text,
  Card,
  CardBody,
  Image,
  HStack,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Heading
} from "@chakra-ui/react";
import { useState } from "react";

const StoreCard = ({ store }) => {
  const [Isopen, setIsOpen] = useState(false);
  const handleEdit = () => {
    setIsOpen(!Isopen);
  }

  return (
    <Card
      width="84%"
      height="100%"
      padding="1rem"
      margin="1rem"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <CardBody>
        <HStack>
          <Image
            src={store.image ?? "https://via.placeholder.com/150"}
            alt="Store Image"
            width="20%"
            height="150px"
            objectFit="cover"
          />
          <Box marginLeft="2%">
            <Text fontSize="xl" color={"gray"} fontWeight={"bold"}>
              {store.name}
            </Text>
            <Text
              fontSize="md"
              color={"gray"}
              marginBottom={"0"}
              marginTop={"5vh"}
            >
              {store.location}
            </Text>
            <Text fontSize="md">
              <Text as="span" fontWeight="bold" color={"gray"} marginTop={"0"}>
                Store Manager -{" "}
              </Text>
              <Text as="span" color={"gray"}>
                {store?.manager ?? "HEHEHEHEH"}
              </Text>
            </Text>
          </Box>
        </HStack>
        <Button
          colorScheme="white"
          marginTop="1rem"
          color={"#034C9D"}
          borderColor="gray.400"
          borderWidth="1px"
          sx={{
            position: "absolute",
            top: "1rem",
            right: "2rem",
          }}
          onClick={handleEdit}
        >
          Edit Store
        </Button>
      </CardBody>
      <EditStoreModal Isopen={Isopen} toggleOpen={handleEdit} store={store} />
    </Card>
  );
};

const EditStoreModal = ({ Isopen, toggleOpen, store }) => {
  return (
    <Modal isOpen={Isopen} onClose={toggleOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize="lg" color="brand">
            Edit Store
          </Heading>
          <ModalCloseButton />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Text>Store Name</Text>
            <input type="text" value={store.name} />
            <Text>Store Location</Text>
            <input type="text" value={store.location} />
            <Text>Store Manager</Text>
            <input type="text" value={store.manager} />
            <Button colorScheme="blue">
              Save Changes
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StoreCard;
