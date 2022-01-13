import React from "react";
import Link from "next/link";
import { Heading, useColorMode } from "@chakra-ui/react";

interface LinkPortProps {
  name: string;
  href: string;
}

export default function LinkPort({ name, href }: LinkPortProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Heading
        as="h3"
        size="sm"
        fontWeight="bold"
        mb={2}
        color={colorMode === "light" ? "gray.700" : "gray.100"}
        className="linkPort links"
      >
        <Link  href={href}>{name}</Link>
      </Heading>
    </>
  );
}
