import React from "react";
/* eslint-disable prettier/prettier */
import Embla from "./embla";
import EmblaContainer from "./embla";
import EmblaSlide from "./emblaSlide";

export default function index(props: any) {
  return (
    <>
      <Embla>
        <EmblaContainer>{props.children}</EmblaContainer>
      </Embla>
    </>
  );
}
