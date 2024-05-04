import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function HomePageHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box
        position={"fixed"}
        bg="white"
        w="100%"
        color="white"
        px={{ base: "1rem", md: "4.3rem" }}
        boxShadow={"-1px 9px 22px -9px rgba(0,0,0,0.57)"}
      >
        <Flex justify={"space-between"} py={"0.5rem"} align={"center"}>
          <Text
            fontFamily={"Lily Script One"}
            fontSize={"2rem"}
            color={"#003459"}
            userSelect={"none"}
          >
            Loowaf
          </Text>
          <Stack
            display={{ base: "none", md: "flex" }}
            spacing={20}
            gap={"20px"}
            direction="row"
            align="center"
            fontFamily={"Roboto"}
          >
            <Button
              variant="unstyled"
              w={90}
              h={50}
              borderRadius={"1rem"}
              fontSize={"1rem"}
              border={"none"}
              bg={"#D9D9D9"}
              color={"#000000"}
            >
              Курсы
            </Button>
            <Button
              variant="unstyled"
              w={90}
              h={50}
              borderRadius={"1rem"}
              fontSize={"1rem"}
              border={"none"}
              bg={"#00171F"}
              color={"#FFFFFF"}
            >
              Войти
            </Button>
          </Stack>
          <IconButton
            display={{ base: "block", md: "none" }}
            icon={<HamburgerIcon boxSize={"20px"} />}
            ref={btnRef}
            variant="unstyled"
            bg={"#003459"}
            colorScheme="teal"
            onClick={onOpen}
            color={"#FFFFFF"}
            boxSize={"40px"}
          />
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
