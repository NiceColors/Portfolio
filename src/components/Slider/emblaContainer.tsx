import { Flex } from "@chakra-ui/react";
import React from "react";

export default function EmblaContainer({children}: any) {
  return (
    <>
        <Flex className="embla__container">
          {children}
      </Flex>
    </>
  );
}
