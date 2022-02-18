import { UnorderedList, ListItem, Link } from "@chakra-ui/react";
import React from "react";

interface DotsProps {
  text: string;
  src?: string;
}

export default function Dots({ text, src }: DotsProps) {
  return (
    <>
      <ListItem fontWeight={300} transform="translateX(2.5%)" color="gray.600">
        {src ? <Link href={src}>{text}</Link> : text}
      </ListItem>
    </>
  );
}
