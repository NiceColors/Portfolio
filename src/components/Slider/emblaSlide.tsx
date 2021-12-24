import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Embla from "./embla";
import EmblaContainer from "./embla";

type Sizes =
  | "10%"
  | "20%"
  | "30%"
  | "40%"
  | "50%"
  | "60%"
  | "70%"
  | "80%"
  | "90%"
  | "100%";

type SlideProps = {
  size: Sizes;
  children?: ReactNode;
};

export default function EmblaSlide(props: SlideProps) {
  return (
    <>
      <Box className="embla__slide" position="relative" maxW="100%" flex={`0 0 ${props.size}`}>
        {props.children}
      </Box>
    </>
  );
}
