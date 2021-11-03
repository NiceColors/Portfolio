import {
  Box,
  Button,
  CloseButton,
  Flex,
  Grid,
  Heading,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import LinkPort from "./LinkPort";
import Title from "./Title";

export default function MobileNav() {
  const mobileNav = useDisclosure();
  const variant = useBreakpointValue({ base: "grid", md: "none" });

  return (
    <>
      <Flex display={{ md: "none" }}>
        <Title name={"Portfolio"} />
        <IconButton
          position={ mobileNav.isOpen ? "fixed": "absolute"}
          top={ mobileNav.isOpen ? "10": "0"}
          right="10"
          aria-label="toggle menu"
          icon={
            mobileNav.isOpen ? (
              <CloseButton style={{ zIndex: 20 }} aria-label="Close menu" />
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
          zIndex="999999999"
        />
      </Flex>

      {mobileNav.isOpen && (
        <Grid
          minW="90%"
          position={"fixed"}
          top="8"
          display={variant}
          minH="20vh"
          px="10"
          py="10"
          bg="rgba(255,255, 250, 0.95)"
          boxShadow="md"
          placeContent="center"
          gap="20px"
          zIndex="99999999"
        >
          <LinkPort href={"/"} name="Sobre mim" />
          <LinkPort href={"/"} name="Projetos" />
          <LinkPort href={"/"} name="Tecnologias" />


        </Grid>
      )}
    </>
  );
}
