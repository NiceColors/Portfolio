import { UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

interface DotsProps {
  text: string;
}

export default function Dots(dotsProps: DotsProps) {
  return (
    <>
      <ListItem fontWeight={300} transform="translateX(2.5%)" color="gray.600">
        {dotsProps.text}
      </ListItem>
    </>
  );
}
