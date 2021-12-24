import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type SlideProps = {
  children?: ReactNode;
};

export default function EmblaContainer({children}: SlideProps) {
  return (
    <>
        <Flex className="embla__container">
          {children}
      </Flex>
    </>
  );
}
