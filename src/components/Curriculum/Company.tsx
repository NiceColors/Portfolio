import { Heading, Stack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import Dots from "./Dots";

type CompanyProps = {
  title: string;
  charge: string;
  date: string;
  type?: string;
};

export default function Company(companyProps: CompanyProps) {
  return (
    <>
      <Stack mt={6}>
        <HStack>
          <Heading fontSize="1.275rem" color="gray.800">
            {companyProps.title}
          </Heading>
          <Text
            fontWeight={300}
            as="i"
            position="absolute"
            right="80px"
            color="green.500"
            fontSize="1.175rem"
          >
            {companyProps.type || "Remote"}
          </Text>
        </HStack>
        <HStack w="100%" justifyContent="space-between">
          <Text color="gray.800">{companyProps.charge}</Text>
          <Text
            fontWeight={300}
            as="i"
            position="absolute"
            right="80px"
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
