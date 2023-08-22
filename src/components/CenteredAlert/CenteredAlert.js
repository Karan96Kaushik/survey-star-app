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
  ModalCloseButton
} from "@chakra-ui/react";

function CenteredAlert({ isOpen, onOpen, onClose, text }) {


  return (
    <Box p={0}>
      {/* <Button onClick={onOpen}>Show Alert</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          {/* <ModalCloseButton /> */}
          {/* <ModalBody> */}
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              {/* <AlertIcon boxSize="40px" mr={0} /> */}
              <AlertTitle mt={0} mb={0} fontSize="lg">
                Got it!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                {text}
              </AlertDescription>
            </Alert>
          {/* </ModalBody> */}
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CenteredAlert