import { PaginationTable } from "table-pagination-chakra-ui";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

const ProductTable = ({ products }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [Isopen, setIsOpen] = useState(false);
  const handleEdit = () => {
    setIsOpen(!Isopen);
  };
  return (
    <TableContainer variant="striped" size="sm">
      <Table>
        <Thead>
          <Tr>
            <Th fontSize="sm" textTransform="capitalize">
              Products
            </Th>
            <Th fontSize="sm" textTransform="capitalize">
              Buying Price
            </Th>
            <Th fontSize="sm" textTransform="capitalize">
              Quantity Sold
            </Th>
            <Th fontSize="sm" textTransform="capitalize">
              Availability
            </Th>
            <Th fontSize="sm" textTransform="capitalize">
              Edit Quantity
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.price}</Td>
              <Td>{product.total_sold_quantity}</Td>
              <Td>{product.available_quantity}</Td>
              <Td>
                <FiEdit onClick={handleEdit} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <PaginationTable
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        totalItemsCount={products?.length}
        pageSizeOptions={[10, 25, 50]}
      />
      <EditModal Isopen={Isopen} toggleOpen={handleEdit} />
    </TableContainer>
  );
};
const EditModal = ({ Isopen, toggleOpen }) => {
  return (
    <Modal isOpen={Isopen} onClose={toggleOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize="lg" color="brand">
            Edit Quantity
          </Heading>
          <ModalCloseButton />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Quantity</p>
          <input type="number" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ProductTable;
