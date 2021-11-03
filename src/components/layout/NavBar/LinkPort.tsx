import React from "react";
import Link from "next/link";
import { Heading } from "@chakra-ui/react";

interface LinkPortProps {
  name: string;
  href: string;
}

export default function LinkPort({ name, href }: LinkPortProps) {
  return (
    <>
      <Heading
        as="h3"
        size="sm"
        fontWeight="bold"
        mb={2}
        className="linkPort links"
      >
        <Link  href={href}>{name}</Link>
      </Heading>
    </>
  );
}
