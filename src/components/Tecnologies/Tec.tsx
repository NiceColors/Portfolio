import { Box, Button } from "@chakra-ui/react";
import React from "react";

interface TecProps{
    nome: string;
    icon: any;
}

export default function Tec({nome, icon}: TecProps) {
  return (
    <>
      <Button
        mt={2}
        w="10vw"
        h="5vh"
        colorScheme="blue"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="7px"
        rightIcon={ icon }
      >
        {nome}
      </Button>
    </>
  );
}
