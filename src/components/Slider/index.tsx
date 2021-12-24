import React, { ReactNode } from "react";
/* eslint-disable prettier/prettier */
import Embla from "./embla";
import EmblaContainer from "./embla";

type SlideProps = {
  children?: ReactNode;
};


export default function index(props: SlideProps) {
  return (
    <>
      <Embla>
        <EmblaContainer>{props.children}</EmblaContainer>
      </Embla>
    </>
  );
}
