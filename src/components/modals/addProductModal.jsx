import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import UploadProductForm from '../forms/UploadProductForm'

const addProductModal = ( {isOpen, onClose} ) => {

    return( 
        <>
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent> 
                <ModalHeader> Add a Product to Your Inventory </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <UploadProductForm />
                </ModalBody>
            </ModalContent>
            
        </Modal>
        </>
    )
}

export default addProductModal