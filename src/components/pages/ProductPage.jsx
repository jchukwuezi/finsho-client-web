import React from "react";
import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Stack,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import MainLayout from "../layouts/MainLayout";
import AddProductModal from "../modals/AddProductModal"

const ProductPage = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <MainLayout>
      <Flex direction='column'>
        <Stack direction="row" spacing={3} justifyContent='flex-end'>
          <Button onClick={onOpen}>Add Product</Button>
          <Button>Import CSV</Button>
        </Stack>

        <AddProductModal isOpen={isOpen} onClose={onClose}/>

        <Stack mt={4} justifyContent='flex-end'>
          {/*Search bar for product table*/}
          <InputGroup>
            <Input type="text" placeholder="Search"/>
            <InputRightElement>
              <BsSearch size={20} />
            </InputRightElement>
          </InputGroup>
        </Stack>
      </Flex>
    </MainLayout>
  );
};

export default ProductPage;
