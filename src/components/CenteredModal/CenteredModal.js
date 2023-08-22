import {
  Box,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  Text
} from "@chakra-ui/react";

function CenteredModal({ isOpen, onOpen, onClose, text }) {

	const textColor = "gray.400";
  const titleColor = "white";

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"#0d1038"}>
          <ModalHeader color={textColor}>Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
      
          {/* <Text
            mb='4px'
            ms='4px'
            color={textColor}
            fontWeight='bold'
            fontSize='14px'>
              Note:          
          </Text> */}
              
          <Text
                  mb='4px'
                  ms='4px'
                  color={textColor}
                  fontWeight='bold'
                  fontSize='14px'>
                  1. We require responses for a minimum of 5 clips by each participant, but we want you to continue as long as you like!         
          </Text>              
          {/* <Text
                  mb='4px'
                  ms='4px'
                  color={textColor}
                  fontWeight='bold'
                  fontSize='14px'>
                  2. Click finish any         
          </Text>  */}
          <Text
                  mb='4px'
                  ms='4px'
                  color={textColor}
                  fontWeight='bold'
                  fontSize='14px'>
                  2. Feel free to leave any question that you don't want to answer       
          </Text>
          
          </ModalBody>

          <ModalFooter>
            <Button
              // paddingTop="10px"
              variant='brand'
              fontSize='15px'
              onClick={onClose}
              w='100%'
              maxW='350px'
              h='45'
              mb='20px'
              mt='20px'>

              Close

            </Button>
            {/* <Button bgColor='#582cff' mr={3} onClick={onClose}>
              Close
            </Button> */}
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CenteredModal