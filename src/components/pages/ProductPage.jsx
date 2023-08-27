import React from 'react'
import { Flex, Text, Button, useDisclosure, Stack, InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import AddProductModal from '../modals/AddProductModal'
import {BsSearch} from 'react-icons/bs'


const ProductPage = () => {
  return (
    <Flex>
        <Stack direction='row' spacing={3}> 
            <Button>
                Add Product
            </Button>

            <Button>
                Import CSV
            </Button>
        </Stack>


        <Stack>
            {/*Search bar for product table*/}
            <InputGroup>
                <Input type='text' placeholder='Search'/>
                <InputRightElement>
                    <BsSearch size={20}/>
                </InputRightElement>
            </InputGroup>
        </Stack>
    
    
    </Flex>
  )
}

export default ProductPage