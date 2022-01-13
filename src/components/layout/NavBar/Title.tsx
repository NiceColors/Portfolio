import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import IconTitle from "./IconTitle";

interface TitleProps {
  name: string;
}

export default function Title({ name }: TitleProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      _before={{
        content: "''",
        display: "block",
        width: "2px",
        height: "37px",
        background: colorMode === "light" ? "gray.800" : "gray.200",
        position: "absolute",
        top:{ base: "8", md: "0" },
        left: "230px",
      }}
    >
      <IconTitle /> <Heading as="h1" fontSize="2rem">{name}</Heading>
    </Flex>
  );
}
