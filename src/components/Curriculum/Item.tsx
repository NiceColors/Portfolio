import { HStack, Text, Heading, Box, Stack } from "@chakra-ui/react";
import React from "react";
import Dots from "./Dots";

interface ItemProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Item(ItemProps: ItemProps) {
  return (
    <>
      <HStack>
        <Heading
          mt={8}
          color="gray.700"
          fontSize="2rem"
          position="relative"
          whiteSpace="nowrap"
        >
          <Text as="span" color="green.400">
            {ItemProps.title.substring(0, 3)}
          </Text>
          {ItemProps.title.substring(3, ItemProps.title.length)}
        </Heading>
        <Box
          h="2px"
          position="relative"
          width="full"
          left="0"
          top="25px"
          overflow="hidden"
          bgColor="gray.600"
          ml="10px"
        />
      </HStack>
      <Stack>{ItemProps.children}</Stack>
    </>
  );
}
