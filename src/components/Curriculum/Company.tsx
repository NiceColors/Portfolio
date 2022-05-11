import {
  Heading,
  Stack,
  Text,
  HStack,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Dots from "./Dots";

type CompanyProps = {
  title: string;
  charge: string;
  date: string;
  type?: string;
  page?: string;
};

export default function Company(companyProps: CompanyProps) {
  return (
    <>
      <Stack mt={6}>
        <HStack justifyContent="space-between">
          <Heading
            fontSize="1.275rem"
            color={useColorModeValue("gray.800", "white")}
          >
            {companyProps.title}
          </Heading>
          <Box>
            <Text
              fontWeight={300}
              as="i"
              position="relative"
              right={companyProps.page === "index" ? "0px" : "80px"}
              color={useColorModeValue("gray.600", "white")}
              fontSize="1.175rem"
            >
              {companyProps.type || "Remote"}
            </Text>
          </Box>
        </HStack>
        <HStack w="100%" justifyContent="space-between" display={{base:'none', md:'flex'}}>
          <Text color={useColorModeValue("gray.600", "white")}>
            {companyProps.charge}
          </Text>
          <Text
            fontWeight={300}
            as="i"
            position="absolute"
            right={companyProps.page === "index" ? "0px" : "80px"}
            color="gray.500"
            fontSize="0.875rem"
          >
            {companyProps.date}
          </Text>
        </HStack>
      </Stack>
    </>
  );
}
