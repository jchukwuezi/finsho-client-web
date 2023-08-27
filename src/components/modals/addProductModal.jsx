import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import UploadProductForm from '../forms/UploadProductForm'

const AddProductModal = ( {isOpen, onClose} ) => {

    return( 
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
    )
}

export default AddProductModal