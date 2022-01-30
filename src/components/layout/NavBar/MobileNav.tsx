import {
  CloseButton,
  Flex,
  Grid,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import LinkPort from "./LinkPort";
import Title from "./Title";

export default function MobileNav() {
  const mobileNav = useDisclosure();
  const variant = useBreakpointValue({ base: "grid", md: "none" });
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex display={{ md: "none" }}>
        <Flex transform="translateY(60%)">
          <Title name={"Portfolio"} />
        </Flex>
        <IconButton
          position={mobileNav.isOpen ? "fixed" : "absolute"}
          top={mobileNav.isOpen ? "10" : "7"}
          right="8"
          aria-label="toggle menu"
          icon={
            mobileNav.isOpen ? (
              <CloseButton
                style={{
                  color: useColorModeValue("black", "white"),
                  zIndex: 20,
                }}
                aria-label="Close menu"
              />
            ) : (
              <AiOutlineMenu size="1.5em" />
            )
          }
          bg="transparent"
          _hover={{
            bg: "",
            color: "",
          }}
          onClick={mobileNav.isOpen ? mobileNav.onClose : mobileNav.onOpen}
          zIndex="4"
        />
      </Flex>

      {mobileNav.isOpen && (
        <Grid
          minW="95%"
          position={"fixed"}
          top="8"
          display={variant}
          minH="20vh"
          px="10"
          py="10"
          bg={colorMode === "light" ? "rgba(255,255, 250)" : "gray.800"}
          opacity="0.99"
          boxShadow="md"
          placeContent="center"
          gap="20px"
          zIndex="3"
        >
          <LinkPort href={"/"} name="Sobre mim" />
          <LinkPort href={"projects"} name="Projetos" />
          <LinkPort href={"tecnologies"} name="Tecnologias" />
        </Grid>
      )}
    </>
  );
}
