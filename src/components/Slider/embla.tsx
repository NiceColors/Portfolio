import React, { ReactNode } from "react";
/* eslint-disable prettier/prettier */
import { Box, useBreakpointValue } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type SlideProps = {
  children?: ReactNode;
};


export default function Embla({ children }: SlideProps){
  const plugins = [Autoplay({ delay: 4000 })];
  const [emblaRef] = useEmblaCarousel({ loop: true }, plugins);

  const variantEmbla = useBreakpointValue({
    sm: "block",
    md: "block",
    lg: "none",
    xl: "none",
  });

  return (
    <>
      <Box
        className="embla"
        display={variantEmbla}
        ref={emblaRef}
        overflow={"hidden"}
      >
        {children}
      </Box>
    </>
  );
}
